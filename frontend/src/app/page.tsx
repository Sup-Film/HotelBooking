"use client";
import HeroSection from "@/components/HeroSection";
import RecentSearches from "@/components/RecentSearches";
import SearchForm from "@/components/SearchForm";
import Sidebar from "@/components/Sidebar";
import { mockHotels } from "@/data/hotels";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [hotels, setHotels] = useState(mockHotels);

  // Fetch all hotels for RecentSearches only (not for main display)
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await api.get("/search");
        setHotels(response.data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
        setHotels(mockHotels); // fallback
      }
    };
    fetchHotels();
  }, []);

  const handleSearch = (criteria: { location: string }) => {
    router.push(`/explore/${encodeURIComponent(criteria.location)}`);
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
            <SearchForm variant="desktop" onSearch={handleSearch} />
          </div>

          {/* Recent Searches Component */}
          <RecentSearches
            hotels={hotels}
            title="Recent Searches"
            variant="desktop"
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
          <SearchForm variant="mobile" onSearch={handleSearch} />

          {/* Recent Searches Component สำหรับ Mobile */}
          <RecentSearches
            hotels={hotels}
            title="Recent Searches"
            variant="mobile"
          />
        </section>
      </div>
    </div>
  );
}
