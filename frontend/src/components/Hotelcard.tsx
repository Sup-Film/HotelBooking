interface Hotel {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  amenities: string[];
}

interface HotelCardProps {
  hotel: Hotel;
  variant?: "desktop" | "mobile";
}

export function HotelCard({ hotel, variant = "desktop" }: HotelCardProps) {
  // Component logic ที่ใช้ซ้ำได้
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < 4 ? "text-yellow-300" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    ));
  };

  if (variant === "mobile") {
    return (
      <div className="flex flex-col min-w-[260px] max-w-[320px] overflow-hidden p-3">
        {/* Mobile layout */}
      </div>
    );
  }

  return (
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Desktop layout */}
    </div>
  );
}
export default Hotelcard;
