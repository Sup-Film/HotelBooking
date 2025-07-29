"use client";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import {
  EXPLORE_SEARCH_BAR_CONFIGS,
  ExploreSearchBarConfigKey,
} from "@/types/exploreSearchBarConfigs";

interface ExploreSearchBarProps {
  variant: "desktop" | "mobile";
  configKey?: ExploreSearchBarConfigKey;
  onBack?: () => void; // เพิ่ม callback สำหรับปุ่มย้อนกลับ
  onSearch?: (query: string) => void; // เพิ่ม callback สำหรับการค้นหา
}

const ExploreSearchBar = ({
  variant,
  configKey = "explore",
  onBack,
  onSearch,
}: ExploreSearchBarProps) => {
  // ดึงค่าการตั้งค่าจาก config ตาม key ที่กำหนด
  const config = EXPLORE_SEARCH_BAR_CONFIGS[configKey];
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  // Handler สำหรับปุ่มย้อนกลับ
  const handleBackClick = () => {
    if (onBack) {
      onBack();
    }
  };

  if (variant === "mobile") {
    return (
      <div className="flex w-full flex-col items-center pb-2 pt-4">
        <div className="mb-3 flex w-full items-center">
          {config.showBackButton && (
            <button
              className="flex cursor-pointer items-center"
              onClick={handleBackClick}
              aria-label="Go back" // เพิ่ม accessibility
            >
              <IoIosArrowBack size={22} className="text-gray-700" />
            </button>
          )}
          <div className="flex-1 text-center text-base font-semibold text-[#232345]">
            {config.title} {/* ใช้ title จาก configuration แทนการ hardcode */}
          </div>
          <div className="w-6" /> {/* spacer สำหรับการจัดวางที่สมมาตร */}
        </div>
        <form onSubmit={handleSearch} className="w-full">
          <input
            type="text"
            placeholder={config.placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full rounded-lg ${config.inputBgColor} px-4 py-3 text-sm text-gray-500 outline-none`}
          />
        </form>
      </div>
    );
  }

  // Desktop version - ใช้หลักการเดียวกัน
  return (
    <div
      className={
        config.className ?? "flex w-4/5 flex-row items-center gap-4 px-8 py-6"
      }
    >
      {config.showBackButton && (
        <button
          className="flex cursor-pointer items-center rounded-full bg-blue-100 p-2 shadow"
          onClick={handleBackClick}
          aria-label="Go back"
        >
          <IoIosArrowBack size={24} />
        </button>
      )}
      <form onSubmit={handleSearch} className="flex-1">
        <input
          type="text"
          placeholder={config.placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full rounded-lg ${config.inputBgColor} px-6 py-3 text-lg text-gray-700 outline-none transition-shadow focus:ring-2 focus:ring-blue-500`}
        />
      </form>
    </div>
  );
};

//   if (variant === "mobile") {
//     return (
//       <div className="flex w-full flex-col items-center pb-2 pt-4">
//         <div className="mb-3 flex w-full items-center">
//           <div className="flex cursor-pointer items-center">
//             <IoIosArrowBack size={22} className="text-gray-700" />
//           </div>
//           <div className="flex-1 text-center text-base font-semibold text-[#232345]">
//             Hotels
//           </div>
//           <div className="w-6" /> {/* spacer for symmetry */}
//         </div>
//         <input
//           type="text"
//           placeholder="Search city , Country, Place for Travel advis.."
//           className="w-full rounded-lg bg-[#f1f3ff] px-4 py-3 text-sm text-gray-500 outline-none"
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="flex w-4/5 flex-row items-center gap-4 px-8 py-6">
//       <div className="flex cursor-pointer items-center rounded-full bg-blue-100 p-2 shadow">
//         <IoIosArrowBack size={24} />
//       </div>
//       <input
//         type="text"
//         placeholder="Search city, Country, Place for Travel advisory"
//         className="w-full rounded-lg bg-[#e9ebf5] px-6 py-3 text-lg text-gray-700 outline-none transition-shadow focus:ring-2 focus:ring-blue-500"
//       />
//     </div>
//   );
// };
export default ExploreSearchBar;
