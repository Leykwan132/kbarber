import React from "react";

type Props = {
  content: String;
};

const Card = ({ content }: Props) => {
  return (
    <div
      className={`${
        content == "count" ? "bg-white text-black" : "bg-slate-700 text-white"
      } h-40 p-5 rounded-2xl flex flex-col gap-4 items-center justify-center`}
    >
      {content == "count" ? (
        <>
          <div className="font-mono text-xl font-bold">87 Haircut given</div>
          <div className="font-mono text-xs text-center">
            started with the intention of affordable haircut and good-looking
            sideburn.
          </div>
        </>
      ) : (
        <>
          <div className="font-mono text-xl font-bold">Quote of the day</div>
          <div className="font-mono text-xs text-center">
            In the world that is moving so quickly, the biggest risk you can
            take is not taking any risk.
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
