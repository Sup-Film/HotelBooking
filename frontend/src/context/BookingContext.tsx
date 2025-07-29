"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Hotel } from "@/types";
import { GuestDetails } from "@/app/review/components/GuestForm";

// 1. กำหนด Type ของข้อมูลทั้งหมดที่เกี่ยวกับ Booking
interface PriceInfo {
  nights: number;
  price: number;
  vat: number;
  total: number;
}

interface BookingState {
  hotel: Hotel | null;
  guestDetails: GuestDetails | null;
  priceInfo: PriceInfo | null;
}

// กำหนด Type ของ Context ที่จะมี State และฟังก์ชันสำหรับอัปเดต
interface BookingContextType {
  bookingDetails: BookingState;
  setBookingDetails: (details: Partial<BookingState>) => void;
}

// สร้าง Context
const BookingContext = createContext<BookingContextType | undefined>(undefined);

// สร้าง Provider Component
export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingDetails, setBookingDetailsState] = useState<BookingState>({
    hotel: null,
    guestDetails: null,
    priceInfo: null,
  });

  const setBookingDetails = (details: Partial<BookingState>) => {
    setBookingDetailsState((prev) => ({ ...prev, ...details }));
  };

  return (
    <BookingContext.Provider value={{ bookingDetails, setBookingDetails }}>
      {children}
    </BookingContext.Provider>
  );
}

// สร้าง Custom Hook เพื่อให้เรียกใช้ง่าย
export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
