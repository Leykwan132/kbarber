import Appointment from "@/components/Appointment";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";

type Props = {};

const history = (props: Props) => {
  return (
    <div className="relative flex flex-col justify-center py-4 bg-black px-7 ">
      <div className="z-20">
        <Header />
        <div className="mt-4 font-mono text-white ">History</div>{" "}
        <div className="flex flex-col gap-6 my-5 mb-6 ">
          <Appointment />
          <Card content="quote" />
          <Card content="count" />
        </div>
      </div>
      <div className="fixed z-50 bottom-8 ">
        <Navbar />
      </div>
      <div className="fixed bottom-0 left-0 z-10 w-full h-screen bg-black rounded-2xl" />
    </div>
  );
};

export default history;
