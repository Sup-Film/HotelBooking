"use client";
import HeroSection from "@/components/HeroSection";
import RecentSearches from "@/components/RecentSearches";
import SearchForm from "@/components/SearchForm";
import Sidebar from "@/components/Sidebar";
import { mockHotels } from "@/data/hotels";

export default function Home() {
  // ฟังก์ชันสำหรับจัดการการเลือกโรงแรม
  const handleHotelSelect = (hotelId: string) => {
    console.log("Selected hotel:", hotelId);
    // ในอนาคตจะ navigate ไปหน้ารายละเอียดโรงแรม
    // router.push(`/hotels/${hotelId}`);
  };

  return (
    <div className="flex h-full w-full bg-[#f7f8fd]">
      <Sidebar />

      {/* Main Content for desktop/tablet */}
      <main className="hidden flex-1 grid-cols-2 sm:grid">
        {/* Left Section: Search & Recent Searches */}
        <section className="flex h-screen flex-col justify-between overflow-auto px-12 py-8">
          <div>
            {/* Global Search Bar - ค้นหาทั่วไป */}
            <input
              type="text"
              placeholder="Search city , Country, Place for Travel advisory"
              className="mb-8 w-full rounded-lg bg-[#e9ebf5] px-6 py-3 text-lg text-gray-700 outline-none transition-shadow focus:ring-2 focus:ring-blue-500"
            />

            {/* Search Form Component */}
            <SearchForm variant="desktop" />
          </div>

          {/* Recent Searches Component */}
          <RecentSearches
            hotels={mockHotels}
            title="Recent Searches"
            variant="desktop"
            onHotelSelect={handleHotelSelect}
          />
        </section>

        {/* Right Section: Hero Image & Text */}
        <HeroSection variant="desktop" />
      </main>

      {/* Mobile Content */}
      <div className="mb-20 h-full w-full sm:hidden">
        {/* Hero Section สำหรับ Mobile */}
        <HeroSection variant="mobile" />

        {/* Section Content สำหรับ Mobile */}
        <section className="flex flex-col overflow-hidden p-5">
          {/* Global Search Bar สำหรับ Mobile */}
          <input
            type="text"
            placeholder="Search city , Country, Place for Travel advisory"
            className="mb-2 w-full rounded-lg bg-[#e9ebf5] px-6 py-2 text-sm text-gray-700 outline-none transition-shadow focus:ring-2 focus:ring-blue-500"
          />

          {/* Search Form Component สำหรับ Mobile */}
          <SearchForm variant="mobile" />

          {/* Recent Searches Component สำหรับ Mobile */}
          <RecentSearches
            hotels={mockHotels}
            title="Recent Searches"
            variant="mobile"
            onHotelSelect={handleHotelSelect}
          />
        </section>
      </div>
    </div>
  );
}
