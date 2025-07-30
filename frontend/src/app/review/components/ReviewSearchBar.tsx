"use client";

const SearchBar = ({
  variant,
  guests,
  bookingData,
  onBookingChange,
}: {
  variant: "desktop" | "mobile";
  guests?: string;
  bookingData?: {
    checkIn: string;
    checkOut: string;
  };
  onBookingChange: (field: string, value: string) => void;
}) => {
  // console.log(guests)
  const formatDate = (dateStr: string | undefined) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "";
    return d.toISOString().slice(0, 10);
  };

  const handleBookingChange = (field: string, value: string) => {
    onBookingChange(field, value);
  };

  if (variant === "mobile") {
    return (
      <div className="flex w-full flex-col items-center gap-2 pb-6 pt-4">
        <input
          type="text"
          placeholder="Where are you going?"
          className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
        />
        <div className="flex w-full">
          <input
            type="date"
            value={formatDate(bookingData?.checkIn)}
            onChange={(e) => handleBookingChange("checkIn", e.target.value)}
            className="flex-1 border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
          />
          <input
            type="date"
            value={formatDate(bookingData?.checkOut)}
            onChange={(e) => handleBookingChange("checkOut", e.target.value)}
            className="flex-1 border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
          />
        </div>
        <button
          type="button"
          className="w-full border border-gray-200 bg-white px-4 py-3 text-left text-sm text-gray-700 outline-none"
        >
          {guests} - 1 room
        </button>
        <button
          type="submit"
          className="w-full bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 py-6">
      <input
        type="text"
        placeholder="Where are you going?"
        className="w-[200px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
      />
      <div>
        <input
          type="date"
          value={formatDate(bookingData?.checkIn)}
          onChange={(e) => handleBookingChange("checkIn", e.target.value)}
          className="w-[150px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
        />
        <input
          type="date"
          value={formatDate(bookingData?.checkOut)}
          onChange={(e) => handleBookingChange("checkOut", e.target.value)}
          className="w-[150px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
        />
      </div>
      <button
        type="button"
        className="w-[260px] border border-gray-200 bg-white px-4 py-3 text-left text-sm text-gray-700 outline-none"
      >
        {guests} - 1 room
      </button>
      <button
        type="submit"
        className="ml-2 h-[48px] w-[200px] rounded-md bg-blue-600 text-base font-semibold text-white shadow transition-colors hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
