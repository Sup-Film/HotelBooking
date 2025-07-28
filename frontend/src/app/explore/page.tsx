"use client";
import Sidebar from "@/components/Sidebar";
import { mockRecommendedHotels } from "@/data/hotels";
import RecommendedList from "./components/RecommendedList";
import ExploreSearchBar from "./components/ExploreSearchBar";
import CardBestPlace from "./components/CardBestPlace";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Hotel } from "@/types/index";
import { useSearchParams } from "next/navigation";

export default function ExplorePage() {
  const searchParams = useSearchParams();
  const location = searchParams?.get("location") ?? "";

  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchHotels = async () => {
      try {
        const res = await api.get(`/search?location=${location}`);
        setHotels(res.data);
        // console.log("Fetched hotels:", res.data);
      } catch (error) {
        setHotels([]); // หรือ mockHotels
        console.error("Error fetching hotels:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHotels();
  }, [location]);

  return (
    <div className="flex h-full w-full bg-[#f7f8fd]">
      <Sidebar />

      {/* Main Content for Desktop */}
      <div className="hidden flex-1 flex-col sm:flex">
        {/* Top Section: Search Bar */}
        <ExploreSearchBar variant="desktop" />

        {/* Bottom Section: 2 columns */}
        <div className="flex flex-1 gap-6 px-8 pb-8">
          {/* Left Section (80%) */}
          <section className="flex w-4/5 flex-col gap-4 rounded-xl bg-white p-6 shadow-lg">
            {/* Main Content: You can add hotel list, filters, etc. here */}
            <div className="flex justify-between">
              <h2 className="mb-4 text-2xl font-bold">
                Best places to enjoy your stay
              </h2>
              <div className="flex gap-4">
                <button className="rounded-md border p-2 text-sm font-bold text-blue-500 hover:underline">
                  Sort by
                </button>
                <button className="rounded-md border p-2 text-sm font-bold text-blue-500 hover:underline">
                  Filter
                </button>
              </div>
            </div>
            {isLoading ? (
              <div className="py-8 text-center text-blue-500">Loading...</div>
            ) : hotels.length === 0 ? (
              <div className="py-8 text-center text-gray-500">No hotels found</div>
            ) : (
              <CardBestPlace bestPlaces={hotels} variant="desktop" />
            )}
          </section>

          {/* Right Section (20%) */}
          <aside className="flex w-1/5 flex-col gap-4 rounded-xl bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-lg font-semibold text-[#2d36d9]">
              Recommended
            </h3>
            <div className="flex flex-col">
              <RecommendedList
                recommendations={mockRecommendedHotels}
                variant="desktop"
              />
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="flex flex-1 flex-col overflow-hidden px-4 sm:hidden">
        <ExploreSearchBar variant="mobile" />

        {/* Recommended List */}
        <RecommendedList
          recommendations={mockRecommendedHotels}
          variant="mobile"
        />

        <div>
          <h2 className="mb-4 mt-6 text-lg font-bold">
            Best places to enjoy your stay
          </h2>
          <div className="mb-4 flex gap-4">
            <button className="rounded-sm border p-2 text-sm font-bold text-blue-500 hover:underline">
              Sort by
            </button>
            <button className="rounded-sm border p-2 text-sm font-bold text-blue-500 hover:underline">
              Filter
            </button>
          </div>
        </div>
        {/* Best Places Card */}
        {isLoading ? (
          <div className="py-8 text-center text-blue-500">Loading...</div>
        ) : hotels.length === 0 ? (
          <div className="py-8 text-center text-gray-500">No hotels found</div>
        ) : (
          <CardBestPlace bestPlaces={hotels} variant="mobile" />
        )}
      </div>
    </div>
  );
}
