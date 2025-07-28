"use client";
import Image from "next/image";
import { JSX } from "react";
import { Hotel } from "@/types/index";

const BentoGrid = ({
  hotel,
  variant,
}: {
  hotel: Hotel;
  variant: "desktop" | "mobile";
}): JSX.Element => {
  if (variant === "mobile") {
    return (
      <div className="grid h-64 w-full grid-cols-2 grid-rows-3 gap-4">
        <div className="col-span-2 row-span-2">
          <div className="relative h-full w-full">
            <Image
              src={hotel.image[0]}
              alt={hotel.name}
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="row-start-3">
          <div className="relative h-full w-full">
            <Image
              src={hotel.image[1]}
              alt={hotel.name}
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="row-start-3">
          <div className="relative h-full w-full">
            <Image
              src={hotel.image[2]}
              alt={hotel.name}
              fill
              className="rounded-xl object-cover"
            />
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40">
              <span className="text-lg font-semibold text-white">See all</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid h-96 grid-cols-4 grid-rows-3 gap-4">
        <div className="col-span-2 row-span-3">
          <div className="relative h-full w-full">
            <Image
              src={hotel.image[0]}
              alt={hotel.name}
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="col-span-2 col-start-3 row-span-2">
          <div className="relative h-full w-full">
            <Image
              src={hotel.image[2]}
              alt={hotel.name}
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="col-start-3 row-start-3">
          <div className="relative h-full w-full">
            <Image
              src={hotel.image[2]}
              alt={hotel.name}
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="col-start-4 row-start-3">
          <div className="relative h-full w-full">
            <Image
              src={hotel.image[2]}
              alt={hotel.name}
              fill
              className="rounded-xl object-cover"
            />
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40">
              <span className="text-lg font-semibold text-white">See all</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BentoGrid;
