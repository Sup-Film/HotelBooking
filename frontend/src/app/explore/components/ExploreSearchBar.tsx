import { IoIosArrowBack } from "react-icons/io";

interface ExploreSearchBarProps {
  variant: "desktop" | "mobile";
}

const ExploreSearchBar = ({ variant }: ExploreSearchBarProps) => {
  if (variant === "mobile") {
    return (
      <div className="flex w-full flex-col items-center pb-2 pt-4">
        <div className="mb-3 flex w-full items-center">
          <div className="flex cursor-pointer items-center">
            <IoIosArrowBack size={22} className="text-gray-700" />
          </div>
          <div className="flex-1 text-center text-base font-semibold text-[#232345]">
            Hotels
          </div>
          <div className="w-6" /> {/* spacer for symmetry */}
        </div>
        <input
          type="text"
          placeholder="Search city , Country, Place for Travel advis.."
          className="w-full rounded-lg bg-[#f1f3ff] px-4 py-3 text-sm text-gray-500 outline-none"
        />
      </div>
    );
  }

  return (
    <div className="flex w-4/5 flex-row items-center gap-4 px-8 py-6">
      <div className="flex cursor-pointer items-center rounded-full bg-blue-100 p-2 shadow">
        <IoIosArrowBack size={24} />
      </div>
      <input
        type="text"
        placeholder="Search city, Country, Place for Travel advisory"
        className="w-full rounded-lg bg-[#e9ebf5] px-6 py-3 text-lg text-gray-700 outline-none transition-shadow focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
export default ExploreSearchBar;
