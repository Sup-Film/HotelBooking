"use client";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { FaFileAlt, FaHeart, FaHome } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <>
      {/* Sidebar for desktop/tablet */}
      <aside className="hidden sm:flex w-24 bg-[#2d36d9] flex-col items-center py-6 rounded-r-3xl text-white sticky top-0 h-screen">
        {/* Logo บนสุด */}
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4">
          <Image src="/globe.svg" alt="Logo" width={32} height={32} />
        </div>
        {/* Menu icons ตรงกลาง */}
        <div className="flex-1 flex flex-col justify-center gap-8 text-xs items-center">
          <div className="flex flex-col items-center gap-2">
            <FaHome size={24} />
            <span>Home</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white text-[#2d36d9] rounded-full p-3 shadow-lg">
              <div className="flex flex-col items-center justify-center">
                <FaMagnifyingGlass size={24} className="mx-auto" />
                <span className="mt-1">Explore</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaHeart size={24} />
            <span>Trips</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CgProfile size={24} />
            <span>Profile</span>
          </div>
        </div>
      </aside>

      {/* Bottom navigation for mobile */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#2d36d9] flex justify-between items-center px-2 py-2 rounded-t-3xl sm:hidden z-50">
        <div className="flex-1 flex flex-col items-center">
          <FaHome size={24} color="white" />
          <span className="text-xs text-white">Home</span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="bg-white text-[#2d36d9] rounded-full p-3 shadow-lg">
            <div className="flex flex-col items-center justify-center">
              <FaMagnifyingGlass size={24} className="mx-auto" />
              <span className="mt-1">Explore</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <FaHeart size={24} color="white" />
          <span className="text-xs text-white">Trips</span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <CgProfile size={24} color="white" />
          <span className="text-xs text-white">Profile</span>
        </div>
      </nav>
    </>
  );
};
export default Sidebar;
