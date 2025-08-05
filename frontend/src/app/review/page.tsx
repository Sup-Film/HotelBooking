import React from "react";
import Sidebar from "@/components/Sidebar";
import ExploreSearchBar from "@/components/ExploreSearchBar";
import HotelInfo from "./components/HotelInfo";
import CheckinSummary from "./components/CheckinSummary";
import GuestForm from "./components/GuestForm";
import PriceSummary from "./components/PriceSummary";
import api from "@/lib/api";
import { Hotel } from "@/types";

// ฟังก์ชัน Utility สำหรับคำนวณจำนวนคืน (สามารถแยกไปไฟล์อื่นได้)
function getNights(start: string, end: string): number {
  if (!start || !end) return 1;
  const d1 = new Date(start);
  const d2 = new Date(end);
  // ป้องกันกรณีวันที่ไม่ถูกต้อง และคืนค่าอย่างน้อย 1 คืน
  if (isNaN(d1.getTime()) || isNaN(d2.getTime()) || d2 <= d1) {
    return 1;
  }
  const diff = Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
  return diff;
}

// ฟังก์ชันดึงข้อมูลโรงแรมและคำนวณราคา ทำงานบน Server Side
async function getBookingData(params: {
  hotelId: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
}) {
  try {
    const hotelPromise = api.get<Hotel>(`/${params.hotelId}`);
    const nights = getNights(params.checkIn, params.checkOut);

    const pricePromise = api.post("/calculate-cost", {
      hotelId: params.hotelId,
      roomType: params.roomType,
      days: nights,
    });

    // 3. ดึงข้อมูลพร้อมกันเพื่อ Performance ที่ดีขึ้น
    const [hotelResponse, priceResponse] = await Promise.all([
      hotelPromise,
      pricePromise,
    ]);

    return {
      hotel: hotelResponse.data,
      priceInfo: {
        nights: nights,
        price: priceResponse.data.subtotal,
        vat: priceResponse.data.taxesAndFees,
        total: priceResponse.data.totalAmount,
      },
    };
  } catch (error) {
    console.error("Error fetching booking data:", error);
    return { hotel: null, priceInfo: null };
  }
}

const ReviewHotelPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const { hotelId, roomType, checkIn, checkOut, adults, children } =
    searchParams;
  const guests = `${adults || 1} Adult(s)${children ? `, ${children} Child(ren)` : ""}`;

  // ดึงข้อมูลโรงแรมและราคาบน Server Side
  const bookingData = await getBookingData({
    hotelId,
    roomType,
    checkIn,
    checkOut,
  });
  // ทำการ destructure ข้อมูลที่ได้
  const { hotel, priceInfo } = bookingData;

  if (!hotel || !priceInfo) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p>Could not load booking details. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full">
      <Sidebar />

      {/* Main content for desktop */}
      <div className="hidden flex-1 flex-col sm:flex">
        <div className="bg-blue-50 px-8 py-8">
          <ExploreSearchBar variant="desktop" configKey="review" />
        </div>
        <div className="flex w-full gap-8 px-8 py-8">
          {/* Left Section */}
          <div className="flex-1 flex-row">
            <div className="mb-4 text-xl font-semibold">
              Review your booking
            </div>
            {/* 6. ส่งข้อมูลที่ดึงมาแล้วเป็น Props */}
            <HotelInfo
              variant="desktop"
              name={hotel.name}
              location={hotel.location}
              review={hotel.description}
              image={hotel.image[0]}
              stars={Math.round(hotel.rating / 2)}
            />
            <CheckinSummary
              variant="desktop"
              checkIn={checkIn}
              checkOut={checkOut}
              guests={guests}
              nights={priceInfo.nights}
            />
            {/* 7. GuestForm ยังคงเป็น Client Component เพราะต้องรับ Input จากผู้ใช้ */}
            <GuestForm variant="desktop" />
          </div>
          {/* Right Section */}
          <PriceSummary
            variant="desktop"
            nights={priceInfo.nights}
            price={priceInfo.price}
            vat={priceInfo.vat}
            total={priceInfo.total}
          />
        </div>
      </div>

      {/* Mobile view */}
      <div className="mb-24 flex-1 sm:hidden">
        <div className="hidden flex-1 flex-col sm:flex">
          <div className="bg-blue-50 px-8 py-8">
            <ExploreSearchBar variant="mobile" configKey="review" />
          </div>
          <div className="flex w-full gap-8 px-8 py-8">
            {/* Left Section */}
            <div className="flex-1 flex-row">
              <div className="mb-4 text-xl font-semibold">
                Review your booking
              </div>
              {/* 6. ส่งข้อมูลที่ดึงมาแล้วเป็น Props */}
              <HotelInfo
                variant="mobile"
                name={hotel.name}
                location={hotel.location}
                review={hotel.description}
                image={hotel.image[0]}
                stars={Math.round(hotel.rating / 2)}
              />
              <CheckinSummary
                variant="mobile"
                checkIn={checkIn}
                checkOut={checkOut}
                guests={guests}
                nights={priceInfo.nights}
              />
              {/* 7. GuestForm ยังคงเป็น Client Component เพราะต้องรับ Input จากผู้ใช้ */}
              <GuestForm variant="mobile" />
            </div>
            {/* Right Section */}
            <PriceSummary
              variant="mobile"
              nights={priceInfo.nights}
              price={priceInfo.price}
              vat={priceInfo.vat}
              total={priceInfo.total}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewHotelPage;
