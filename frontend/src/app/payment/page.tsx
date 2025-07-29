"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import PaymentMethodList, {
  PaymentMethod,
} from "./components/PaymentMethodList";
import PriceSummary from "../review/components/PriceSummary";
import { FaCreditCard } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { SiPhonepe } from "react-icons/si";
import { MdOutlineAccountBalance } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { useBooking } from "@/context/BookingContext";

const paymentMethods: PaymentMethod[] = [
  {
    id: "debit",
    label: "Debit Card",
    icon: <FaCreditCard size={36} className="text-blue-700" />,
  },
  {
    id: "upi",
    label: "UPI",
    icon: <MdOutlineAccountBalanceWallet size={36} className="text-blue-700" />,
  },
  {
    id: "phonepe",
    label: "PhonePay",
    icon: <SiPhonepe size={36} className="text-purple-700" />,
  },
  {
    id: "netbanking",
    label: "Net Banking",
    icon: <MdOutlineAccountBalance size={36} className="text-yellow-600" />,
  },
  {
    id: "credit",
    label: "Credit Card",
    icon: <FaCreditCard size={36} className="text-gray-700" />,
  },
];

const PaymentPage = () => {
  const { bookingDetails } = useBooking();
  const { priceInfo } = bookingDetails;
  const [selected, setSelected] = useState("");
  const router = useRouter();

  const handleSelect = (id: string) => {
    setSelected(id);
    router.push("/payment/success");
  };

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
            <PaymentMethodList
              methods={paymentMethods}
              selectedId={selected}
              onSelect={handleSelect}
            />
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
          <PaymentMethodList
            methods={paymentMethods}
            selectedId={selected}
            onSelect={handleSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
