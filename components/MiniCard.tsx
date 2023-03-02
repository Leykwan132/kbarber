import Image from "next/image";
import React from "react";

export interface MiniCardProps {
  date: string;
  time: string;
  client: string;
  after_side?: string;
  after_front?: string;
}

type InputType = "gallery" | "history";
type Props = {
  type: InputType;
  data: MiniCardProps;
};

const MiniCard = ({ type, data }: Props) => {
  if (type === "history") {
    return (
      <div className="flex justify-between p-4 font-mono text-white bg-gray-800 rounded-xl">
        <div className="flex flex-col items-start justify-start gap-3 text-sm">
          <div>{data?.date}</div>
          <div>Time Taken: {data?.time}</div>
        </div>
        <div className="relative overflow-hidden bg-white border-gray-300 rounded-full w-14 h-14 ">
          <Image
            className="object-contain"
            // @ts-ignore
            src={data?.after_front}
            fill
            alt="picture"
          />
        </div>
      </div>
    );
  }
  return <div>MiniCard</div>;
};

export default MiniCard;
