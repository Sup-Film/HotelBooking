import api from "@/lib/api";
import { Hotel } from "@/types";
import { Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import Sidebar from "@/components/Sidebar";
import ExploreClientSection from "@/components/explore/ExploreClientSection"; // 1. Import Client Component ที่เราสร้างขึ้น
import { LoadingSkeleton } from "@/components/LoadingSkeleton";

async function getInitialHotels(): Promise<Hotel[]> {
  try {
    const response = await api.get("/search");
    return response.data;
  } catch (error) {
    console.error("Error fetching initial hotels:", error);
    return [];
  }
}

export default async function ExplorePage() {
  const initialHotels = await getInitialHotels();

  return (
    <div className="flex h-full w-full bg-[#f7f8fd]">
      <Sidebar />

      {/* Main Content for desktop/tablet */}
      <main className="hidden flex-1 grid-cols-2 sm:grid">
        {/* 5. เรียกใช้ Client Component และส่งข้อมูลที่ fetch มาแล้วเป็น prop */}
        <Suspense
          fallback={<LoadingSkeleton width="w-full" height="h-screen" />}
        >
          <ExploreClientSection
            initialHotels={initialHotels}
            variant="desktop"
          />
        </Suspense>

        {/* Right Section: Hero Image & Text */}
        <HeroSection variant="desktop" />
      </main>

      {/* Mobile Content */}
      <div className="mb-20 h-full w-full sm:hidden">
        {/* Hero Section สำหรับ Mobile */}
        <HeroSection variant="mobile" />

        {/* Section Content สำหรับ Mobile */}
        <section className="flex flex-col overflow-hidden p-5">
          {/* 5. เรียกใช้ Client Component และส่งข้อมูลที่ fetch มาแล้วเป็น prop */}
          <Suspense
            fallback={<LoadingSkeleton width="w-full" height="h-screen" />}
          >
            <ExploreClientSection
              initialHotels={initialHotels}
              variant="mobile"
            />
          </Suspense>
        </section>
      </div>
    </div>
  );
}
