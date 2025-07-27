"use client";
import { Hotel } from "@/types";
import HotelCard from "./Hotelcard";

interface RecentSearchesProps {
  hotels: Hotel[]; // รายการโรงแรมที่จะแสดง
  title?: string; // หัวข้อของ section
  variant?: "desktop" | "mobile";
  onHotelSelect?: (hotelId: string) => void; // callback เมื่อเลือกโรงแรม
}

export function RecentSearches({
  hotels,
  title = "Recent Searches",
  variant = "desktop",
  onHotelSelect,
}: RecentSearchesProps) {
  // ฟังก์ชันสำหรับจัดการการเลือกโรงแรม
  const handleHotelBooking = (hotelId: string) => {
    if (onHotelSelect) {
      onHotelSelect(hotelId);
    } else {
      // Default behavior
      console.log(`Selected hotel: ${hotelId}`);
    }
  };

  // ถ้าไม่มีข้อมูลโรงแรม ไม่แสดงอะไร
  if (!hotels || hotels.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500">No hotels found</p>
      </div>
    );
  }

  // Desktop version - แสดงเป็น vertical list
  if (variant === "desktop") {
    return (
      <div className="w-full">
        <h3 className="mb-4 text-lg font-semibold">{title}</h3>
        <div className="flex flex-col gap-4">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id} // ใช้ unique id เป็น key เพื่อให้ React render ได้ถูกต้อง
              hotel={hotel}
              variant="desktop"
              onBooking={handleHotelBooking}
            />
          ))}
        </div>
      </div>
    );
  }

  // Mobile version - แสดงเป็น horizontal scroll
  return (
    <div className="flex flex-col">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>

      {/* Container สำหรับ horizontal scrolling */}
      <div className="flex flex-row items-center gap-x-5 overflow-x-auto pb-2">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            variant="mobile"
            onBooking={handleHotelBooking}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;
