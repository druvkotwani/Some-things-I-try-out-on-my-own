import React from "react";
import { testimonialData } from "@/utils/testimonialData";
import Image from "next/image";

interface TestimonialData {
  name: string;
  username?: string;
  about?: string;
  icon: string;
  text: string;
  date?: string;
  platform?: string;
}

const Testimonial: React.FC = () => {
  const items = testimonialData.map(
    (testimonial: TestimonialData, index: number) => (
      <div
        key={testimonial.name}
        className="p-4 border shadow-[0_1px_2px_0_rgb(0,0,0,0.07)] border-clr-border rounded-[0.75rem] w-[250px] sm:w-[300px] scroll-item "
      >
        <div key={index} className="flex flex-col gap-[0.5rem]">
          {/* Image + name */}
          <div className="flex justify-between  ">
            <div className="flex  gap-2">
              <Image
                src={testimonial.icon}
                alt={testimonial.name}
                width={42}
                height={42}
                className="rounded-full object-contain"
              />
              <div className="flex flex-col mt-1 ">
                <h3 className="text-[#374151] font-medium text-base leading-[20px]  ">
                  {testimonial.name}
                </h3>
                <p className="text-clr-text-lt text-sm leading-[18px] ">
                  {testimonial?.username}
                </p>
                <p className="text-clr-text-lt text-sm leading-[18px]">
                  {testimonial?.about}
                </p>
              </div>
            </div>

            {testimonial.platform && (
              <Image
                src={`/Images/${testimonial.platform}.png`}
                className="object-contain mb-2 rounded-full   "
                alt={testimonial.platform}
                width={42}
                height={42}
              />
            )}
          </div>

          {/* Stars */}
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i}>{star()}</div>
            ))}
          </div>

          {/* Text */}
          <p className="text-clr-text-lt text-sm leading-[18px]">
            {testimonial.text}
          </p>

          {/* Date */}
          <p className="opacity-[0.7] text-sm">{testimonial.date}</p>
        </div>
      </div>
    )
  );
  return (
    <div className="scroll-container  gap-4 flex flex-col">
      {items}
      {items}
    </div>
  );
};

export default Testimonial;

function star() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.87831 1.68328C9.35727 0.209181 11.4427 0.209184 11.9217 1.68328L13.2738 5.84458C13.488 6.50382 14.1023 6.95016 14.7955 6.95016H19.1709C20.7209 6.95016 21.3653 8.93354 20.1114 9.84458L16.5716 12.4164C16.0108 12.8238 15.7761 13.546 15.9903 14.2053L17.3424 18.3666C17.8214 19.8407 16.1342 21.0665 14.8803 20.1554L11.3405 17.5836C10.7797 17.1762 10.0203 17.1762 9.45954 17.5836L5.91973 20.1554C4.66579 21.0665 2.97862 19.8407 3.45758 18.3666L4.80967 14.2053C5.02387 13.546 4.78922 12.8238 4.22844 12.4164L0.688621 9.84458C-0.565321 8.93354 0.0791221 6.95016 1.62908 6.95016H6.00453C6.69769 6.95016 7.31202 6.50382 7.52622 5.84458L8.87831 1.68328Z"
        fill="url(#paint0_linear_564_79)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_564_79"
          x1="10.4"
          y1="-3"
          x2="10.4"
          y2="25.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFCE50" />
          <stop offset="1" stopColor="#FE9D0B" />
        </linearGradient>
      </defs>
    </svg>
  );
}
