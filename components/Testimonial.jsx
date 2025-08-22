"use client";

//import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper module
import { Autoplay } from "swiper/modules";
//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from "react-icons/im";

// data
const testimonials = [
  {
    message:
      "Working with Kalle is effortless — he's friendly, dedicated, reliable, and always brings a sense of warmth and humor to the team.",
    name: "Lisa, coach and coordinator at Iris Hadar",
  },
  {
    message:
      "Experience in problem-solving under pressure, teamwork, and clear communication  – whether it's with students, colleagues, or users.",
    name: "Kalle",
  },
  {
    message:
      "I am structured, curious, and stubborn enough to debug until it works (with coffee &/ tea as my faithful companion).",
    name: "Kalle",
  },
  {
    message:
      "Looking for a practical developer with a heart for code and an eye for design? Then we can create something fun together!",
    name: "Kalle",
  },
  {
    message:
      "Looking for a curious junior with finesse and speed? I'm ready to build something really great with you.",
    name: "Kalle",
  },
];

const Testimonial = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={false}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg"
    >
      {testimonials.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex px-8 py-6 gap-8">
              <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
              <div className="flex flex-col gap-2">
                <p>{person.message}</p>
                <p className="self-end text-accent font-semibold">
                  {person.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimonial;
