"use client";
import HeroSection from "@/components/HeroSection";
import RecentSearches from "@/components/RecentSearches";
import SearchForm from "@/components/SearchForm";
import Sidebar from "@/components/Sidebar";
import { mockHotels } from "@/data/hotels";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface BookingData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
}

export default function Home() {
  const router = useRouter();
  const [hotels, setHotels] = useState(mockHotels);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const [bookingData, setBookingData] = useState<BookingData>({
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 1,
    rooms: 1,
  });

  // console.log("Booking Data:", bookingData);

  const handleBookingChange = (field: string, value: string | number) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
  };

  // ฟังก์ชันสำหรับจัดการการค้นหา
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append("location", searchQuery);
    router.push(`/hotels/?${params.toString()}`);
  };

  // Fetch all hotels for RecentSearches only (not for main display)
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("/search");
        setHotels(response.data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
        setHotels(mockHotels); // fallback
      } finally {
        setIsLoading(false);
      }
    };
    fetchHotels();
  }, []);

  return (
    <div className="flex h-full w-full bg-[#f7f8fd]">
      <Sidebar />

      {/* Main Content for desktop/tablet */}
      <main className="hidden flex-1 grid-cols-2 sm:grid">
        {/* Left Section: Search & Recent Searches */}
        <section className="flex h-screen flex-col justify-between overflow-auto px-12 py-8">
          <div>
            <form action="" onSubmit={handleSearch} className="mb-8">
              {/* Global Search Bar - ค้นหาทั่วไป */}
              <input
                type="text"
                placeholder="Search city , Country, Place for Travel advisory"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-8 w-full rounded-lg bg-[#e9ebf5] px-6 py-3 text-lg text-gray-700 outline-none transition-shadow focus:ring-2 focus:ring-blue-500"
              />
            </form>

            {/* Search Form Component */}
            <SearchForm
              variant="desktop"
              bookingData={bookingData}
              onBookingChange={handleBookingChange}
            />
          </div>

          {/* Recent Searches Component */}
          <RecentSearches
            hotels={hotels}
            title="Recent Searches"
            variant="desktop"
            isLoading={isLoading}
            bookingData={bookingData}
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
          <form action="" onSubmit={handleSearch} className="mb-8">
            {/* Global Search Bar สำหรับ Mobile */}
            <input
              type="text"
              placeholder="Search city , Country, Place for Travel advisory"
              className="mb-2 w-full rounded-lg bg-[#e9ebf5] px-6 py-2 text-sm text-gray-700 outline-none transition-shadow focus:ring-2 focus:ring-blue-500"
            />
          </form>

          {/* Search Form Component สำหรับ Mobile */}
          <SearchForm
            variant="mobile"
            bookingData={bookingData}
            onBookingChange={handleBookingChange}
          />

          {/* Recent Searches Component สำหรับ Mobile */}
          <RecentSearches
            hotels={hotels}
            title="Recent Searches"
            variant="mobile"
            isLoading={isLoading}
            bookingData={bookingData}
          />
        </section>
      </div>
    </div>
  );
}
