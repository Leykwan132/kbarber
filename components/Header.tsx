import React from "react";
import Doraemon from "public/doraemon.png";
import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <div className="w-8 h-8 overflow-hidden rounded-full">
          <Image
            src={Doraemon}
            alt="Doraemon"
            className="object-cover w-full h-full"
          />
        </div>
        <p className="font-mono text-xl text-white">KwanBarber</p>
      </div>
      <a href="https://www.instagram.com/kwanbarber/" target="_blank">
        <AiOutlineInstagram className="text-3xl text-white" />
      </a>
    </div>
  );
};

export default Header;
