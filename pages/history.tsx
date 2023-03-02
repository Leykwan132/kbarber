import MiniCard, { MiniCardProps } from "@/components/MiniCard";
import React from "react";

type Props = {};
const sampleData: MiniCardProps[] = [
  {
    client: "Aidiel",
    date: "Feb 23",
    time: "30 min 20 sec",
    after_side:
      "https://m.media-amazon.com/images/M/MV5BZGM5MWM1MmUtZDM0ZC00Y2EwLWEwMzQtM2QwZDU4Yjc5ODJmXkEyXkFqcGdeQXVyMjgzNDQyMjE@._V1_.jpg",
    after_front:
      "https://images.squarespace-cdn.com/content/v1/5bd1d89365a707203856dda2/1572124949771-2WU7A0AUN7W0F1I9UKC1/IMG_2007.jpeg?format=2500w",
  },
  {
    client: "Daniel",
    date: "Feb 30",
    time: "25 min 28 sec",
    after_side:
      "https://m.media-amazon.com/images/M/MV5BZGM5MWM1MmUtZDM0ZC00Y2EwLWEwMzQtM2QwZDU4Yjc5ODJmXkEyXkFqcGdeQXVyMjgzNDQyMjE@._V1_.jpg",
    after_front:
      "https://www.beyoung.in/blog/wp-content/uploads/2020/04/general-min-1-853x1024.jpg",
  },
  {
    client: "Dinesh",
    date: "Feb 22",
    time: "26 min 20 sec",
    after_side:
      "https://m.media-amazon.com/images/M/MV5BZGM5MWM1MmUtZDM0ZC00Y2EwLWEwMzQtM2QwZDU4Yjc5ODJmXkEyXkFqcGdeQXVyMjgzNDQyMjE@._V1_.jpg",
    after_front:
      "https://www.beyoung.in/blog/wp-content/uploads/2020/04/general-min-1-853x1024.jpg",
  },
  {
    client: "Dinesh",
    date: "Feb 22",
    time: "26 min 20 sec",
    after_side:
      "https://m.media-amazon.com/images/M/MV5BZGM5MWM1MmUtZDM0ZC00Y2EwLWEwMzQtM2QwZDU4Yjc5ODJmXkEyXkFqcGdeQXVyMjgzNDQyMjE@._V1_.jpg",
    after_front:
      "https://www.beyoung.in/blog/wp-content/uploads/2020/04/general-min-1-853x1024.jpg",
  },
  {
    client: "Dinesh",
    date: "Feb 22",
    time: "26 min 20 sec",
    after_side:
      "https://m.media-amazon.com/images/M/MV5BZGM5MWM1MmUtZDM0ZC00Y2EwLWEwMzQtM2QwZDU4Yjc5ODJmXkEyXkFqcGdeQXVyMjgzNDQyMjE@._V1_.jpg",
    after_front:
      "https://www.beyoung.in/blog/wp-content/uploads/2020/04/general-min-1-853x1024.jpg",
  },
  {
    client: "Dinesh",
    date: "Feb 22",
    time: "26 min 20 sec",
    after_side:
      "https://m.media-amazon.com/images/M/MV5BZGM5MWM1MmUtZDM0ZC00Y2EwLWEwMzQtM2QwZDU4Yjc5ODJmXkEyXkFqcGdeQXVyMjgzNDQyMjE@._V1_.jpg",
    after_front:
      "https://www.beyoung.in/blog/wp-content/uploads/2020/04/general-min-1-853x1024.jpg",
  },
  {
    client: "Dinesh",
    date: "Feb 22",
    time: "26 min 20 sec",
    after_side:
      "https://m.media-amazon.com/images/M/MV5BZGM5MWM1MmUtZDM0ZC00Y2EwLWEwMzQtM2QwZDU4Yjc5ODJmXkEyXkFqcGdeQXVyMjgzNDQyMjE@._V1_.jpg",
    after_front:
      "https://www.beyoung.in/blog/wp-content/uploads/2020/04/general-min-1-853x1024.jpg",
  },
  {
    client: "Dinesh",
    date: "Feb 22",
    time: "26 min 20 sec",
    after_side:
      "https://m.media-amazon.com/images/M/MV5BZGM5MWM1MmUtZDM0ZC00Y2EwLWEwMzQtM2QwZDU4Yjc5ODJmXkEyXkFqcGdeQXVyMjgzNDQyMjE@._V1_.jpg",
    after_front:
      "https://www.beyoung.in/blog/wp-content/uploads/2020/04/general-min-1-853x1024.jpg",
  },
  {
    client: "Dinesh",
    date: "Feb 22",
    time: "26 min 20 sec",
    after_side:
      "https://m.media-amazon.com/images/M/MV5BZGM5MWM1MmUtZDM0ZC00Y2EwLWEwMzQtM2QwZDU4Yjc5ODJmXkEyXkFqcGdeQXVyMjgzNDQyMjE@._V1_.jpg",
    after_front:
      "https://www.beyoung.in/blog/wp-content/uploads/2020/04/general-min-1-853x1024.jpg",
  },
];
const history = (props: Props) => {
  return (
    <div className="relative flex flex-col justify-center bg-black px-7 ">
      <div className="z-20 overflow-y-scroll max-h-[660px] scrollbar-hide">
        <div className="mt-4 font-mono text-white">Gallery</div>{" "}
        <div className="flex flex-col gap-4 mt-2">
          {sampleData.map((data, index) => (
            <MiniCard key={index} data={data} type="history" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default history;
