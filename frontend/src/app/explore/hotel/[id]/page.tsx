import React, { Suspense } from "react";
import ExploreSearchBar from "@/components/ExploreSearchBar";
import Sidebar from "@/components/Sidebar";
import BentoGrid from "../components/BentoGrid";
import { Hotel } from "@/types";
import api from "@/lib/api";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import HotelDetailsClient from "../components/HotelDetailsClient";

async function getHotelById(id: string): Promise<Hotel | null> {
  if (!id || isNaN(parseInt(id))) {
    // ป้องกันการเรียก API ด้วย ID ที่ไม่ถูกต้อง
    return null;
  }

  try {
    const res = await api.get(`/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching hotel data:", error);
    return null;
  }
}

const ExploreHotelPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const hotel = await getHotelById(id);

  if (!hotel) {
    return (
      <div className="flex h-full w-full bg-[#f7f8fd]">
        <Sidebar />
        <div className="flex flex-1 flex-col items-center justify-center">
          <ExploreSearchBar variant="desktop" configKey="hotelDetail" />
          <p className="text-2xl text-gray-600">Hotel not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full bg-[#f7f8fd]">
      {/* Side bar */}
      <Sidebar />

      {/* Main content for desktop */}
      <div className="hidden flex-1 flex-col sm:flex">
        <ExploreSearchBar variant="desktop" configKey="hotelDetail" />
        {/* 5. ส่วนที่แสดงข้อมูล Static (รูปภาพ) สามารถเรนเดอร์บน Server ได้เลย */}
        <div className="px-8 pt-6">
          <BentoGrid hotel={hotel} variant="desktop" />
        </div>
        {/* 6. เรียกใช้ Client Component และส่ง hotel data เป็น props */}
        {/* ใช้ Suspense เพื่อให้ Client Component โหลดทีหลังได้โดยไม่บล็อกหน้าเว็บ */}
        <Suspense fallback={<LoadingSkeleton width="w-full" height="h-64" />}>
          <HotelDetailsClient hotel={hotel} variant="desktop" />
        </Suspense>
      </div>

      {/* Mobile content */}
      <div className="mb-32 flex flex-1 flex-col justify-items-center overflow-hidden px-8 sm:hidden">
        <ExploreSearchBar variant="mobile" />

        <Suspense fallback={<LoadingSkeleton width="w-full" height="h-64" />}>
          <HotelDetailsClient hotel={hotel} variant="desktop" />
        </Suspense>
      </div>
    </div>
  );
};

export default ExploreHotelPage;
