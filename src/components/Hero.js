import React from "react";
// import { BsCheckLg } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

function Hero() {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center text-center md:items-start md:justify-start md:text-left py-8 mt-4 md:mt-24">
      <div className="font-semibold text-lg text-neonblue">
        Revolutionize Your Social Experience
      </div>
      <div className="text-2xl md:text-4xl text-white">
        Socia’s Token Decentralized
      </div>
      <div className="font-bold text-neonblue text-2xl md:text-4xl">
        Social Media Platform
      </div>
      <p className="max-w-xl text-white md:text-lg">
        Our advanced technology ensures fast and seamless social media
        experience for all our users. With SOCIA's token Decentralized Social
        Media Platform, you can connect with your account to our mobile app.
      </p>
      <ul className="text-white flex flex-col justify-center items-center md:justify-start md:items-start space-y-4">
        <li className="flex items-center  gap-2">
          <FaCheck color={"#00ffff"} />
          <h1>Convert your social likes to Socia Tokens</h1>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck color={"#00ffff"} />
          <h1>Social Media Integration</h1>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck color={"#00ffff"} />
          <h1>Rewards System</h1>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck color={"#00ffff"} />
          <h1>Virtual Reality Experiences</h1>
        </li>
      </ul>
      <button className="text-primary max-w-fit rounded-full px-8 py-3 text-sm bg-neonblue">
        Join Presale
      </button>
    </div>
  );
}

export default Hero;
