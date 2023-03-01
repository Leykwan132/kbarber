import Appointment from "@/components/Appointment";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";

type Props = {};

const gallery = (props: Props) => {
  return (
    <div className="relative z-20 flex flex-col justify-center py-4 bg-black px-7 ">
      <Header />
      <div className="mt-4 font-mono ">Gallery</div>{" "}
      <div className="flex flex-col gap-6 my-5 mb-6 ">
        <Appointment />
        <Card content="quote" />
        <Card content="count" />
      </div>
      <div className="fixed z-50 bottom-8 ">
        <Navbar />
      </div>
      <div className="fixed z-40  left-3 w-[360px] h-[100px] bottom-6 rounded-2xl bg-black" />
    </div>
  );
};

export default gallery;
