import {
  ClockIcon,
  HomeModernIcon,
  PhotoIcon,
  ScissorsIcon,
} from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="grid grid-cols-4 gap-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="grid w-full p-4 bg-black border border-white rounded-xl h-14">
          <HomeModernIcon />
        </div>
        <div className="font-mono text-xs text-white">Home</div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="grid w-full p-4 bg-black border border-white rounded-xl h-14">
          <ScissorsIcon />
        </div>

        <div className="font-mono text-xs text-white">Bookings</div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="grid w-full p-4 bg-black border border-white rounded-xl h-14">
          <ClockIcon />
        </div>

        <div className="font-mono text-xs text-white">History</div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="grid w-full p-4 bg-black border border-white rounded-xl h-14">
          <PhotoIcon />
        </div>

        <div className="font-mono text-xs text-white">Gallery</div>
      </div>
    </div>
  );
};

export default Navbar;
