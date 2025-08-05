import React from "react";
import Sidebar from "@/components/Sidebar";
import PriceSummary from "../review/components/PriceSummary";
import { IoIosArrowBack } from "react-icons/io";
import api from "@/lib/api";
import PaymentClient from "./components/PaymentClient";

function getNights(start: string, end: string): number {
  if (!start || !end) return 1;
  const d1 = new Date(start);
  const d2 = new Date(end);
  if (isNaN(d1.getTime()) || isNaN(d2.getTime()) || d2 <= d1) {
    return 1;
  }
  return Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
}

// Function ดึงข้อมูลราคาทำงานบน Server
async function getPriceData(params: {
  hotelId: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
}) {
  try {
    const nights = getNights(params.checkIn, params.checkOut);
    const priceResponse = await api.post("/calculate-cost", {
      hotelId: params.hotelId,
      roomType: params.roomType,
      days: nights,
    });

    return {
      nights: nights,
      price: priceResponse.data.subtotal,
      vat: priceResponse.data.taxesAndFees,
      total: priceResponse.data.totalAmount,
    };
  } catch (error) {
    console.error("Error fetching price data:", error);
    return null;
  }
}

const PaymentPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  // รับค่าจาก Params ที่ส่งเข้ามา
  const { hotelId, roomType, checkIn, checkOut } = searchParams;
  // นำค่าจาก Params ส่งไปยัง getPriceData เพื่อดึงข้อมูลราคา
  const priceInfo = await getPriceData({
    hotelId,
    roomType,
    checkIn,
    checkOut,
  });

  if (!priceInfo) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p>Could not load payment details.</p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <div className="hidden flex-1 flex-col px-0 sm:flex">
        <div className="flex w-full flex-row gap-8 px-16 py-16">
          {/* Left: Payment Methods */}
          <div className="flex-1">
            <div className="mb-8 text-2xl font-semibold text-gray-800">
              Payment Details
            </div>
            <PaymentClient />
          </div>
          {/* Right: Price Summary */}
          <div className="flex flex-1 flex-col items-end justify-start">
            <div className="w-[340px]">
              <PriceSummary
                variant="desktop"
                nights={priceInfo?.nights ?? null}
                price={priceInfo?.price ?? null}
                vat={priceInfo?.vat ?? null}
                total={priceInfo?.total ?? null}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex-1 px-0 py-0 sm:hidden">
        {/* Top bar */}
        <div className="flex h-14 items-center px-6 py-8">
          <button
            className="mr-2 flex h-8 w-8 items-center justify-center"
            aria-label="Back"
          >
            <IoIosArrowBack size={22} className="text-gray-700" />
          </button>
          <div className="flex-1 text-center text-lg font-semibold text-[#23223C]">
            Payment details
          </div>
        </div>
        {/* ...ส่วนอื่น ๆ ของ mobile view... */}
        <div className="px-6 pb-8 pt-4">
          <div className="my-8">
            <PriceSummary
              variant="mobile"
              nights={priceInfo?.nights ?? null}
              price={priceInfo?.price ?? null}
              vat={priceInfo?.vat ?? null}
              total={priceInfo?.total ?? null}
            />
          </div>
          <PaymentClient />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
