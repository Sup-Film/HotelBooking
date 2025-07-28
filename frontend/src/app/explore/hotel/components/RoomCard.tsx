"use client";
import Image from "next/image";

interface Hotel {
  id: number;
  name: string;
  location: string;
  images: string[];
  rating: number;
  reviews: number;
  housekeeping: number;
  food: number;
  service: number;
  staff: number;
  services: string[];
  price: number;
  rooms: {
    name: string;
    price: number;
    image: string;
  }[];
}

const RoomCard = ({ hotel }: { hotel: Hotel }) => {
  return (
    <div className="mt-2 flex justify-between gap-6">
      {hotel.rooms.map((room, idx) => (
        <div
          key={idx}
          className="flex h-[110px] w-[370px] overflow-hidden rounded-sm border border-gray-200 bg-white shadow"
        >
          {/* Image */}
          <div className="relative h-full w-[120px]">
            <Image
              src={room.image}
              alt={room.name}
              fill
              className="object-cover"
            />
          </div>
          {/* Info */}
          <div className="flex flex-1 flex-col justify-center px-4">
            <span className="mb-1 text-xs text-gray-500">{room.name}</span>
            <span className="text-xl font-bold text-blue-700">
              {room.price.toLocaleString()} BAHT/night
            </span>
          </div>
          {/* Vertical Book Now Button */}
          <button
            className="flex h-full w-[48px] items-center justify-center rounded-none border-none bg-blue-600 px-0 py-0 font-semibold text-white outline-none transition-colors hover:bg-blue-700"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              borderRadius: 0,
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};
export default RoomCard;
