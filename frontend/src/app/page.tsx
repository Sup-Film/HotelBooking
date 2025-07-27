"use client";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { CiWifiOn } from "react-icons/ci";
import {
  FaHotel,
  FaPlane,
  FaCar,
  FaHome,
  FaArrowRight,
  FaShower,
} from "react-icons/fa";
import { GiWineBottle } from "react-icons/gi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <div className="w-[100%] h-[100%] flex bg-[#f7f8fd]">
      <Sidebar />

      {/* Main Content for desktop/tablet */}
      <main className="hidden flex-1 sm:grid grid-cols-2">
        {/* Left Section: Search & Recent Searches */}
        <section className="h-screen overflow-auto px-12 py-8 flex flex-col justify-between">
          <div>
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search city , Country, Place for Travel advisory"
              className="w-full rounded-lg px-6 py-3 mb-8 bg-[#e9ebf5] text-gray-700 text-lg outline-none"
            />
            {/* Title */}
            <h2 className="text-3xl font-bold text-[#2d36d9] mb-8">
              What Are You Looking For?
            </h2>
            {/* Tabs */}
            <div className="flex justify-center items-center gap-12 mb-8">
              <div className="flex flex-col items-center">
                <div className="bg-[#002aff] rounded-full p-4 shadow-lg mb-2">
                  <FaHotel size={32} color="white" />
                </div>
                <span className="font-semibold">Hotel</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 mb-2">
                  <FaPlane size={32} color="#5c5c5c" />
                </div>
                <span className="text-gray-500">Flight</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 mb-2">
                  <FaCar size={32} color="#5c5c5c" />
                </div>
                <span className="text-gray-500">Car</span>
              </div>
            </div>
            {/* Search Form */}
            <div className="flex flex-col gap-4 mb-8">
              <input
                type="text"
                placeholder="Pattaya"
                className="w-full rounded-lg px-6 py-3 bg-white shadow text-gray-700 text-lg outline-none"
              />
              <div className="flex">
                <input
                  type="text"
                  placeholder="Thu,28 Jan-2021"
                  className="flex-1 px-6 py-3 bg-blue-100 shadow text-gray-700 text-lg outline-none"
                />
                <input
                  type="text"
                  placeholder="Fri,29 Jan-2021"
                  className="flex-1 px-6 py-3 bg-blue-100 shadow text-gray-700 text-lg outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="2 adult ,1 children - 1 room"
                className="w-full rounded-lg px-6 py-3 bg-blue-100 shadow text-gray-700 text-lg outline-none"
              />
            </div>
            <div className="flex flex-col items-center">
              <button className="w-1/2 bg-[#2d36d9] text-white py-5 rounded-lg font-bold shadow mb-8 cursor-pointer">
                Search
              </button>
            </div>
          </div>
          {/* Recent Searches */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Searches</h3>
            <div className="flex flex-col gap-4">
              {/* Card 1 */}
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/hotel.png"
                  alt="Hotel JW Marriott"
                  width={150}
                  height={80}
                  className="object-cover"
                />
                <div className="flex-1 p-4">
                  <div className="flex flex-col mb-1">
                    <span className="font-bold">Hotel JW Marriott</span>
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                      <svg
                        className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <div className="flex gap-2 items-center mt-1">
                      <span className="text-white text-xs rounded-2xl py-1 px-2 bg-red-400">
                        ★4.9
                      </span>
                      <span className="text-gray-400">1368 Reviews</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-2">
                    <span className="py-1 text-xs">Amenities</span>
                    <div className="flex gap-2">
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <FaShower size={16} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <FaCar size={16} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <GiWineBottle size={16} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <CiWifiOn size={16} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <HiOutlineDotsHorizontal size={16} color="blue" />
                      </span>
                    </div>
                  </div>
                  <span className="text-[#2d36d9] font-bold">1,000/night</span>
                </div>
                <button className="bg-[#2d36d9] text-white px-4 py-2 font-semibold cursor-pointer">
                  Book Now
                </button>
              </div>

              {/* Card 2 */}
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/hotel.png"
                  alt="Hotel JW Marriott"
                  width={150}
                  height={80}
                  className="object-cover"
                />
                <div className="flex-1 p-4">
                  <div className="flex flex-col mb-1">
                    <span className="font-bold">Hotel JW Marriott</span>
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                      <svg
                        className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <div className="flex gap-2 items-center mt-1">
                      <span className="text-white text-xs rounded-2xl py-1 px-2 bg-red-400">
                        ★4.9
                      </span>
                      <span className="text-gray-400">1368 Reviews</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-2">
                    <span className="py-1 text-xs">Amenities</span>
                    <div className="flex gap-2">
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <FaShower size={16} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <FaCar size={16} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <GiWineBottle size={16} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <CiWifiOn size={16} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <HiOutlineDotsHorizontal size={16} color="blue" />
                      </span>
                    </div>
                  </div>
                  <span className="text-[#2d36d9] font-bold">1,000/night</span>
                </div>
                <button className="bg-[#2d36d9] text-white px-4 py-2 font-semibold cursor-pointer">
                  Book Now
                </button>
              </div>

              {/* Card 3 */}
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/hotel.png"
                  alt="Hotel JW Marriott"
                  width={150}
                  height={80}
                  className="object-cover"
                />
                <div className="flex-1 p-4">
                  <div className="flex flex-col mb-1">
                    <span className="font-bold">Hotel JW Marriott</span>
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                      <svg
                        className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <div className="flex gap-2 items-center mt-1">
                      <span className="text-white text-xs rounded-2xl py-1 px-2 bg-red-400">
                        ★4.9
                      </span>
                      <span className="text-gray-400">1368 Reviews</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-2">
                    <span className="py-1 text-xs">Amenities</span>
                    <div className="flex gap-2">
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <FaShower size={16} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <FaCar size={16} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <GiWineBottle size={16} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <CiWifiOn size={16} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <HiOutlineDotsHorizontal size={16} color="blue" />
                      </span>
                    </div>
                  </div>
                  <span className="text-[#2d36d9] font-bold">1,000/night</span>
                </div>
                <button className="bg-[#2d36d9] text-white px-4 py-2 font-semibold cursor-pointer">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section: Promo Image & Text */}
        <section className="sticky top-0 h-screen flex items-center justify-center rounded-l-3xl overflow-hidden bg-transparent">
          {/* BG Image */}
          <Image
            src="/images/indian.png"
            alt="Incredible India"
            fill
            className="object-cover z-0"
            style={{ borderRadius: "1.5rem 0 0 1.5rem" }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute left-0 top-0 w-full h-full z-10"
            style={{ borderRadius: "1.5rem 0 0 1.5rem" }}>
            <div className="w-full h-full bg-gradient-to-t from-[#1a237e]/90 via-[#2d36d9]/40 to-[#2d36d9]/0"></div>
          </div>
          {/* Airplane icon at dome (red circle) */}
          <div
            className="absolute left-0 top-0 z-20"
            style={{ transform: "translate(410px, 90px) rotate(-20deg)" }}>
            <FaPlane size={48} color="white" />
          </div>
          {/* Circle button at bottom right (red circle in image) */}
          <button
            className="absolute z-31 flex items-center justify-center bg-white/30 border border-white rounded-full cursor-pointer"
            style={{
              right: "40px",
              width: "48px",
              height: "48px",
            }}>
            <IoIosArrowForward width={24} height={24} color="white" />
          </button>
          {/* Content */}
          <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-end items-start px-16 z-30 pb-36">
            <h1 className="text-white text-4xl font-bold mb-4 drop-shadow-lg">
              Incredible India
            </h1>
            <p className="text-white text-xl mb-8 drop-shadow-lg w-3/8">
              “For where thy treasure is, here also will thy heart be.”
            </p>
            <button className="bg-white text-[#2d36d9] px-8 py-3 rounded-lg font-bold shadow cursor-pointer">
              Take Tour
            </button>
          </div>
        </section>
      </main>

      {/* Mobile Content */}
      <div className="h-full w-full sm:hidden mb-20">
        <section className="relative flex flex-col justify-between bg-blue-500 h-[50dvh] rounded-b-3xl p-4">
          {/* BG Image */}
          <Image
            src="/images/indian_2.png"
            alt="Incredible India"
            fill
            className="object-cover z-0"
            style={{ borderRadius: "1.5rem 0 0 1.5rem" }}
          />
          <div
            className="absolute left-0 top-0 w-full h-full z-10"
            style={{ borderRadius: "1.5rem 0 0 1.5rem" }}>
            <div className="w-full h-full bg-gradient-to-t from-[#1a237e]/90 via-[#2d36d9]/40 to-[#2d36d9]/0"></div>
          </div>
          <div className="flex flex-col gap-1 z-20">
            <span className="w-3 h-3 bg-white rounded-full block"></span>
            <span className="w-3 h-3 bg-white rounded-full block"></span>
            <span className="w-3 h-3 bg-white rounded-full block"></span>
          </div>
          <div className="z-30">
            <h2 className="text-white text-3xl font-bold mt-4">
              Incredible India
            </h2>
            <p className="text-white text-sm mt-2 w-3/6">
              “For where thy treasure is, here also will thy heart be.”
            </p>
            <button className="w-full bg-white text-[#2d36d9] px-6 py-2 rounded-lg font-bold mt-4 shadow">
              Take Tour
            </button>
          </div>
        </section>

        {/* Section Content */}
        <section className="flex flex-col p-5 overflow-hidden">
          <div className="flex flex-col items-center justify-items-center">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search city , Country, Place for Travel advisory"
              className="w-full rounded-lg px-6 py-2 mb-2 bg-[#e9ebf5] text-gray-700 text-sm outline-none"
            />
            {/* Title */}
            <h2 className="text-xl font-bold text-[#2d36d9] mb-8">
              What Are You Looking For?
            </h2>
            {/* Tabs */}
            <div className="flex justify-center items-center gap-12 mb-8">
              <div className="flex flex-col items-center">
                <div className="bg-[#002aff] rounded-full p-4 shadow-lg mb-2">
                  <FaHotel size={24} color="white" />
                </div>
                <span className="font-semibold">Hotel</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 mb-2">
                  <FaPlane size={24} color="#5c5c5c" />
                </div>
                <span className="text-gray-500">Flight</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 mb-2">
                  <FaCar size={24} color="#5c5c5c" />
                </div>
                <span className="text-gray-500">Car</span>
              </div>
            </div>
            {/* Search Form */}
            <div className="flex flex-col justify-items-center items-center gap-4 mb-8">
              <input
                type="text"
                placeholder="Pattaya"
                className="max-w-[350px] w-full mx-auto px-3 py-2 bg-white shadow text-gray-700 text-sm outline-none border-2 border-blue-300"
              />
              <div className="flex max-w-[350px] w-full mx-auto">
                <input
                  type="text"
                  placeholder="Thu,28 Jan-2021"
                  className="flex-1 px-3 py-2 bg-blue-100 shadow text-gray-700 text-sm outline-none w-full border-t-2 border-l-2 border-b-2 border-blue-300"
                />
                <input
                  type="text"
                  placeholder="Fri,29 Jan-2021"
                  className="flex-1 px-3 py-2 bg-blue-100 shadow text-gray-700 text-sm outline-none w-full border-2 border-blue-300"
                />
              </div>
              <input
                type="text"
                placeholder="2 adult ,1 children - 1 room"
                className="max-w-[350px] w-full mx-auto rounded px-3 py-2 bg-blue-100 shadow text-gray-700 text-sm outline-none border-2 border-blue-300"
              />
            </div>
            <button className="w-full bg-[#2d36d9] text-white py-2 rounded-sm font-bold shadow mb-8 cursor-pointer">
              Search
            </button>
          </div>

          {/* Recent Searches */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Recent Searches</h3>
            <div className="flex flex-row gap-x-5 items-center overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100">
              {/* Card 1 */}
              <div className="flex flex-col min-w-[260px] max-w-[320px] overflow-hidden p-3">
                <Image
                  src="/images/hotel.png"
                  alt="Hotel JW Marriott"
                  width={280}
                  height={120}
                  className="object-cover"
                />
                <div className="bg-white shadow-lg p-3">
                  <span className="font-bold text-base mb-1">
                    Hotel JW Marriott
                  </span>
                  <div className="flex mb-1">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                    <svg
                      className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <div className="flex gap-2 items-center mb-2">
                    <span className="text-white text-xs rounded-2xl py-1 px-2 bg-red-400">
                      ★4.9
                    </span>
                    <span className="text-gray-400 text-xs">1368 Reviews</span>
                  </div>
                  <div className="flex flex-col items-start gap-2 mb-2 w-full">
                    <span className="py-1 text-xs">Amenities</span>
                    <div className="flex gap-2 justify-center">
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <FaShower size={24} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <FaCar size={24} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <GiWineBottle size={24} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <CiWifiOn size={24} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <HiOutlineDotsHorizontal size={24} color="blue" />
                      </span>
                    </div>
                  </div>
                  <span className="text-[#2d36d9] font-bold mb-2">
                    1,000/night
                  </span>
                </div>
                <button className="bg-[#2d36d9] text-white px-4 py-2 font-semibold w-full">
                  Book Now
                </button>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col min-w-[260px] max-w-[320px] overflow-hidden p-3">
                <Image
                  src="/images/hotel.png"
                  alt="Hotel JW Marriott"
                  width={280}
                  height={120}
                  className="object-cover"
                />
                <div className="bg-white shadow-lg p-3">
                  <span className="font-bold text-base mb-1">
                    Hotel JW Marriott
                  </span>
                  <div className="flex mb-1">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                    <svg
                      className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <div className="flex gap-2 items-center mb-2">
                    <span className="text-white text-xs rounded-2xl py-1 px-2 bg-red-400">
                      ★4.9
                    </span>
                    <span className="text-gray-400 text-xs">1368 Reviews</span>
                  </div>
                  <div className="flex flex-col items-start gap-2 mb-2 w-full">
                    <span className="py-1 text-xs">Amenities</span>
                    <div className="flex gap-2 justify-center">
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <FaShower size={24} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <FaCar size={24} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <GiWineBottle size={24} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <CiWifiOn size={24} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <HiOutlineDotsHorizontal size={24} color="blue" />
                      </span>
                    </div>
                  </div>
                  <span className="text-[#2d36d9] font-bold mb-2">
                    1,000/night
                  </span>
                </div>
                <button className="bg-[#2d36d9] text-white px-4 py-2 font-semibold w-full">
                  Book Now
                </button>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col min-w-[260px] max-w-[320px] overflow-hidden p-3">
                <Image
                  src="/images/hotel.png"
                  alt="Hotel JW Marriott"
                  width={280}
                  height={120}
                  className="object-cover"
                />
                <div className="bg-white shadow-lg p-3">
                  <span className="font-bold text-base mb-1">
                    Hotel JW Marriott
                  </span>
                  <div className="flex mb-1">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                    <svg
                      className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <div className="flex gap-2 items-center mb-2">
                    <span className="text-white text-xs rounded-2xl py-1 px-2 bg-red-400">
                      ★4.9
                    </span>
                    <span className="text-gray-400 text-xs">1368 Reviews</span>
                  </div>
                  <div className="flex flex-col items-start gap-2 mb-2 w-full">
                    <span className="py-1 text-xs">Amenities</span>
                    <div className="flex gap-2 justify-center">
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <FaShower size={24} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <FaCar size={24} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <GiWineBottle size={24} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <CiWifiOn size={24} color="blue" />
                      </span>
                      <span className="rounded-md p-1 bg-white shadow text-xs">
                        <HiOutlineDotsHorizontal size={24} color="blue" />
                      </span>
                    </div>
                  </div>
                  <span className="text-[#2d36d9] font-bold mb-2">
                    1,000/night
                  </span>
                </div>
                <button className="bg-[#2d36d9] text-white px-4 py-2 font-semibold w-full">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
