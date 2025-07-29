"use client";
import Image from "next/image";
import { Hotel } from "@/types/index";
import { useRouter } from "next/navigation";

const RoomCard = ({
  hotel,
  variant,
}: {
  hotel: Hotel | undefined;
  variant: "desktop" | "mobile";
}) => {
  const router = useRouter();

  if (variant === "mobile") {
    return (
      <div className="my-2 flex flex-row gap-4 pb-2">
        {hotel?.rooms.map((room, idx) => (
          <div
            key={idx}
            className="flex w-full max-w-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow"
            style={{ flex: 1 }}
          >
            {/* Image on top */}
            <div className="relative h-40 w-full">
              <Image
                src={room.image}
                alt={room.type}
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            {/* Info below image */}
            <div className="flex flex-col items-start px-4 py-3">
              <span className="mb-1 text-base font-medium text-gray-700">
                {room.type}
              </span>
              <span className="mb-2 text-lg font-bold text-blue-700">
                {room.price.toLocaleString()} BAHT/night
              </span>
            </div>
            {/* Horizontal Book Now Button */}
            <button className="w-full rounded-b-lg bg-blue-600 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-700">
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
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};
export default RoomCard;
