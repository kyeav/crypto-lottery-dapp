import Image from "next/image";
import React from "react";
import NavBtn from "./NavBtn";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";

function Header() {
  const address = useAddress();
  const disconnect = useDisconnect()
  
  return (
    <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
      <div className="flex items-center space-x-2">
        <Image
          src="https://avatars.githubusercontent.com/u/106858714?v=4"
          alt="profile pic"
          width={80}
          height={80}
          className="rounded-full h-14 w-14"
        />
        <div>
          <h1 className="text-lg font-bold text-white">CRYPTO DRAW</h1>
          <p className="text-xs text-emerald-500 truncate">User:  {address?.substring(0,5)}...{address?.substring(address.length, address.length - 5)}</p>
        </div>
      </div>

      <div className="md:col-span-3 hidden md:flex items-center justify-center rounded-md">
        <div className="bg-[#0a1f1c] p-4 space-x-2 rounded">
          <NavBtn isActive title="Buy Tickets" />
          <NavBtn onClick={disconnect} title="Logout" />
        </div>
      </div>

      <div className="flex flex-col ml-auto text-right">
        <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer" />
        <span className="md:hidden">
          <NavBtn onClick={disconnect} title="Logout" />
        </span>
      </div>
    </header>
  );
}

export default Header;
