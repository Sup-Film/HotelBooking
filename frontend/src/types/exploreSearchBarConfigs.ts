export const EXPLORE_SEARCH_BAR_CONFIGS = {
  explore: {
    title: "Hotels",
    placeholder: "Search city , Country, Place for Travel advis..",
    className: "flex w-4/5 flex-row items-center gap-4 px-8 py-6",
    inputBgColor: "bg-[#f1f3ff]",
    showBackButton: true
  },
  hotelDetail: {
    title: "Hotels details",
    placeholder: "Search city , Country, Place for Travel advis..",
    className: "flex w-full flex-row items-center gap-4 px-8 py-6",
    inputBgColor: "bg-[#f1f3ff]",
    showBackButton: true
  },
  review: {
    title: "Review hotel",
    placeholder: "Search city , Country, Place for Travel advis..",
    className: "flex w-full flex-row items-center gap-4 px-8 py-6",
    inputBgColor: "bg-blue-100",
    showBackButton: true
  }
} as const; // ใช้ as const เพื่อให้ TypeScript รู้ว่าค่าเหล่านี้จะไม่เปลี่ยนแปลง

// Type definition สำหรับ configuration keys
export type ExploreSearchBarConfigKey = keyof typeof EXPLORE_SEARCH_BAR_CONFIGS;