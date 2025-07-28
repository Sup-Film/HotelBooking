"use client";
import { useActiveMenu } from "@/context/ActiveMenuContext";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHeart, FaHome } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useActiveMenu();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/home") setActiveMenu("Home");
    else if (pathname === "/") setActiveMenu("Explore");
    else if (pathname === "/trips") setActiveMenu("Trips");
    else if (pathname === "/profile") setActiveMenu("Profile");
  }, [pathname, setActiveMenu]);

  return (
    <>
      {/* Sidebar for desktop/tablet */}
      <aside className="sticky top-0 hidden h-screen w-24 flex-col items-center rounded-r-3xl bg-[#2d36d9] py-6 text-white sm:flex">
        {/* Logo บนสุด */}
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white">
          <Image src="/globe.svg" alt="Logo" width={32} height={32} />
        </div>
        {/* Menu icons ตรงกลาง */}
        <div className="flex flex-1 flex-col items-center justify-center gap-8 text-xs">
          <div className="flex flex-col items-center gap-2">
            <div
              className={
                activeMenu === "Home"
                  ? "rounded-full bg-white p-3 text-[#2d36d9] shadow-lg"
                  : "cursor-pointer"
              }
              onClick={() => {
                router.push("/home");
              }}
            >
              <FaHome
                size={24}
                className="mx-auto"
                color={activeMenu === "Home" ? "#2d36d9" : "white"}
              />
              <span className={activeMenu === "Home" ? "mt-1" : ""}>Home</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div
              className={
                activeMenu === "Explore"
                  ? "rounded-full bg-white p-3 text-[#2d36d9] shadow-lg"
                  : "cursor-pointer"
              }
              onClick={() => {
                router.push("/");
              }}
            >
              <FaMagnifyingGlass
                size={24}
                className="mx-auto"
                color={activeMenu === "Explore" ? "#2d36d9" : "white"}
              />
              <span className={activeMenu === "Explore" ? "mt-1" : ""}>
                Explore
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div
              className={
                activeMenu === "Trips"
                  ? "rounded-full bg-white p-3 text-[#2d36d9] shadow-lg"
                  : "cursor-pointer"
              }
              onClick={() => {
                router.push("/trips");
              }}
            >
              <FaHeart
                size={24}
                className="mx-auto"
                color={activeMenu === "Trips" ? "#2d36d9" : "white"}
              />
              <span className={activeMenu === "Trips" ? "mt-1" : ""}>
                Trips
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div
              className={
                activeMenu === "Profile"
                  ? "rounded-full bg-white p-3 text-[#2d36d9] shadow-lg"
                  : "cursor-pointer"
              }
              onClick={() => {
                router.push("/profile");
              }}
            >
              <CgProfile
                size={24}
                className="mx-auto"
                color={activeMenu === "Profile" ? "#2d36d9" : "white"}
              />
              <span className={activeMenu === "Profile" ? "mt-1" : ""}>
                Profile
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* Bottom navigation for mobile */}
      <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-between rounded-t-3xl bg-[#2d36d9] px-2 py-4 text-white sm:hidden">
        <div className="flex flex-1 cursor-pointer flex-col items-center">
          <div
            className={
              activeMenu === "Home"
                ? "rounded-full bg-white p-3 text-[#2d36d9] shadow-lg"
                : "cursor-pointer"
            }
            onClick={() => {
              router.push("/home");
            }}
          >
            <FaHome
              size={24}
              className="mx-auto"
              color={activeMenu === "Home" ? "#2d36d9" : "white"}
            />
            <span className={activeMenu === "Home" ? "mt-1" : ""}>Home</span>
          </div>
        </div>
        <div className="flex flex-1 cursor-pointer flex-col items-center">
          <div
            className={
              activeMenu === "Explore"
                ? "rounded-full bg-white p-3 text-[#2d36d9] shadow-lg"
                : "cursor-pointer"
            }
            onClick={() => {
              router.push("/");
            }}
          >
            <FaMagnifyingGlass
              size={24}
              className="mx-auto"
              color={activeMenu === "Explore" ? "#2d36d9" : "white"}
            />
            <span className={activeMenu === "Explore" ? "mt-1" : ""}>
              Explore
            </span>
          </div>
        </div>
        <div className="flex flex-1 cursor-pointer flex-col items-center">
          <div
            className={
              activeMenu === "Trips"
                ? "rounded-full bg-white p-3 text-[#2d36d9] shadow-lg"
                : "cursor-pointer"
            }
            onClick={() => {
              router.push("/trips");
            }}
          >
            <FaHeart
              size={24}
              className="mx-auto"
              color={activeMenu === "Trips" ? "#2d36d9" : "white"}
            />
            <span className={activeMenu === "Trips" ? "mt-1" : ""}>Trips</span>
          </div>
        </div>
        <div className="flex flex-1 cursor-pointer flex-col items-center">
          <div
            className={
              activeMenu === "Profile"
                ? "rounded-full bg-white p-3 text-[#2d36d9] shadow-lg"
                : "cursor-pointer"
            }
            onClick={() => {
              router.push("/profile");
            }}
          >
            <CgProfile
              size={24}
              className="mx-auto"
              color={activeMenu === "Profile" ? "#2d36d9" : "white"}
            />
            <span className={activeMenu === "Profile" ? "mt-1" : ""}>
              Profile
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Sidebar;
