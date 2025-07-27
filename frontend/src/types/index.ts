// ข้อมูลพื้นฐานของโรงแรม
export interface Hotel {
  id: string;           // รหัสโรงแรมที่ไม่ซ้ำกัน
  name: string;         // ชื่อโรงแรม
  rating: number;       // คะแนน rating (0-5)
  reviews: number;      // จำนวน reviews
  price: number;        // ราคาต่อคืน
  image: string;        // path ของรูปภาพ
  amenities: string[];  // สิ่งอำนวยความสะดวก
  location?: string;    // สถานที่ (optional เพราะอาจจะไม่มีในบางกรณี)
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