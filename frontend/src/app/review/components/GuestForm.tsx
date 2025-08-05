"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export interface GuestDetails {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
}

interface GuestFormProps {
  variant: "desktop" | "mobile";
}

const GuestForm = ({ variant }: GuestFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams(); // 3. Hook สำหรับอ่าน URL params จากหน้าปัจจุบัน

  // 4. ย้าย State ทั้งหมดมาไว้ใน Component นี้
  const [guestDetails, setGuestDetails] = useState<GuestDetails>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });
  const [errors, setErrors] = useState<Partial<GuestDetails>>({});

  // ฟังก์ชันสำหรับอัปเดต State เมื่อผู้ใช้พิมพ์
  const handleDetailsChange = (field: keyof GuestDetails, value: string) => {
    setGuestDetails((prev) => ({ ...prev, [field]: value }));
    // ลบ error ของ field นั้นๆ ออกไปเมื่อผู้ใช้เริ่มแก้ไข
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // 5. ย้าย Logic การ Validate มาไว้ที่นี่
  const validate = (): boolean => {
    const newErrors: Partial<GuestDetails> = {};

    if (!guestDetails.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }
    if (!guestDetails.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }
    if (!guestDetails.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(guestDetails.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!guestDetails.mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(guestDetails.mobile)) {
      // ตัวอย่าง validation เพิ่มเติม
      newErrors.mobile = "Mobile number must be 10 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 6. สร้างฟังก์ชันสำหรับจัดการการกดปุ่ม "Continue"
  const handleContinue = () => {
    if (validate()) {
      // 7. ถ้าข้อมูลถูกต้อง สร้าง URL สำหรับหน้า Payment
      const newParams = new URLSearchParams(searchParams.toString());

      // เพิ่มข้อมูล guest details เข้าไปใน params
      newParams.set("firstName", guestDetails.firstName);
      newParams.set("lastName", guestDetails.lastName);
      newParams.set("email", guestDetails.email);
      newParams.set("mobile", guestDetails.mobile);

      // นำทางไปยังหน้า Payment
      router.push(`/payment?${newParams.toString()}`);
    } else {
      console.log("Validation failed.");
    }
  };

  if (variant === "mobile") {
    return (
      <div className="my-4">
        <div className="mb-2 font-medium">Guest Details</div>
        <div className="mb-2 flex flex-col gap-2">
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="First Name"
            value={guestDetails.firstName}
            onChange={(e) => handleDetailsChange("firstName", e.target.value)}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {errors.firstName}
            </p>
          )}
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="Last Name"
            value={guestDetails.lastName}
            onChange={(e) => handleDetailsChange("lastName", e.target.value)}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {errors.lastName}
            </p>
          )}
        </div>
        <div className="mb-2 flex flex-col gap-2">
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="E-mail address"
            value={guestDetails.email}
            onChange={(e) => handleDetailsChange("email", e.target.value)}
          />
          {errors.email && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {errors.email}
            </p>
          )}
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="Mobile number"
            value={guestDetails.mobile}
            onChange={(e) => handleDetailsChange("mobile", e.target.value)}
          />
          {errors.mobile && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {errors.mobile}
            </p>
          )}
        </div>
        <button className="mb-6 text-sm hover:underline">Add Guest +</button>
        <div>
          <div className="mb-1 text-sm">Special Request (optional)</div>
          <textarea className="min-h-[60px] w-full rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300" />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <div className="mb-2 font-medium">Guest Details</div>
      <div className="mb-2 grid grid-cols-2 gap-4">
        <div className="flex flex-1 flex-col">
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="First Name"
            value={guestDetails.firstName}
            onChange={(e) => handleDetailsChange("firstName", e.target.value)}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {errors.firstName}
            </p>
          )}
        </div>
        <div className="flex flex-1 flex-col">
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="Last Name"
            value={guestDetails.lastName}
            onChange={(e) => handleDetailsChange("lastName", e.target.value)}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>
      <div className="mb-2 grid grid-cols-2 gap-4">
        <div className="flex flex-1 flex-col">
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="E-mail address"
            value={guestDetails.email}
            onChange={(e) => handleDetailsChange("email", e.target.value)}
          />
          {errors.email && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {errors.email}
            </p>
          )}
        </div>
        <div className="flex flex-1 flex-col">
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="Mobile number"
            value={guestDetails.mobile}
            onChange={(e) => handleDetailsChange("mobile", e.target.value)}
          />
          {errors.mobile && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {errors.mobile}
            </p>
          )}
        </div>
      </div>
      <button className="mb-2 text-sm hover:underline">Add Guest +</button>
      <div>
        <div className="mb-1 text-sm">Special Request (optional)</div>
        <textarea className="min-h-[60px] w-full rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300" />
      </div>
      <button
        className="mt-2 w-1/3 rounded-lg bg-blue-600 py-3 font-semibold text-white"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};
export default GuestForm;
