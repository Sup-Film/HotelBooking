"use client";
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

const CardRating = ({
  hotel,
  variant,
}: {
  hotel: Hotel;
  variant: "desktop" | "mobile";
}) => {
  if (variant === "mobile") {
    return (
      <div className="w-full">
        <div className="mb-4 rounded-xl bg-white p-6 shadow">
          <div className="mb-2 flex items-center gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1 text-lg font-bold text-white">
              {hotel.rating}
            </span>
            <div>
              <span className="text-lg font-semibold">Excellent</span>
              <div className="text-sm text-gray-400">
                {hotel.reviews} Reviews
              </div>
            </div>
          </div>
          <div className="mb-2">
            <div className="mb-1 flex items-center gap-2 text-sm">
              Housekeeping{" "}
              <span>
                {"★".repeat(hotel.housekeeping)}
                {"☆".repeat(5 - hotel.housekeeping)}
              </span>
            </div>
            <div className="mb-1 flex items-center gap-2 text-sm">
              Food{" "}
              <span>
                {"★".repeat(hotel.food)}
                {"☆".repeat(5 - hotel.food)}
              </span>
            </div>
            <div className="mb-1 flex items-center gap-2 text-sm">
              Service{" "}
              <span>
                {"★".repeat(hotel.service)}
                {"☆".repeat(5 - hotel.service)}
              </span>
            </div>
            <div className="mb-1 flex items-center gap-2 text-sm">
              Staff{" "}
              <span>
                {"★".repeat(hotel.staff)}
                {"☆".repeat(5 - hotel.staff)}
              </span>
            </div>
          </div>
          <div className="mb-2">Services</div>
          <div className="mb-2 flex gap-2">
            {hotel.services.map((s, i) => (
              <div
                key={i}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-[#f1f3ff]"
              >
                <span className="text-xl">
                  {s === "car"
                    ? "🚗"
                    : s === "pool"
                      ? "🏊"
                      : s === "bar"
                        ? "🍸"
                        : s === "wifi"
                          ? "📶"
                          : s === "gym"
                            ? "🏋️"
                            : ""}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-xl p-4 font-medium text-blue-600">
          <span className="text-xl">❗</span>
          This property is in highly demand today.
        </div>
      </div>
    );
  }

  return (
    <div className="w-[450px] min-w-[320px]">
      <div className="mb-4 rounded-xl bg-white p-6 shadow">
        <div className="mb-2 flex items-center gap-3">
          <span className="rounded-lg bg-blue-600 px-3 py-1 text-lg font-bold text-white">
            {hotel.rating}
          </span>
          <div>
            <span className="text-lg font-semibold">Excellent</span>
            <div className="text-sm text-gray-400">{hotel.reviews} Reviews</div>
          </div>
        </div>
        <div className="mb-2">
          <div className="mb-1 flex items-center gap-2 text-sm">
            Housekeeping{" "}
            <span>
              {"★".repeat(hotel.housekeeping)}
              {"☆".repeat(5 - hotel.housekeeping)}
            </span>
          </div>
          <div className="mb-1 flex items-center gap-2 text-sm">
            Food{" "}
            <span>
              {"★".repeat(hotel.food)}
              {"☆".repeat(5 - hotel.food)}
            </span>
          </div>
          <div className="mb-1 flex items-center gap-2 text-sm">
            Service{" "}
            <span>
              {"★".repeat(hotel.service)}
              {"☆".repeat(5 - hotel.service)}
            </span>
          </div>
          <div className="mb-1 flex items-center gap-2 text-sm">
            Staff{" "}
            <span>
              {"★".repeat(hotel.staff)}
              {"☆".repeat(5 - hotel.staff)}
            </span>
          </div>
        </div>
        <div className="mb-2">Services</div>
        <div className="mb-2 flex gap-2">
          {hotel.services.map((s, i) => (
            <div
              key={i}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-[#f1f3ff]"
            >
              <span className="text-xl">
                {s === "car"
                  ? "🚗"
                  : s === "pool"
                    ? "🏊"
                    : s === "bar"
                      ? "🍸"
                      : s === "wifi"
                        ? "📶"
                        : s === "gym"
                          ? "🏋️"
                          : ""}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-xl p-4 font-medium text-blue-600">
        <span className="text-xl">❗</span>
        This property is in highly demand today.
      </div>
    </div>
  );
};
export default CardRating;
