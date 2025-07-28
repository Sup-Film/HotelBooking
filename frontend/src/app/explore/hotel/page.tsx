"use client";
import React from "react";
import Image from "next/image";
import ExploreSearchBar from "./components/ExploreSearchBar";
import Sidebar from "@/components/Sidebar";
import BentoGrid from "./components/BentoGrid";
import SearchBar from "./components/SearchBar";
import CardRating from "./components/CardRating";
import RoomCard from "./components/RoomCard";

// Mock data for initial layout (replace with API call later)
const hotel = {
  id: 1,
  name: "Holiday Inn Resort",
  location: "Mobor, Cavelossim, Goa",
  images: [
    "/images/hotel.png",
    "/images/indian.png",
    "/images/indian_2.png",
    "/images/globe.svg",
  ],
  rating: 8.4,
  reviews: 6879,
  housekeeping: 4,
  food: 4,
  service: 4,
  staff: 4,
  services: ["car", "pool", "bar", "wifi", "gym"],
  price: 1000,
  rooms: [
    {
      name: "Deluxe Room",
      price: 1500,
      image: "/images/hotel.png",
    },
    {
      name: "Deluxe Room",
      price: 1500,
      image: "/images/hotel.png",
    },
  ],
};

const ExploreHotelPage = () => {
  return (
    <div className="flex h-full w-full bg-[#f7f8fd]">
      {/* Side bar */}
      <Sidebar />

      {/* Main content for desktop */}
      <div className="hidden flex-1 flex-col sm:flex">
        {/* Search Bar */}
        <ExploreSearchBar variant="desktop" />

        {/* Search Bar Layout */}
        <SearchBar variant="desktop" />

        {/* Main Content: Left-Right Section */}
        <div className="flex gap-16 px-8 py-6">
          {/* Left Section: Bento Grid and Info */}
          <div className="min-w-0 flex-1">
            {/* Bento Grid for Images */}
            <BentoGrid hotel={hotel} variant="desktop" />

            {/* Hotel Info Section */}
            <div className="mb-4 mt-4 flex items-center justify-between gap-2">
              <div className="flex flex-col justify-items-center">
                <h2 className="mb-1 text-2xl font-semibold text-gray-900">
                  {hotel.name}
                </h2>
                <p className="cursor-pointer text-base text-blue-400 hover:underline">
                  {hotel.location}
                </p>
              </div>
              {/* Price Starting */}
              <button className="rounded-lg border border-blue-600 px-4 py-2 font-medium text-blue-600">
                Price Starting from 1,000 BAHT
              </button>
            </div>

            {/* Room Cards */}
            <RoomCard hotel={hotel} />
          </div>

          {/* Right Section: Rating & Services */}
          <CardRating hotel={hotel} variant="desktop" />
        </div>
      </div>

      {/* Mobile content */}
      <div className="flex flex-1 flex-col justify-items-center overflow-hidden px-8 sm:hidden mb-20">
        <ExploreSearchBar variant="mobile" />

        {/* Search Bar Layout */}
        <SearchBar variant="mobile" />

        {/* BentoGrid */}
        <BentoGrid hotel={hotel} variant="mobile" />

        {/* Hotel Info Section */}
        <div className="mb-4 mt-4 flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-gray-900">{hotel.name}</h2>
          <p className="cursor-pointer text-base text-blue-400 hover:underline">
            {hotel.location}
          </p>
          {/* Price Starting */}
          <button className="w-3/4 rounded-lg border border-blue-600 px-4 py-2 font-medium text-blue-600">
            Price Starting from 1,000 BAHT
          </button>
        </div>

        {/* Card Rating */}
        <CardRating hotel={hotel} variant="mobile" />
      </div>
    </div>
  );
};

export default ExploreHotelPage;
