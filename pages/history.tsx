import Appointment from "@/components/Appointment";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";

type Props = {};

const history = (props: Props) => {
  return (
    <div className="relative flex flex-col justify-center bg-black px-7 ">
      <div className="z-20">
        <div className="mt-4 font-mono text-white ">History</div>{" "}
        <div className="flex flex-col gap-6 my-5 mb-6 ">
          <Appointment />
          <Card content="quote" />
          <Card content="count" />
        </div>
      </div>
    </div>
  );
};

export default history;
