"use client";
import Image from "next/image";
import { Hotel, Room } from "@/types/index";
import { useRouter } from "next/navigation";

interface BookingData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
}

const RoomCard = ({
  hotel,
  variant,
  bookingData,
}: {
  hotel: Hotel | undefined;
  variant: "desktop" | "mobile";
  bookingData: BookingData;
}) => {
  const router = useRouter();

  const handleBookNow = (room: Room) => {
    if (!bookingData.checkIn || !bookingData.checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }

    const checkInData = new Date(bookingData.checkIn);
    const checkOutData = new Date(bookingData.checkOut);
    if (checkInData >= checkOutData) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    const params = new URLSearchParams();
    if (hotel?.id) {
      params.append("hotelId", hotel.id.toString());
    }

    params.append("roomType", room.type);
    params.append("checkIn", bookingData.checkIn);
    params.append("checkOut", bookingData.checkOut);
    params.append("room", bookingData.rooms.toString());
    params.append("adults", bookingData.adults.toString());
    params.append("children", bookingData.children.toString());

    router.push(`/review?${params.toString()}`);
  };

  if (!hotel) return null;

  if (variant === "mobile") {
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
                alt={room.type}
                fill
                className="object-cover"
              />
            </div>
            {/* Info */}
            <div className="flex flex-1 flex-col justify-center px-4">
              <span className="mb-1 text-xs text-gray-500">{room.type}</span>
              <span className="text-xl font-bold text-blue-700">
                {room.price} BAHT/night
              </span>
            </div>
            {/* Vertical Book Now Button */}
            <button
              className="flex h-full w-[48px] items-center justify-center rounded-none border-none bg-blue-600 px-0 py-0 font-semibold text-white outline-none transition-colors hover:bg-blue-700"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
              onClick={() => handleBookNow(room)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-2 flex justify-between gap-6">
      {hotel?.rooms.map((room, idx) => (
        <div
          key={idx}
          className="flex h-[110px] w-[370px] overflow-hidden rounded-sm border border-gray-200 bg-white shadow"
        >
          {/* Image */}
          <div className="relative h-full w-[120px]">
            <Image
              src={room.image}
              alt={room.type}
              fill
              className="object-cover"
            />
          </div>
          {/* Info */}
          <div className="flex flex-1 flex-col justify-center px-4">
            <span className="mb-1 text-xs text-gray-500">{room.type}</span>
            <span className="text-xl font-bold text-blue-700">
              {room.price} BAHT/night
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
            onClick={() => handleBookNow(room)}
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};
export default RoomCard;
