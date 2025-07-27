"use client";
import { useState } from "react";
import { SearchCriteria, ServiceType } from "@/types";
import { FaHotel, FaPlane, FaCar } from "react-icons/fa";

interface SearchFormProps {
  onSearch?: (criteria: SearchCriteria) => void;
  variant?: "desktop" | "mobile";
}

export function SearchForm({ onSearch, variant = "desktop" }: SearchFormProps) {
  // State สำหรับเก็บข้อมูลการค้นหา
  const [searchData, setSearchData] = useState<SearchCriteria>({
    location: "Pattaya",
    checkIn: "2021-01-28",
    checkOut: "2021-01-29",
    adults: 2,
    children: 1,
    rooms: 1,
  });

  // State สำหรับ active service tab
  const [activeService, setActiveService] = useState<ServiceType>("hotel");

  // ฟังก์ชันสำหรับอัพเดต field ต่างๆ
  const updateField = (field: keyof SearchCriteria, value: string | number) => {
    setSearchData((prev) => ({ ...prev, [field]: value }));
  };

  // ฟังก์ชันสำหรับ submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchData);
    }
  };

  // Service tabs data
  const services = [
    { type: "hotel" as ServiceType, icon: FaHotel, label: "Hotel" },
    { type: "flight" as ServiceType, icon: FaPlane, label: "Flight" },
    { type: "car" as ServiceType, icon: FaCar, label: "Car" },
  ];

  // CSS classes ที่แตกต่างกันตาม variant
  const containerClass =
    variant === "mobile"
      ? "flex flex-col items-center justify-items-center"
      : "";

  const inputClass =
    variant === "mobile"
      ? "max-w-[350px] w-full mx-auto px-3 py-2 bg-white shadow text-gray-700 text-sm outline-none border-2 border-blue-300"
      : "w-full rounded-lg px-6 py-3 bg-white shadow text-gray-700 text-lg outline-none";

  return (
    <div className={containerClass}>
      {/* Title */}
      <h2
        className={`mb-8 font-bold text-[#2d36d9] ${
          variant === "mobile" ? "text-xl" : "text-3xl"
        }`}
      >
        What Are You Looking For?
      </h2>

      {/* Service Tabs */}
      <div className="mb-8 flex items-center justify-center gap-12">
        {services.map(({ type, icon: Icon, label }) => (
          <div
            key={type}
            className="flex cursor-pointer flex-col items-center"
            onClick={() => setActiveService(type)}
          >
            <div
              className={`mb-2 rounded-full p-4 shadow-lg transition-colors ${
                activeService === type
                  ? "bg-[#002aff]"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <Icon
                size={variant === "mobile" ? 24 : 32}
                color={activeService === type ? "white" : "#5c5c5c"}
              />
            </div>
            <span
              className={`font-semibold ${
                activeService === type ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="mb-8 flex w-full flex-col gap-4">
        {/* Location Input */}
        <input
          type="text"
          placeholder="Pattaya"
          value={searchData.location}
          onChange={(e) => updateField("location", e.target.value)}
          className={inputClass}
        />

        {/* Date Inputs */}
        <div
          className={`flex ${
            variant === "mobile" ? "mx-auto w-full max-w-[350px]" : ""
          }`}
        >
          <input
            type="text"
            placeholder="Thu,28 Jan-2021"
            value={searchData.checkIn}
            onChange={(e) => updateField("checkIn", e.target.value)}
            className={`flex-1 px-${variant === "mobile" ? "3" : "6"} py-${
              variant === "mobile" ? "2" : "3"
            } bg-blue-100 text-gray-700 shadow text-${
              variant === "mobile" ? "sm" : "lg"
            } outline-none ${
              variant === "mobile"
                ? "border-b-2 border-l-2 border-t-2 border-blue-300"
                : ""
            }`}
          />
          <input
            type="text"
            placeholder="Fri,29 Jan-2021"
            value={searchData.checkOut}
            onChange={(e) => updateField("checkOut", e.target.value)}
            className={`flex-1 px-${variant === "mobile" ? "3" : "6"} py-${
              variant === "mobile" ? "2" : "3"
            } bg-blue-100 text-gray-700 shadow text-${
              variant === "mobile" ? "sm" : "lg"
            } outline-none ${
              variant === "mobile" ? "border-2 border-blue-300" : ""
            }`}
          />
        </div>

        {/* Guests Input */}
        <input
          type="text"
          value={`${searchData.adults} adult, ${searchData.children} children - ${searchData.rooms} room`}
          readOnly
          className={`${
            variant === "mobile"
              ? "mx-auto w-full max-w-[350px] rounded border-2 border-blue-300 bg-blue-100 px-3 py-2 text-sm text-gray-700 shadow outline-none"
              : "w-full rounded-lg bg-blue-100 px-6 py-3 text-lg text-gray-700 shadow outline-none"
          }`}
        />

        {/* Search Button */}
        <button
          type="submit"
          className={`bg-[#2d36d9] font-bold text-white shadow transition-colors hover:bg-[#252db8] ${
            variant === "mobile"
              ? "w-full rounded-sm py-2"
              : "mx-auto w-1/2 rounded-lg py-5"
          }`}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
