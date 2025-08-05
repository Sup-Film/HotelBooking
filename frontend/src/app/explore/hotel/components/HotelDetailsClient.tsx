"use client";

import { useState } from "react";
import { Hotel } from "@/types";
import HotelSearchBar from "./HotelSearchBar";
import RoomCard from "./RoomCard";
import CardRating from "./CardRating";

interface BookingData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
}

// รับข้อมูล hotel ที่ถูก fetch มาจาก Server Components เป็น prop
interface HotelDetailsClientProps {
  hotel: Hotel;
  variant: "desktop" | "mobile";
}

const HotelDetailsClient = ({ hotel, variant }: HotelDetailsClientProps) => {
  const [bookingData, setBookingData] = useState<BookingData>({
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleBookingChange = (field: string, value: string | number) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Search Bar Layout */}
      <HotelSearchBar
        variant={variant}
        bookingData={bookingData}
        onBookingChange={handleBookingChange}
      />

      {/* Main Content: Left-Right Section */}
      <div className="flex gap-16 px-8 py-6">
        {/* Left Section: Info and Rooms */}
        <div className="min-w-0 flex-1">
          <div className="mb-4 mt-4 flex items-center justify-between gap-2">
            <div className="flex flex-col justify-items-center">
              <h2 className="mb-1 text-2xl font-semibold text-gray-900">
                {hotel.name}
              </h2>
              <p className="cursor-pointer text-base text-blue-400 hover:underline">
                {hotel.location}
              </p>
            </div>
            <button className="rounded-lg border border-blue-600 px-4 py-2 font-medium text-blue-600">
              Price Starting from {hotel.price} BAHT
            </button>
          </div>

          {/* Room Cards: ส่ง bookingData ที่เป็น State ลงไป */}
          <RoomCard hotel={hotel} variant={variant} bookingData={bookingData} />
        </div>

        {/* Right Section: Rating & Services */}
        <CardRating hotel={hotel} variant={variant} />
      </div>
    </>
  );
};
export default HotelDetailsClient;
