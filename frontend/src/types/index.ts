// ข้อมูลพื้นฐานของโรงแรม
export interface Room {
  type: string;
  price: number;
  image: string;
}

export interface Hotel {
  id: number;                // รหัสโรงแรม
  name: string;
  location: string;
  price: number;
  image: string;
  description: string;
  rooms: Room[];
}

// ข้อมูลสำหรับ amenity icon mapping
export interface AmenityIcon {
  name: string;         // ชื่อ amenity
  icon: string;         // ชื่อ icon component
  color: string;        // สีของ icon
}

// ข้อมูลการค้นหา
export interface SearchCriteria {
  location: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
}

// Tab types สำหรับ service selector
export type ServiceType = 'hotel' | 'flight' | 'car';