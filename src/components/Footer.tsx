import React from "react";
import XIcon from "../assets/icons/x.svg";
import TiktokIcon from "../assets/icons/tiktok.svg";
import InstaIcon from "../assets/icons/insta.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
          <div className="text-center">
            © 2024 Your Company, Inc. All rights reserved
          </div>
          <ul className="flex justify-center gap-3">
            <li>
              <InstaIcon />
            </li>
            <li>
              <XIcon />
            </li>
            <li>
              <TiktokIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
