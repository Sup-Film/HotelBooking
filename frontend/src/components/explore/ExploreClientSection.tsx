"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Hotel } from "@/types/index";
import RecentSearches from "../RecentSearches";
import SearchForm from "../SearchForm";

// Interface สำหรับ prop ที่รับเข้ามาเป็นข้อมูลโรงแรมจาก server side
interface ExploreClientSectionProps {
  initialHotels: Hotel[]; // รับข้อมูลโรงแรมเริ่มต้นที่ fetch มาจาก server
  variant: "desktop" | "mobile"; // ใช้เพื่อกำหนดรูปแบบการแสดงผล
}

// สร้าง Interface สำหรับ state การจอง
interface BookingData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
}

const ExploreClientSection = ({
  initialHotels,
  variant,
}: ExploreClientSectionProps) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [bookingData, setBookingData] = useState<BookingData>({
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 1,
    rooms: 1,
  });

  const handleBookingChange = (field: string, value: string | number) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/hotels?location=${searchQuery}`);
  };

  return (
    <section className="flex h-screen flex-col justify-between overflow-auto px-12 py-8">
      <div>
        <form onSubmit={handleSearch} className="mb-8">
          <input
            type="text"
            placeholder="Search city , Country, Place for Travel advisory"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-8 w-full rounded-lg bg-[#e9ebf5] px-6 py-3 text-lg text-gray-700 outline-none transition-shadow focus:ring-2 focus:ring-blue-500"
          />
        </form>
        {/* 4. SearchForm ใช้ State และ Function จากที่นี่ */}
        <SearchForm
          variant={variant}
          bookingData={bookingData}
          onBookingChange={handleBookingChange}
        />
      </div>

      {/* 5. RecentSearches ก็ใช้ State จากที่นี่เช่นกัน */}
      <RecentSearches
        hotels={initialHotels} // ใช้ข้อมูลที่ส่งมาจาก Server
        title="Recent Searches"
        variant={variant}
        bookingData={bookingData}
      />
    </section>
  );
};
export default ExploreClientSection;
