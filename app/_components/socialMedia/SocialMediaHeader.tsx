import Image from "next/image";
import React from "react";

import test from "@/../public/images/jonior/social-media-dashboard/icon-down.svg";

function SocialMediaHeader() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-white font-bold text-2xl">
          Social Media Dashboard
        </h2>
        <div className="flex gap-4">
          <span>Dark Mode</span>
          <Image width={32} height={32} src={test} alt="dark mode pic" />
        </div>
      </div>
      <p className="text-primary-400 text-sm mb-10">
        Total Followers: <span>23,004</span>
      </p>
    </>
  );
}

export default SocialMediaHeader;
