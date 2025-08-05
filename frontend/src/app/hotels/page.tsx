import Sidebar from "@/components/Sidebar";
import { mockRecommendedHotels } from "@/data/hotels";
import RecommendedList from "./components/RecommendedList";
import ExploreSearchBar from "../../components/ExploreSearchBar";
import CardBestPlace from "./components/CardBestPlace";
import api from "@/lib/api";
import { Hotel } from "@/types/index";
import { Suspense } from "react";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";

async function fetchHotelsByLocation(location: string): Promise<Hotel[]> {
  try {
    const res = await api.get(`/search?location=${location}`);
    return res.data; // คืนค่าเป็น Array ของ Hotel
  } catch (error) {
    console.log("Error fetching hotels:", error);
    return []; // คืนค่าเป็น Array ว่างเมื่อเกิด Error
  }
}

const HotelResults = async ({
  location,
  variant,
}: {
  location: string;
  variant: "desktop" | "mobile";
}) => {
  const hotels = await fetchHotelsByLocation(location);

  if (hotels.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500">
        No hotels found for {location}
      </div>
    );
  }

  return <CardBestPlace bestPlaces={hotels} variant={variant} />;
};

// ปรับ Page components เป็น async function
export default async function ExplorePage({
  searchParams,
}: {
  searchParams: { location?: string };
}) {
  // ดึงค่า location จาก searchParams
  const location =
    typeof searchParams.location === "string" ? searchParams.location : "";
  const hotels = await fetchHotelsByLocation(location);

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
            <Suspense
              fallback={
                <LoadingSkeleton
                  width="w-full"
                  height="h-96"
                  rounded="rounded-xl"
                  lines={1}
                />
              }
            >
              <HotelResults location={location} variant="desktop" />
            </Suspense>
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
        <Suspense
          fallback={
            <LoadingSkeleton
              width="w-full"
              height="h-96"
              rounded="rounded-xl"
              lines={1}
            />
          }
        >
          <HotelResults location={location} variant="mobile" />
        </Suspense>
      </div>
    </div>
  );
}
