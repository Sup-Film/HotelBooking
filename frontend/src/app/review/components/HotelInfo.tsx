"use client";
import Image from "next/image";

const HotelInfo = ({
  name,
  location,
  review,
  image,
  stars,
  variant,
}: {
  name: string;
  location: string;
  review: string;
  image: string;
  stars: number;
  variant: "mobile" | "desktop";
}) => {
  return (
    <div
      className={`mb-2 flex gap-2 ${variant === "mobile" ? "flex-col" : "flex-row items-center justify-between"}`}
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="cursor-pointer font-semibold text-blue-700 hover:underline">
            {name}
          </span>
          <span className="text-lg text-yellow-400">
            {"★".repeat(stars)}
            {"☆".repeat(5 - stars)}
          </span>
        </div>
        <div className="mb-1 text-sm text-gray-500">{location}</div>
        <div className="mb-4 text-xs text-gray-400">
          {review || "No reviews available"}
        </div>
      </div>
      <div
        className={`relative ${variant === "mobile" ? "h-32 w-full" : "h-[120px] w-[180px]"}`}
      >
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
    </div>
  );
};
export default HotelInfo;
