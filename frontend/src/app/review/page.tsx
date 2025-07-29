"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import Sidebar from "@/components/Sidebar";
import ExploreSearchBar from "@/components/ExploreSearchBar";
import HotelInfo from "./components/HotelInfo";
import CheckinSummary from "./components/CheckinSummary";
import GuestForm from "./components/GuestForm";
import PriceSummary from "./components/PriceSummary";
import ReviewSearchBar from "./components/ReviewSearchBar";

interface PriceResponse {
  nights: number;
  price: number;
  vat: number;
  total: number;
}

const ReviewHotelPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // รับ param จาก query string
  const roomType = searchParams.get("roomType") || "Deluxe Room";
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const guests = searchParams.get("guests") || "1";

  // สมมุติข้อมูลโรงแรม/ห้อง (ควรดึงจาก API จริง)
  const hotel = {
    name: "Holiday Inn Resort",
    location: "Tambudki, Arpora, goa, Goa, India",
    review: "This hotel is reviewed by global firm",
    image: "/images/hotel.png",
    stars: 4,
  };

  // State สำหรับข้อมูลราคา (mockup fallback)
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

  // เรียก API คำนวณราคา ถ้า error หรือไม่มี backend ให้ใช้ mockup
  useEffect(() => {
    const nights = getNights(checkIn, checkOut);
    setLoading(true);
    fetch(
      `/api/calculate?roomType=${encodeURIComponent(roomType)}&nights=${nights}`,
    )
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => setPriceInfo(data))
      .catch(() => {
        // fallback mockup
        const price = 1500 * nights;
        const vat = price * 0.07;
        setPriceInfo({ nights, price, vat, total: price + vat });
      })
      .finally(() => setLoading(false));
  }, [roomType, checkIn, checkOut]);

  // if (!checkIn || !checkOut || !guests) {
  //   return <div className="p-8 text-red-500">Missing required parameters.</div>;
  // }

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
          <ReviewSearchBar variant="desktop" />
        </div>

        <div className="flex w-full gap-8 px-8 py-8">
          {/* Left: Review Info */}
          <div className="flex-1 flex-row">
            <div className="mb-4 text-xl font-semibold">
              Review your booking
            </div>
            <HotelInfo
              variant="desktop"
              name={hotel.name}
              location={hotel.location}
              review={hotel.review}
              image={hotel.image}
              stars={hotel.stars}
            />
            <CheckinSummary
              variant="desktop"
              checkIn={checkIn}
              checkOut={checkOut}
              guests={guests}
              nights={priceInfo ? priceInfo.nights : null}
            />
            <GuestForm variant="desktop" />
            <button className="mt-2 w-1/3 rounded-lg bg-blue-600 py-3 font-semibold text-white">
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
      </div>

      {/* Mobile view */}
      <div className="mb-24 flex-1 sm:hidden">
        <div className="flex flex-col bg-blue-50 px-4">
          <ExploreSearchBar variant="mobile" />
          <ReviewSearchBar variant="mobile" />
        </div>

        <div className="flex w-full gap-8 px-4 py-8">
          {/* Left: Review Info */}
          <div className="flex-1 flex-row">
            <div className="mb-4 text-xl font-semibold">
              Review your booking
            </div>
            <HotelInfo
              variant="mobile"
              name={hotel.name}
              location={hotel.location}
              review={hotel.review}
              image={hotel.image}
              stars={hotel.stars}
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

            <GuestForm variant="mobile" />
            <button className="mt-2 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewHotelPage;
