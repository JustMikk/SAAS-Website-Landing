import React from "react";
import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container max-w-xl relative">
        <Image
          src={emojiStarImage}
          alt=""
          className="absolute -top-[120px] right-[calc(100%+24px)]"
        />
        <Image
          src={helixImage}
          alt=""
          className="absolute top-6 left-[calc(100%+36px)] "
        />
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Get instant access
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl mt-5 text-white/70 text-center">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.{" "}
          </p>
        </div>
        <form className="mt-10 flex flex-col sm:flex-row gap-2.5 mx-auto max-w-sm">
          <input
            className="h-12 sm:flex-1 px-5 font-medium rounded-lg bg-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#5D2CA8] focus:ring-opacity-50"
            type="email"
            placeholder="Your@email.com"
          />
          <button
            className="bg-white text-black h-12 px-5 rounded-lg"
            type="submit"
          >
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
