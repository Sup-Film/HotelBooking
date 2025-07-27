"use client";

import Image from "next/image";

interface HotelRecommendation {
  img: string;
  name: string;
  promotion: string;
}

const RecommendedList = ({
  recommendations,
  variant,
}: {
  recommendations: HotelRecommendation[];
  variant: "desktop" | "mobile";
}) => {
  if (variant === "mobile") {
    return (
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">Recommended</h2>
        <div className="scrollbar-thin flex flex-row gap-3 overflow-x-auto pb-2">
          {recommendations.map((hotel) => (
            <div
              key={hotel.name}
              className="flex min-w-[250px] max-w-xs flex-shrink-0 flex-col"
            >
              <div className="relative mb-2 h-24 w-full">
                <Image
                  src={hotel.img}
                  alt={hotel.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold leading-tight text-[#2d36d9]">
                  {hotel.name}
                </h4>
                <p className="text-xs leading-tight text-gray-600">
                  {hotel.promotion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {recommendations.map((hotel) => (
        <div key={hotel.name} className="mb-4 flex flex-col items-start">
          <div className="relative mb-2 h-32 w-full">
            <Image
              src={hotel.img}
              alt={hotel.name}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div>
            <h4 className="text-md font-semibold text-[#2d36d9]">
              {hotel.name}
            </h4>
            <p className="text-sm text-gray-600">{hotel.promotion}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RecommendedList;
