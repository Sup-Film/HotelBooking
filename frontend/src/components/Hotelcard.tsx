// src/components/HotelCard.tsx
import Image from "next/image";
import { Hotel, AmenityIcon } from "@/types";
import { amenityIcons } from "@/data/hotels";
import { FaShower, FaCar } from "react-icons/fa";
import { GiWineBottle } from "react-icons/gi";
import { CiWifiOn } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

// Props interface สำหรับ component นี้
interface HotelCardProps {
  hotel: Hotel;
  variant?: "desktop" | "mobile";
  onBooking?: (hotelId: string) => void;
}

export function HotelCard({
  hotel,
  variant = "desktop",
  onBooking,
}: HotelCardProps) {
  // ฟังก์ชันสำหรับ render ดาว rating
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`ms-1 h-4 w-4 ${
          index < Math.floor(4) ? "text-yellow-300" : "text-gray-300"
        }`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    ));
  };

  // ฟังก์ชันสำหรับเลือก icon ตาม amenity
  const getAmenityIcon = (amenity: string) => {
    const iconMap = {
      shower: FaShower,
      car: FaCar,
      wine: GiWineBottle,
      wifi: CiWifiOn,
      more: HiOutlineDotsHorizontal,
    };

    const IconComponent = iconMap[amenity as keyof typeof iconMap];
    return IconComponent ? (
      <IconComponent size={variant === "mobile" ? 24 : 16} color="blue" />
    ) : null;
  };

  // ฟังก์ชันสำหรับ handle การกดปุ่ม Book Now
  const handleBooking = () => {
    if (onBooking) {
      onBooking(hotel.id);
    }
  };

  // Layout สำหรับ Mobile
  if (variant === "mobile") {
    return (
      <div className="flex min-w-[260px] max-w-[320px] flex-col overflow-hidden p-3">
        <Image
          src={hotel.image[0]}
          alt={hotel.name}
          width={280}
          height={120}
          className="object-cover"
        />

        <div className="bg-white p-3 shadow-lg">
          <span className="mb-1 block text-base font-bold">{hotel.name}</span>

          {/* Rating stars */}
          <div className="mb-1 flex">{renderStars()}</div>

          {/* Rating badge และ reviews */}
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-2xl bg-red-400 px-2 py-1 text-xs text-white">
              ★4
            </span>
            <span className="text-xs text-gray-400">1366 Reviews</span>
          </div>

          {/* Amenities */}
          <div className="mb-2 flex w-full flex-col items-start gap-2">
            <span className="py-1 text-xs">Amenities</span>
            <div className="flex justify-center gap-2">
              <span className="rounded-md bg-white p-1 text-xs shadow">
                {getAmenityIcon("shower")}
              </span>
              <span className="rounded-md bg-white p-1 text-xs shadow">
                {getAmenityIcon("car")}
              </span>
              <span className="rounded-md bg-white p-1 text-xs shadow">
                {getAmenityIcon("wine")}
              </span>
              <span className="rounded-md bg-white p-1 text-xs shadow">
                {getAmenityIcon("wifi")}
              </span>
              <span className="rounded-md bg-white p-1 text-xs shadow">
                {getAmenityIcon("more")}
              </span>
            </div>
          </div>

          {/* Price */}
          <span className="mb-2 block font-bold text-[#2d36d9]">
            {hotel.price}/night
          </span>
        </div>

        <button
          className="w-full bg-[#2d36d9] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#252db8]"
          onClick={handleBooking}
        >
          Book Now
        </button>
      </div>
    );
  }

  // Layout สำหรับ Desktop
  return (
    <div className="flex overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl">
      <Image
        src={hotel.image[0]}
        alt={hotel.name}
        width={150}
        height={80}
        className="object-cover"
      />

      <div className="flex-1 p-4">
        <div className="mb-1 flex flex-col">
          <span className="font-bold">{hotel.name}</span>

          {/* Rating stars */}
          <div className="flex">{renderStars()}</div>

          {/* Rating badge และ reviews */}
          <div className="mt-1 flex items-center gap-2">
            <span className="rounded-2xl bg-red-400 px-2 py-1 text-xs text-white">
              ★4
            </span>
            <span className="text-gray-400">1366 Reviews</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-2 flex flex-col gap-2">
          <span className="py-1 text-xs">Amenities</span>
          <div className="flex gap-2">
            <span className="rounded-md bg-white p-1 text-xs shadow">
              {getAmenityIcon("shower")}
            </span>
            <span className="rounded-md bg-white p-1 text-xs shadow">
              {getAmenityIcon("car")}
            </span>
            <span className="rounded-md bg-white p-1 text-xs shadow">
              {getAmenityIcon("wine")}
            </span>
            <span className="rounded-md bg-white p-1 text-xs shadow">
              {getAmenityIcon("wifi")}
            </span>
            <span className="rounded-md bg-white p-1 text-xs shadow">
              {getAmenityIcon("more")}
            </span>
          </div>
        </div>

        {/* Price */}
        <span className="font-bold text-[#2d36d9]">{hotel.price}/night</span>
      </div>

      <button
        className="bg-[#2d36d9] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#252db8]"
        onClick={handleBooking}
      >
        Book Now
      </button>
    </div>
  );
}

export default HotelCard;
