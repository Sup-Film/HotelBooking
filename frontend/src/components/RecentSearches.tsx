"use client";
import { Hotel } from "@/types";
import HotelCard from "./Hotelcard";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";

interface RecentSearchesProps {
  hotels: Hotel[]; // รายการโรงแรมที่จะแสดง
  title?: string; // หัวข้อของ section
  variant?: "desktop" | "mobile";
  isLoading?: boolean; // สถานะการโหลดข้อมูล
}

export function RecentSearches({
  hotels,
  title = "Recent Searches",
  variant = "desktop",
  isLoading = false,
}: RecentSearchesProps) {
  // ฟังก์ชันสำหรับจัดการการเลือกโรงแรม
  const handleHotelBooking = (hotelId: string) => {
    // นำทางไปยังหน้าจองโรงแรม
    console.log(`Booking hotel with ID: ${hotelId}`);
  };

  // แสดง Loading state ขณะโหลดข้อมูล
  if (isLoading) {
    return (
      <div className="w-full">
        <h3 className="mb-4 text-lg font-semibold">{title}</h3>
        <div className={variant === "desktop" ? "flex flex-col gap-4" : "flex flex-row gap-x-5 overflow-x-auto pb-2"}>
          {/* Skeleton สำหรับแต่ละ card */}
          {Array.from({ length: variant === "desktop" ? 3 : 2 }).map((_, i) => (
            <LoadingSkeleton
              key={i}
              width={variant === "desktop" ? "w-full" : "w-64"}
              height={variant === "desktop" ? "h-40" : "h-32"}
              rounded="rounded-xl"
              className=""
            />
          ))}
        </div>
      </div>
    );
  }

  // ถ้าไม่มีข้อมูลโรงแรมหลังจากโหลดเสร็จแล้ว
  if (!hotels || hotels.length === 0) {
    return (
      <div className="w-full">
        <h3 className="mb-4 text-lg font-semibold">{title}</h3>
        <div className="py-8 text-center">
          <p className="text-gray-500">No hotels found</p>
        </div>
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
              key={hotel.id}
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
