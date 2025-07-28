const SearchBar = ({ variant }: { variant: "desktop" | "mobile" }) => {
  if (variant === "mobile") {
    return (
      <div className="flex w-full flex-col items-center gap-2 pb-6 pt-4">
        <input
          type="text"
          placeholder="Where are you going?"
          className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
        />
        <div className="flex w-full">
          <input
            type="date"
            placeholder="20 Dec,2020"
            className="flex-1 border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
          />
          <input
            type="date"
            placeholder="21 Dec,2020"
            className="flex-1 border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
          />
        </div>
        <button
          type="button"
          className="w-full border border-gray-200 bg-white px-4 py-3 text-left text-sm text-gray-700 outline-none"
        >
          2 adult ,0 children - 1 room
        </button>
        <button
          type="submit"
          className="w-full bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 py-6">
      <input
        type="text"
        placeholder="Where are you going?"
        className="w-[200px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
      />
      <div>
        <input
          type="date"
          placeholder="20 Dec,2020"
          className="w-[150px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
        />
        <input
          type="date"
          placeholder="21 Dec,2020"
          className="w-[150px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
        />
      </div>
      <button
        type="button"
        className="w-[260px] border border-gray-200 bg-white px-4 py-3 text-left text-sm text-gray-700 outline-none"
      >
        2 adult ,0 children - 1 room
      </button>
      <button
        type="submit"
        className="ml-2 h-[48px] w-[200px] bg-blue-600 text-base font-semibold text-white shadow transition-colors hover:bg-blue-700 rounded-md"
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
