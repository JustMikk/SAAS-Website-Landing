"use client";
import Link from "next/link";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import messageImage from "../assets/images/message.png";
import cursorImage from "../assets/images/cursor.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative overflow-clip bg-gradient-to-b from-black via-indigo-900 to-purple-500 text-white py-[72px] sm:py-24">
      <div className="absolute h-[375px] w-[750px] sm:h-[768px] sm:w-[1536px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB_)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="inline-flex gap-3 py-1 px-2 border border-white/30 border-dotted rounded-lg"
          >
            <span className="bg-gradient-to-r from-red-500 via-yellow-300 to-blue-500 text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex gap-1 items-center">
              <span>Read more</span>
              <ArrowIcon />
            </span>
          </Link>
        </div>
        <div className="flex justify-center  mt-8">
          <div className="inline-flex relative">
            <h1 className="text-6xl sm:text-9xl font-bold tracking-tighter leading-tight inline-flex text-center">
              One Task <br />
              at a time
            </h1>
            <motion.div
              className="absolute right-[476px] top-[108px]"
              drag
              dragSnapToOrigin
            >
              <Image
                src={cursorImage}
                alt=""
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute left-[498px] top-[56px]"
              drag
              dragSnapToOrigin
            >
              <Image
                src={messageImage}
                alt=""
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-xl text-center mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
