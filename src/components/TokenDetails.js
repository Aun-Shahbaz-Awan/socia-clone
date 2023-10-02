import React from "react";
import scderails from "../assets/images/scdetails.png";

const TokenDetails = () => {
  return (
    <div className="font-poppins bg-primary text-white py-20">
      <div className="flex flex-col justify-center items-center">
        <div className="text-[#00D4FF] font-bold mb-3">SOCIA Details</div>
        <div className="text-3xl font-medium mb-1">SOCIA Token Details</div>
        <div className="text-center mb-12">
          Our platform ensures data privacy, censorship resistance, and user
          empowerment
        </div>
        <div className="flex md:flex-row flex-col gap-8 py-6">
          <div className="w-full md:w-2/5 flex flex-col space-y-6 text-white bg-[#33295F] border px-4 py-8 rounded-lg border-[#40376D]">
            <div className="flex flex-col justify-start items-start bg-[#40376D] p-4 rounded-lg">
              <h1 className="text-xl font-semibold">Start</h1>
              <p className="text-white">Aug 8, 2024 (9:00AM GMT)</p>
            </div>
            <div className="flex flex-col justify-start items-start bg-[#40376D] p-4 rounded-lg">
              <h1 className="text-xl font-semibold">End</h1>
              <p className="text-white">Feb 10, 2024 (9:00AM GMT)</p>
            </div>
            <div className="flex flex-col justify-start items-start bg-[#40376D] p-4 rounded-lg">
              <h1 className="text-xl font-semibold">
                Number Of Tokens For Sale
              </h1>
              <p className="text-white">1.000.000 Tokens</p>
            </div>
            <div className="flex flex-col justify-start items-start bg-[#40376D] p-4 rounded-lg">
              <h1 className="text-xl font-semibold">Tokens Exchange Rate</h1>
              <p className="text-white">1 ETH = 650 ICC, 1 BTC = 1940 ICC</p>
            </div>
            <div className="flex flex-col justify-start items-start bg-[#40376D] p-4 rounded-lg">
              <h1 className="text-xl font-semibold">Minimal Transaction</h1>
              <p className="text-white">10 Tokens / Transaction</p>
            </div>
            <div className="flex flex-col justify-start items-start bg-[#40376D] p-4 rounded-lg">
              <h1 className="text-xl font-semibold">Acceptable Curencies</h1>
              <p className="text-white">ETH, BTC, LTC</p>
            </div>
          </div>
          <div className="w-full md:w-3/5 flex items-center ">
            <img src={scderails} alt="scderails" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDetails;
