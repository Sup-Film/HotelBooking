import { Hotel, AmenityIcon } from "@/types";

// ข้อมูล amenity icons สำหรับ mapping
export const amenityIcons: AmenityIcon[] = [
  { name: "shower", icon: "FaShower", color: "blue" },
  { name: "car", icon: "FaCar", color: "blue" },
  { name: "wine", icon: "GiWineBottle", color: "blue" },
  { name: "wifi", icon: "CiWifiOn", color: "blue" },
  { name: "more", icon: "HiOutlineDotsHorizontal", color: "blue" },
];

// Mock data สำหรับโรงแรม - จำลองข้อมูลที่จะได้จาก API
export const mockHotels: Hotel[] = [
  {
    id: "jw-marriott-1",
    name: "Hotel JW Marriott",
    rating: 4.9,
    reviews: 1368,
    price: 1000,
    image: "/images/hotel.png",
    amenities: ["shower", "car", "wine", "wifi", "more"],
    location: "Pattaya",
  },
  {
    id: "holiday-inn-goa",
    name: "Holiday Inn Resort",
    rating: 4.8,
    reviews: 2456,
    price: 1200,
    image: "/images/hotel.png",
    amenities: ["shower", "wifi", "car", "wine"],
    location: "Goa",
  },
  {
    id: "nobu-chicago",
    name: "Nobu Hotel Chicago",
    rating: 4.7,
    reviews: 1892,
    price: 1500,
    image: "/images/hotel.png",
    amenities: ["shower", "wifi", "wine", "more"],
    location: "Chicago",
  },
];

export const mockRecommendedHotels = [
  {
    img: "/images/rec-01.png",
    name: "Hotel JW Marriott",
    promotion: "Special Offer: 20% off",
  },
  {
    img: "/images/rec-02.png",
    name: "Holiday Inn Resort",
    promotion: "Free breakfast included",
  },
  {
    img: "/images/rec-03.png",
    name: "Nobu Hotel Chicago",
    promotion: "Stay 3 nights, get 1 free",
  },
  {
    img: "/images/rec-04.png",
    name: "Ritz-Carlton",
    promotion: "Luxury stay with spa access",
  },
  {
    img: "/images/rec-05.png",
    name: "Hilton Garden Inn",
    promotion: "Book now, pay later",
  },
];

export const bestPlaces = [
  {
    name: "Hotel JW Marriott",
    description: "Price starts from 1,000",
    image: "/images/p_01.png",
  },
  {
    name: "Holiday Inn Resort",
    description: "Price starts from 1,000",
    image: "/images/p_02.png",
  },
  {
    name: "Nobu Hotel Chicago",
    description: "Price starts from 1,000",
    image: "/images/p_03.png",
  },
  {
    name: "Ritz-Carlton",
    description: "Price starts from 1,000",
    image: "/images/p_04.png",
  },
  {
    name: "Hilton Garden Inn",
    description: "Price starts from 1,000",
    image: "/images/p_05.png",
  },
  {
    name: "The St. Regis",
    description: "Price starts from 1,000",
    image: "/images/p_06.png",
  },
  {
    name: "Four Seasons Hotel",
    description: "Price starts from 1,000",
    image: "/images/p_01.png",
  },
  {
    name: "The Ritz London",
    description: "Price starts from 1,000",
    image: "/images/p_02.png",
  },
];
