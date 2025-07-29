interface HotelSearchBarProps {
  variant: "desktop" | "mobile";
  bookingData: {
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    rooms: number;
  };
  onBookingChange: (field: string, value: string | number) => void;
}

const options = [
  { adults: 1, children: 0, rooms: 1 },
  { adults: 2, children: 0, rooms: 1 },
  { adults: 2, children: 1, rooms: 1 },
  { adults: 2, children: 2, rooms: 2 },
  // เพิ่มตัวเลือกตามต้องการ
];

const SearchBar = ({
  variant,
  bookingData = { checkIn: "", checkOut: "", adults: 1, children: 0, rooms: 1 },
  onBookingChange,
}: HotelSearchBarProps) => {
  if (variant === "mobile") {
    return (
      <div className="flex w-full flex-col items-center gap-4 py-6">
        <input
          type="text"
          placeholder="Where are you going?"
          className="w-full border border-gray-200 bg-[#f1f3ff] px-4 py-3 text-sm text-gray-700 outline-none"
        />
        <div className="flex w-full gap-2">
          <input
            type="date"
            placeholder="20 Dec,2020"
            value={bookingData.checkIn}
            onChange={(e) => onBookingChange("checkIn", e.target.value)}
            className="flex-1 border border-gray-200 bg-[#f1f3ff] px-4 py-3 text-sm text-gray-700 outline-none"
          />
          <input
            type="date"
            placeholder="21 Dec,2020"
            value={bookingData.checkOut}
            onChange={(e) => onBookingChange("checkOut", e.target.value)}
            className="flex-1 border border-gray-200 bg-[#f1f3ff] px-4 py-3 text-sm text-gray-700 outline-none"
          />
        </div>
        <select
          className="w-full border border-gray-200 bg-[#f1f3ff] px-4 py-3 text-sm text-gray-700 outline-none"
          value={`${bookingData.adults}-${bookingData.children}-${bookingData.rooms}`}
          onChange={(e) => {
            const [adults, children, rooms] = e.target.value
              .split("-")
              .map(Number);
            onBookingChange("adults", adults);
            onBookingChange("children", children);
            onBookingChange("rooms", rooms);
          }}
        >
          {options.map((opt, idx) => (
            <option
              key={idx}
              value={`${opt.adults}-${opt.children}-${opt.rooms}`}
            >
              {`${opt.adults} ผู้ใหญ่, ${opt.children} เด็ก, ${opt.rooms} ห้อง`}
            </option>
          ))}
        </select>
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
    <div className="flex w-full items-center gap-4 px-8 py-6">
      <input
        type="text"
        placeholder="Where are you going?"
        className="min-w-[220px] flex-1 border border-gray-200 bg-[#f1f3ff] px-4 py-3 text-sm text-gray-700 outline-none"
      />
      <div>
        <input
          type="date"
          placeholder="20 Dec,2020"
          value={bookingData.checkIn}
          onChange={(e) => onBookingChange("checkIn", e.target.value)}
          className="w-[180px] border border-gray-200 bg-[#f1f3ff] px-4 py-3 text-sm text-gray-700 outline-none"
        />
        <input
          type="date"
          placeholder="21 Dec,2020"
          value={bookingData.checkOut}
          onChange={(e) => onBookingChange("checkOut", e.target.value)}
          className="w-[180px] border border-gray-200 bg-[#f1f3ff] px-4 py-3 text-sm text-gray-700 outline-none"
        />
      </div>
      <select
        className="w-[260px] border border-gray-200 bg-[#f1f3ff] px-4 py-3 text-sm text-gray-700 outline-none"
        value={`${bookingData.adults}-${bookingData.children}-${bookingData.rooms}`}
        onChange={(e) => {
          const [adults, children, rooms] = e.target.value
            .split("-")
            .map(Number);
          onBookingChange("adults", adults);
          onBookingChange("children", children);
          onBookingChange("rooms", rooms);
        }}
      >
        {options.map((opt, idx) => (
          <option
            key={idx}
            value={`${opt.adults}-${opt.children}-${opt.rooms}`}
          >
            {`${opt.adults} ผู้ใหญ่, ${opt.children} เด็ก, ${opt.rooms} ห้อง`}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="ml-2 h-[48px] w-[200px] bg-blue-600 text-base font-semibold text-white shadow transition-colors hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
