"use client";
import { useState } from "react";

export interface BookingData {
  location?: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
}

interface BookingFormProps {
  variant?: "default" | "compact" | "review";
  showLocationInput?: boolean;
  initialData: BookingData;
  onSubmit: (data: BookingData) => void;
  submitLabel?: string;
}

const guestOptions = [
  { adults: 1, children: 0, rooms: 1 },
  { adults: 2, children: 0, rooms: 1 },
  { adults: 2, children: 1, rooms: 1 },
  { adults: 2, children: 2, rooms: 2 },
];

export default function BookingForm({
  variant = "default",
  showLocationInput = true,
  initialData,
  onSubmit,
  submitLabel,
}: BookingFormProps) {
  const [form, setForm] = useState<BookingData>(initialData);

  const handleChange = (field: keyof BookingData, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleGuestChange = (value: string) => {
    const [adults, children, rooms] = value.split("-").map(Number);
    setForm((prev) => ({ ...prev, adults, children, rooms }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  const inputClass =
    variant === "compact"
      ? "w-full px-3 py-2 text-sm border rounded"
      : "w-full px-4 py-3 text-base border rounded";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {showLocationInput && (
        <input
          type="text"
          placeholder="Where are you going?"
          value={form.location || ""}
          onChange={(e) => handleChange("location", e.target.value)}
          className={inputClass}
        />
      )}
      <div className="flex gap-2">
        <input
          type="date"
          value={form.checkIn}
          onChange={(e) => handleChange("checkIn", e.target.value)}
          className={inputClass}
        />
        <input
          type="date"
          value={form.checkOut}
          onChange={(e) => handleChange("checkOut", e.target.value)}
          className={inputClass}
        />
      </div>
      <select
        value={`${form.adults}-${form.children}-${form.rooms}`}
        onChange={(e) => handleGuestChange(e.target.value)}
        className={inputClass}
      >
        {guestOptions.map((opt, idx) => (
          <option
            key={idx}
            value={`${opt.adults}-${opt.children}-${opt.rooms}`}
          >
            {`${opt.adults} Adult, ${opt.children} Child, ${opt.rooms} Room`}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold rounded py-2 hover:bg-blue-700"
      >
        {submitLabel || (variant === "review" ? "Update Search" : "Search")}
      </button>
    </form>
  );
}
