"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import Sidebar from "@/components/Sidebar";
import ExploreSearchBar from "@/components/ExploreSearchBar";
import HotelInfo from "./components/HotelInfo";
import CheckinSummary from "./components/CheckinSummary";
import GuestForm, { GuestDetails } from "./components/GuestForm";
import PriceSummary from "./components/PriceSummary";
import ReviewSearchBar from "./components/ReviewSearchBar";
import api from "@/lib/api";
import { Hotel } from "@/types";
import { useBooking } from "@/context/BookingContext";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";


interface PriceResponse {
  nights: number;
  price: number;
  vat: number;
  total: number;
}

const ReviewHotelPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { bookingDetails, setBookingDetails } = useBooking();

  // รับ param จาก query string
  const hotelId = searchParams.get("hotelId") || "";
  const roomType = searchParams.get("roomType") || "Deluxe Room";
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const guests = searchParams.get("guests") || "1";

  // State สำหรับข้อมูลราคา (mockup fallback)
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [priceInfo, setPriceInfo] = useState<PriceResponse | null>(null);
  const [loading, setLoading] = useState(true);

  // คำนวณจำนวนคืน
  function getNights(start: string, end: string) {
    if (!start || !end) return 1;
    const d1 = new Date(start);
    const d2 = new Date(end);
    const diff = Math.max(
      1,
      Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24)),
    );
    return diff;
  }

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await api.get(`/${hotelId}`);
        setHotel(response.data);
        console.log("Fetched hotel data:", response.data);
        const nights = getNights(checkIn, checkOut);

        const priceResponse = await api.post("/calculate-cost", {
          hotelId: hotelId,
          roomType: roomType,
          days: nights,
        });
        console.log("Price response:", priceResponse.data);

        setPriceInfo({
          nights: nights,
          price: priceResponse.data.subtotal,
          vat: priceResponse.data.taxesAndFees,
          total: priceResponse.data.totalAmount,
        });
        setBookingDetails({
          hotel: response.data,
          priceInfo: {
            nights: nights,
            price: priceResponse.data.subtotal,
            vat: priceResponse.data.taxesAndFees,
            total: priceResponse.data.totalAmount,
          },
        });
        setLoading(false);
      } catch (error) {
        console.log("Error fetching hotel data:", error);
      }
    };
    fetchHotelData();
  }, [hotelId, roomType, checkIn, checkOut]);

  const [guestDetails, setGuestDetails] = useState<GuestDetails>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    specialRequest: "",
  });

  const [errors, setErrors] = useState<Partial<GuestDetails>>({});

  const handleDetailsChange = (field: keyof GuestDetails, value: string) => {
    setGuestDetails((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<GuestDetails> = {};

    if (!guestDetails.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }
    if (!guestDetails.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }
    if (!guestDetails.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(guestDetails.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!guestDetails.mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    }

    setErrors(newErrors);
    // ถ้า object newErrors ไม่มี key เลย แสดงว่าไม่มี error
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    // 3. เรียกใช้ฟังก์ชัน validate
    if (validate()) {
      // ถ้าไม่มี Error, ไปยังหน้า payment
      setBookingDetails({ guestDetails });
      console.log("Validation passed. Navigating to payment...");
      router.push("/payment");
    } else {
      console.log("Validation failed.");
    }
  };

  return (
    <div className="flex h-full w-full">
      <Sidebar />

      {/* Main content for desktop */}
      <div className="hidden flex-1 flex-col sm:flex">
        <div className="bg-blue-50 px-8 py-8">
          <ExploreSearchBar
            variant="desktop"
            configKey="review"
            onBack={() => router.back()}
          />
          {/* Search Bar (mock) */}
          <ReviewSearchBar
            variant="desktop"
            checkIn={checkIn}
            checkOut={checkOut}
            guests={guests}
          />
        </div>
        {loading ? (
          <div className="flex h-full items-center justify-center">
            <LoadingSkeleton width="w-full" height="h-96" rounded="rounded-xl" lines={1} />
          </div>
        ) : hotel ? (
          <div className="flex w-full gap-8 px-8 py-8">
            {/* Left: Review Info */}
            <div className="flex-1 flex-row">
              <div className="mb-4 text-xl font-semibold">
                Review your booking
              </div>
              <HotelInfo
                variant="desktop"
                name={hotel?.name || "Hotel Name"}
                location={hotel?.location || "Hotel Location"}
                review={hotel?.description || "Hotel Description"}
                image={hotel?.image[0] || "/placeholder.jpg"}
                stars={hotel?.rating ? Math.round(hotel.rating / 2) : 0}
              />
              <CheckinSummary
                variant="desktop"
                checkIn={checkIn}
                checkOut={checkOut}
                guests={guests}
                nights={priceInfo?.nights ?? null}
              />
              <GuestForm
                variant="desktop"
                guestDetails={guestDetails}
                onDetailsChange={handleDetailsChange}
                errors={errors}
              />
              <button
                className="mt-2 w-1/3 rounded-lg bg-blue-600 py-3 font-semibold text-white"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
            {/* Right: Price Summary */}
            <PriceSummary
              variant="desktop"
              nights={priceInfo ? priceInfo.nights : null}
              price={priceInfo ? priceInfo.price : null}
              vat={priceInfo ? priceInfo.vat : null}
              total={priceInfo ? priceInfo.total : null}
            />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="text-gray-500">Hotel not found</p>
          </div>
        )}
      </div>

      {/* Mobile view */}
      <div className="mb-24 flex-1 sm:hidden">
        <div className="flex flex-col bg-blue-50 px-4">
          <ExploreSearchBar variant="mobile" />
          <ReviewSearchBar
            variant="mobile"
            checkIn={checkIn}
            checkOut={checkOut}
            guests={guests}
          />
        </div>

        {loading ? (
          <div className="flex h-full items-center justify-center">
            <LoadingSkeleton width="w-full" height="h-64" rounded="rounded-xl" lines={1} />
          </div>
        ) : hotel ? (
          <div className="flex w-full gap-8 px-4 py-8">
            {/* Left: Review Info */}
            <div className="flex-1 flex-row">
              <div className="mb-4 text-xl font-semibold">
                Review your booking
              </div>
              <HotelInfo
                variant="mobile"
                name={hotel?.name || "Hotel Name"}
                location={hotel?.location || "Hotel Location"}
                review={hotel?.description || "Hotel Description"}
                image={hotel?.image[0] || "/placeholder.jpg"}
                stars={hotel?.rating ? Math.round(hotel.rating / 2) : 0}
              />
              <CheckinSummary
                variant="mobile"
                checkIn={checkIn}
                checkOut={checkOut}
                guests={guests}
                nights={priceInfo ? priceInfo.nights : null}
              />
              {/* Summary */}
              <PriceSummary
                variant="mobile"
                nights={priceInfo ? priceInfo.nights : null}
                price={priceInfo ? priceInfo.price : null}
                vat={priceInfo ? priceInfo.vat : null}
                total={priceInfo ? priceInfo.total : null}
              />

              <GuestForm
                variant="mobile"
                guestDetails={guestDetails}
                onDetailsChange={handleDetailsChange}
                errors={errors}
              />
              <button
                className="mt-2 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="text-gray-500">Hotel not found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewHotelPage;
