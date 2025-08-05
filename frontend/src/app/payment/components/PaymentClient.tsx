"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCreditCard } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { SiPhonepe } from "react-icons/si";
import { MdOutlineAccountBalance } from "react-icons/md";
import PaymentMethodList, { PaymentMethod } from "./PaymentMethodList";

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

const PaymentClient = () => {
  const [selected, setSelected] = useState("");
  const router = useRouter();

  const handleSelect = (id: string) => {
    setSelected(id);
    router.push(`/payment/success`);
  };

  return (
    <PaymentMethodList
      methods={paymentMethods}
      selectedId={selected}
      onSelect={handleSelect}
    />
  );
};
export default PaymentClient;
