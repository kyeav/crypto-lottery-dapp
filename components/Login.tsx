import Image from "next/image";
import { ConnectWallet, useAddress, useDisconnect } from "@thirdweb-dev/react";

function Login() {
  return (
    <div className="bg-[#091818] min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center mb-10">
        <Image
          src="https://avatars.githubusercontent.com/u/106858714?v=4"
          className="rounded-full h-56 w-56 mb-10"
          height={224}
          width={224}
          alt="logo"
        />
        <h1 className="text-6xl text-white font-bold">CRYPTO DRAW</h1>
        <h2 className="text-white">Get started by connecting your Crypto Wallet</h2>

        {/* <button className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold">Login with MetaMask</button> */}
        <ConnectWallet className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold" />
      </div>
    </div>
  );
}

export default Login;
