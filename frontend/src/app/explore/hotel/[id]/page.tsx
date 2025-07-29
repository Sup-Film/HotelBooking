"use client";
import React, { useEffect, useState } from "react";
import ExploreSearchBar from "@/components/ExploreSearchBar";
import Sidebar from "@/components/Sidebar";
import BentoGrid from "../components/BentoGrid";
import HotelSearchBar from "../components/HotelSearchBar";
import CardRating from "../components/CardRating";
import RoomCard from "../components/RoomCard";
import { Hotel } from "@/types";
import { useParams, useRouter } from "next/navigation";
import api from "@/lib/api";

interface BookingData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
}

const ExploreHotelPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [hotels, setHotels] = useState<Hotel>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHotel = async () => {
      if (!id) {
        console.error("Hotel ID is not provided");
        setIsLoading(false);
        return;
      }

      try {
        const response = await api.get(`/${id}`);
        setHotels(response.data);
        console.log("Fetched hotel data:", response.data);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHotel();
  }, [id]);

  return (
    <div className="flex h-full w-full bg-[#f7f8fd]">
      {/* Side bar */}
      <Sidebar />

      {/* Main content for desktop */}
      <div className="hidden flex-1 flex-col sm:flex">
        {/* Search Bar */}
        <ExploreSearchBar
          variant="desktop"
          configKey="hotelDetail"
          onBack={() => router.back()}
        />

        {/* Search Bar Layout */}
        <HotelSearchBar variant="desktop" />

        {/* Main Content: Left-Right Section */}
        {isLoading ? (
          // Skeleton Loader
          <div className="flex flex-1 items-center justify-center">
            <p className="text-gray-500">Loading...</p>
          </div>
        ) : hotels ? (
          <div className="flex gap-16 px-8 py-6">
            {/* Left Section: Bento Grid and Info */}
            <div className="min-w-0 flex-1">
              <BentoGrid hotel={hotels} variant="desktop" />

              {/* Hotel Info Section */}
              <div className="mb-4 mt-4 flex items-center justify-between gap-2">
                <div className="flex flex-col justify-items-center">
                  <h2 className="mb-1 text-2xl font-semibold text-gray-900">
                    {hotels.name}
                  </h2>
                  <p className="cursor-pointer text-base text-blue-400 hover:underline">
                    {hotels.location}
                  </p>
                </div>
                {/* Price Starting */}
                <button className="rounded-lg border border-blue-600 px-4 py-2 font-medium text-blue-600">
                  Price Starting from 1,000 BAHT
                </button>
              </div>

              {/* Room Cards */}
              <RoomCard hotel={hotels} variant="desktop" />
            </div>

            {/* Right Section: Rating & Services */}
            <CardRating hotel={hotels} variant="desktop" />
          </div>
        ) : (
          // Hotel not found
          <div className="flex flex-1 items-center justify-center">
            <p className="text-gray-500">Hotel not found</p>
          </div>
        )}
      </div>

      {/* Mobile content */}
      <div className="mb-20 flex flex-1 flex-col justify-items-center overflow-hidden px-8 sm:hidden">
        <ExploreSearchBar variant="mobile" />

        {/* Search Bar Layout */}
        <HotelSearchBar variant="mobile" />

        {/* Main Content with Loading State */}
        {isLoading ? (
          // Skeleton Loader for Mobile
          <div className="flex flex-1 items-center justify-center">
            <p className="text-gray-500">Loading...</p>
          </div>
        ) : hotels ? (
          <>
            {/* BentoGrid */}
            <BentoGrid hotel={hotels} variant="desktop" />

            {/* Hotel Info Section */}
            <div className="mb-4 mt-4 flex flex-col gap-1">
              <h2 className="text-lg font-semibold text-gray-900">{hotels.name}</h2>
              <p className="cursor-pointer text-base text-blue-400 hover:underline">
                {hotels.location}
              </p>
              {/* Price Starting */}
              <button className="w-3/4 rounded-lg border border-blue-600 px-4 py-2 font-medium text-blue-600">
                Price Starting from 1,000 BAHT
              </button>
            </div>

            {/* Room Cards */}
            <RoomCard hotel={hotels} variant="mobile" />

            {/* Card Rating */}
            <CardRating hotel={hotels} variant="mobile" />
          </>
        ) : (
          // Hotel not found
          <div className="flex flex-1 items-center justify-center">
            <p className="text-gray-500">Hotel not found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreHotelPage;
