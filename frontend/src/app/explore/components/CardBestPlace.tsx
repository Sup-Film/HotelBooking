"use client";
import Image from "next/image";
import { Hotel } from "@/types";
import { useRouter } from "next/navigation";

const CardBestPlace = ({
  bestPlaces,
  variant,
}: {
  bestPlaces: Hotel[];
  variant: "desktop" | "mobile";
}) => {
  const router = useRouter();
  const handleViewDetails = (hotel: Hotel) => {
    // ไปหน้า detail โดยส่ง id หรือ slug
    router.push(`/explore/hotel/${hotel.id}`); // Assuming hotel.id is the identifier
  };
  return (
    <div
      className={`grid ${variant === "desktop" ? "grid-cols-3 gap-6" : "mb-24 grid-cols-1 gap-4"}`}
    >
      {bestPlaces.map((place) => (
        <div key={place.name} className="flex flex-col">
          <Image
            src={place.image}
            alt={place.name}
            width={400}
            height={220}
            className="h-[220px] w-full object-cover"
          />
          {variant === "desktop" ? (
            <div className="flex justify-between py-2.5">
              <div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  {place.name}
                </h3>
                <p className="mb-2 text-sm text-gray-600">
                  {place.description}
                </p>
              </div>
              <button
                className="self-start rounded-md px-4 py-2 font-semibold text-blue-600 shadow transition-colors hover:bg-blue-100 cursor-pointer"
                onClick={() => handleViewDetails(place)}
              >
                View Details
              </button>
            </div>
          ) : (
            <div className="flex flex-col py-2.5">
              <h3 className="mb-1 text-lg font-semibold text-gray-900">
                {place.name}
              </h3>
              <p className="mb-2 text-sm text-gray-600">{place.description}</p>
              <button
                className="w-1/2 self-start rounded-md px-6 py-4 font-semibold text-blue-600 shadow-lg transition-colors hover:bg-blue-100 cursor-pointer"
                onClick={() => handleViewDetails(place)}
              >
                View Details
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default CardBestPlace;
