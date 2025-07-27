"use client";
import Image from "next/image";
import { FaPlane } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

interface HeroSectionProps {
  onTakeTour?: () => void; // callback เมื่อกดปุ่ม Take Tour
  variant?: "desktop" | "mobile";
}

export function HeroSection({
  onTakeTour,
  variant = "desktop",
}: HeroSectionProps) {
  // ฟังก์ชันสำหรับจัดการการกดปุ่ม Take Tour
  const handleTakeTour = () => {
    if (onTakeTour) {
      onTakeTour();
    } else {
      console.log("Take tour clicked");
    }
  };

  // Mobile version - แสดงในรูปแบบ card เล็กที่ด้านบน
  if (variant === "mobile") {
    return (
      <section className="relative flex h-[50dvh] flex-col justify-between rounded-b-3xl bg-blue-500 p-4">
        {/* Background Image สำหรับ mobile */}
        <Image
          src="/images/indian_2.png"
          alt="Incredible India"
          fill
          className="z-0 object-cover"
          style={{ borderRadius: "1.5rem 0 0 1.5rem" }}
        />

        {/* Gradient overlay เพื่อให้ข้อความอ่านง่าย */}
        <div
          className="absolute left-0 top-0 z-10 h-full w-full"
          style={{ borderRadius: "1.5rem 0 0 1.5rem" }}
        >
          <div className="h-full w-full bg-gradient-to-t from-[#1a237e]/90 via-[#2d36d9]/40 to-[#2d36d9]/0"></div>
        </div>

        {/* Navigation dots (decorative) */}
        <div className="z-20 flex flex-col gap-1">
          <span className="block h-3 w-3 rounded-full bg-white"></span>
          <span className="block h-3 w-3 rounded-full bg-white"></span>
          <span className="block h-3 w-3 rounded-full bg-white"></span>
        </div>

        {/* Content section */}
        <div className="z-30">
          <h2 className="mt-4 text-3xl font-bold text-white">
            Incredible India
          </h2>
          <p className="mt-2 w-3/6 text-sm text-white">
            "For where thy treasure is, here also will thy heart be."
          </p>
          <button
            className="mt-4 w-full rounded-lg bg-white px-6 py-2 font-bold text-[#2d36d9] shadow transition-colors hover:bg-gray-100"
            onClick={handleTakeTour}
          >
            Take Tour
          </button>
        </div>
      </section>
    );
  }

  // Desktop version - แสดงเป็น full section ทางด้านขวา
  return (
    <section className="sticky top-0 flex h-screen items-center justify-center overflow-hidden rounded-l-3xl bg-transparent">
      {/* Background Image สำหรับ desktop */}
      <Image
        src="/images/indian.png"
        alt="Incredible India - Taj Mahal"
        fill
        className="z-0 object-cover"
        style={{ borderRadius: "1.5rem 0 0 1.5rem" }}
        priority // โหลดรูปนี้ก่อนเพราะเป็น above-the-fold content
      />

      {/* Gradient overlay เพื่อให้ข้อความโดดเด่น */}
      <div
        className="absolute left-0 top-0 z-10 h-full w-full"
        style={{ borderRadius: "1.5rem 0 0 1.5rem" }}
      >
        <div className="h-full w-full bg-gradient-to-t from-[#1a237e]/90 via-[#2d36d9]/40 to-[#2d36d9]/0"></div>
      </div>

      {/* Decorative airplane icon - positioned อยู่บริเวณโดมของ Taj Mahal */}
      <div
        className="absolute left-0 top-0 z-20"
        style={{ transform: "translate(410px, 90px) rotate(-20deg)" }}
      >
        <FaPlane size={48} color="white" />
      </div>

      {/* Navigation arrow button - อยู่มุมขวาล่าง */}
      <button
        className="z-31 absolute flex items-center justify-center rounded-full border border-white bg-white/30 transition-colors hover:bg-white/40"
        style={{
          right: "40px",
          width: "48px",
          height: "48px",
        }}
        onClick={handleTakeTour}
        aria-label="Navigate to next section"
      >
        <IoIosArrowForward width={24} height={24} color="white" />
      </button>

      {/* Main content - ข้อความหลักที่อยู่ด้านล่าง */}
      <div className="absolute left-0 top-0 z-30 flex h-full w-full flex-col items-start justify-end px-16 pb-36">
        <h1 className="mb-4 text-4xl font-bold text-white drop-shadow-lg">
          Incredible India
        </h1>
        <p className="w-3/8 mb-8 text-xl italic text-white drop-shadow-lg">
          "For where thy treasure is, here also will thy heart be."
        </p>
        <button
          className="rounded-lg bg-white px-8 py-3 font-bold text-[#2d36d9] shadow transition-colors hover:bg-gray-100"
          onClick={handleTakeTour}
        >
          Take Tour
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
