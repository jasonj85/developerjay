// tell nextjs to render on the client side
"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { reviewsData, starIcons, arrowIcons } from "@/assets";
import { useState, useRef } from "react";

const Skills = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(false);
  const prevIndex = useRef(0);
  const slides = useRef([]);

  return (
    <div className="my-20 px-96">
      <Heading text={"Reviews"} />
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-[800px] lg:w-[600px] md:w-[95%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px] sm:h-[600px] flex items-center justify-center">
          {reviewsData.map((review, i) => (
            <div
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-yellow-500 bg-zinc-50 p-14 lg:p-5 rounded-xl"
            >
              <Image
                src={review.image}
                alt="Reviews Image"
                width={130}
                height={130}
                className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
              />
              <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600">
                {review.name}
              </h1>
              <p className="text-lg  md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2">
                {review.comment}
              </p>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <span className="text-lg font-light text-yellow-600 mr-3">
                  {review.stars
                    .reduce((sum, item) => {
                      return (sum += item);
                    }, 0)
                    .toFixed(1)}
                </span>
                <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                  {review.stars.map((star, i) => (
                    <span key={i}>
                      {star === 1 ? starIcons[0] : star === 0.5 ? starIcons[1] : null}
                    </span>
                  ))}
                  <span>Stars</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5">
          <button>{arrowIcons[0]}</button>
          <button>{arrowIcons[1]}</button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
