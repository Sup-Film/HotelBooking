"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const BookingSuccessPage = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <div className="mb-8 flex flex-col items-center">
        {/* Illustration (replace src with your own SVG if needed) */}
        <Image
          src="/images/booking-success.png"
          alt="Booking Success"
          className="mb-6 h-64 w-auto"
          width={320}
          height={256}
        />
        <hr className="mb-8 w-32 border-t border-gray-300" />
        <h1 className="mb-2 text-center text-2xl font-bold text-blue-700">
          Booking Successfully completed
        </h1>
        <p className="mb-8 text-center text-gray-600">
          Your trip schedule is ready, please check under profile.
        </p>
        <button
          className="rounded bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow transition hover:bg-blue-700 cursor-pointer"
          onClick={() => router.push("/")}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default BookingSuccessPage;
