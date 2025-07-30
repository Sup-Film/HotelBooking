"use client";
import { Hotel } from "@/types";
import HotelCard from "./Hotelcard";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { useRouter } from "next/navigation";

interface RecentSearchesProps {
  hotels: Hotel[]; // รายการโรงแรมที่จะแสดง
  title?: string; // หัวข้อของ section
  variant?: "desktop" | "mobile";
  isLoading?: boolean; // สถานะการโหลดข้อมูล
  bookingData?: {
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    rooms: number;
  };
}

export function RecentSearches({
  hotels,
  title = "Recent Searches",
  variant = "desktop",
  isLoading = false,
  bookingData = { checkIn: "", checkOut: "", adults: 1, children: 0, rooms: 1 },
}: RecentSearchesProps) {
  const router = useRouter();

  // ฟังก์ชันสำหรับจัดการการเลือกโรงแรม
  const handleHotelBooking = (hotelId: string, room: string) => {
    if (!bookingData.checkIn || !bookingData.checkOut) {
      alert("Please select Check-in and Check-out dates.");
      return;
    }
    
    const checkInDate = new Date(bookingData.checkIn);
    const checkOutDate = new Date(bookingData.checkOut);

    if (checkOutDate <= checkInDate) {
      alert("Check-out date must be after Check-in date.");
      return;
    }

    const params = new URLSearchParams();
    params.append("hotelId", hotelId);
    params.append("roomType", room);
    params.append("checkIn", bookingData.checkIn);
    params.append("checkOut", bookingData.checkOut);
    params.append("rooms", bookingData.rooms.toString());
    params.append(
      "guests",
      `${bookingData.adults} Adults, ${bookingData.children} Children`,
    );

    router.push(`/review?${params.toString()}`);
  };

  // แสดง Loading state ขณะโหลดข้อมูล
  if (isLoading) {
    return (
      <div className="w-full">
        <h3 className="mb-4 text-lg font-semibold">{title}</h3>
        <div
          className={
            variant === "desktop"
              ? "flex flex-col gap-4"
              : "flex flex-row gap-x-5 overflow-x-auto pb-2"
          }
        >
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
          {hotels.map((hotel) =>
            hotel.rooms.map((room, idx) => (
              <HotelCard
                key={idx}
                hotel={hotel}
                room={room}
                variant="desktop"
                onBooking={handleHotelBooking}
              />
            )),
          )}
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
        {hotels.map((hotel) =>
          hotel.rooms.map((room, idx) => (
            <HotelCard
              key={idx}
              hotel={hotel}
              room={room}
              variant="mobile"
              onBooking={handleHotelBooking}
            />
          )),
        )}
      </div>
    </div>
  );
}

export default RecentSearches;
