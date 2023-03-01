import {
  ClockIcon,
  HomeModernIcon,
  PhotoIcon,
  ScissorsIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { showState } from "@/atoms/showState";
import { useRecoilState } from "recoil";
type Props = {};
type ShowType = "home" | "bookings" | "history" | "gallery";

const Navbar = (props: Props) => {
  const router = useRouter();
  const [show, setShow] = useRecoilState(showState);
  const handleItemClick = (route: String) => {
    // Update the state to the clicked item index
    // @ts-ignore
    setShow(route);
    router.push("/" + route);
  };
  return (
    <div className="grid grid-cols-4 gap-8">
      <div
        onClick={() => handleItemClick("home")}
        className="flex flex-col items-center justify-center gap-2"
      >
        <div
          className={`${
            show === "home" ? "bg-white text-black" : "bg-black text-white"
          } grid w-full p-4  border border-white rounded-xl h-14 transition duration-300 ease-in-out`}
        >
          <HomeModernIcon />
        </div>
        <div className="font-mono text-xs text-white">Home</div>
      </div>
      <div
        onClick={() => handleItemClick("bookings")}
        className="flex flex-col items-center justify-center gap-2"
      >
        <div
          className={`${
            show === "bookings" ? "bg-white text-black" : "bg-black text-white"
          } grid w-full p-4  border border-white rounded-xl h-14 transition duration-300 ease-in-out`}
        >
          <ScissorsIcon />
        </div>

        <div className="font-mono text-xs text-white">Bookings</div>
      </div>
      <div
        onClick={() => handleItemClick("history")}
        className="flex flex-col items-center justify-center gap-2"
      >
        <div
          className={`${
            show === "history" ? "bg-white text-black" : "bg-black text-white"
          } grid w-full p-4  border border-white rounded-xl h-14 transition duration-300 ease-in-out`}
        >
          <ClockIcon />
        </div>

        <div className="font-mono text-xs text-white">History</div>
      </div>
      <div
        onClick={() => handleItemClick("gallery")}
        className="flex flex-col items-center justify-center gap-2"
      >
        <div
          className={`${
            show === "gallery" ? "bg-white text-black" : "bg-black text-white"
          } grid w-full p-4  border border-white rounded-xl h-14 transition duration-300 ease-in-out`}
        >
          <PhotoIcon />
        </div>

        <div className="font-mono text-xs text-white">Gallery</div>
      </div>
    </div>
  );
};

export default Navbar;
