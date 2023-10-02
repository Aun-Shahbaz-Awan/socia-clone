import React from "react";
import socia1 from "../assets/images/socia1.png";
import Socia2 from "../assets/images/socia2.png";
import Socia3 from "../assets/images/socia3.png";

const Socia = () => {
  return (
    <div className="bg-[#2C225A] font-poppins py-24">
      <div className="flex md:flex-row flex-col text-center md:text-left w-full  justify-center items-center px-4 md:px-32">
        <div className=" w-full md:w-1/2 max-w-lg">
          <img src={socia1} alt="socia1" />
        </div>
        <div className="w-full flex flex-col items-center md:items-start space-y-6 py-24">
          <h1 className="text-white font-medium text-3xl">What is SOCIA?</h1>
          <p className="text-white text-sm">
            Experience true ownership and control over your social media
            presence.
          </p>
          <div className="flex md:flex-row flex-col items-center justify-center gap-4">
            <img src={Socia3} alt="Socia2" />
            <div className="flex flex-col justify-center  items-center md:items-start md:max-w-md">
              <h1 className="font-bold text-xl text-white ">
                Seamless Social Media Integration
              </h1>
              <p className="text-sm text-white">
                Socia allows users to seamlessly link their existing social
                media accounts, such as Facebook, Twitter, and Instagram, to
                their SOCIA profile.
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
            <img src={Socia2} alt="socia3" />
            <div className="flex flex-col justify-center items-center md:items-start md:max-w-md">
              <h1 className="font-bold text-xl text-white ">
                Rewards System for Active Participation
              </h1>
              <p className="text-sm text-white">
                Our platform implements a rewards system using SOCIA tokens.
                Users are rewarded for likes, comments, and shares, encouraging
                active participation and engagement within the community.
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-center gap-4 items-center ">
            <img src={Socia3} alt="socia2" />
            <div className="flex flex-col justify-center items-center md:items-start md:max-w-md">
              <h1 className="font-bold text-xl text-white">
                Marketplace for Peer-to-Peer Transactions
              </h1>
              <p className="text-sm text-white">
                The platform includes a marketplace where users can buy and sell
                products and services using SOCIA tokens. This peer-to-peer
                transaction feature further enhances the utility of the tokens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socia;
