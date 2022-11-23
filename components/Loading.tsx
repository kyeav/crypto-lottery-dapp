import Image from "next/image";
import React from "react";
import PropogateLoader from "react-spinners/PropagateLoader";

function Loading() {
  return (
    <div className="bg-[#091b18] h-screen flex flex-col items-center justify-center">
      <div className="flex items-center space-x-2 mb-10">
        <Image
          src="https://avatars.githubusercontent.com/u/106858714?v=4"
          className="rounded-full h-20 w-20"
          height={80}
          width={80}
          alt="profile pic"
        />
        <h1 className="text-lg text-white font-bold">
          Loading CRYPTO DRAW
        </h1>
      </div>
      <PropogateLoader color="white" size={30} />
    </div>
  );
}

export default Loading;
