import React from "react";
import wp1 from "../assets/images/wp1.png.png";
import wp2 from "../assets/images/wp2.png.png";
import wp3 from "../assets/images/wp3.png";
import wp4 from "../assets/images/wp4.png";
import wp5 from "../assets/images/wp5.png";
import About1 from "../assets/images/About1.png";

const WhitePaper = () => {
  return (
    <div>
      <div className="bg-[#2C225A] font-poppins pb-24">
        <div className="flex flex-col justify-center items-center px-4 md:px-24">
          <div className="text-[#00D5FF] font-medium mt-20">
            Discover Our WhitePaper
          </div>
          <div className="text-3xl font-medium text-white mb-2 mt-4">
            Discover Our WhitePaper
          </div>
          <div className="text-white/50 text-base font-medium mb-16">
            Experience true ownership and control over your social media
            presence.
          </div>
          <div className="flex md:flex-row flex-col items-center justify-center gap-8 ">
            {/* Card #1 */}
            <div className="flex flex-col max-w-lg bg-white space-y-6 py-8 px-6 rounded-2xl shadow-2xl">
              <img src={wp1} alt="wp" className="w-32" />
              <h1 className="text-3xl font-semibold">
                Virtual Reality Experiences
              </h1>
              <p className="font-medium  text-[#7a7a7a]">
                Immerse yourself in interactive and immersive virtual reality
                content. Create, share, and monetize your own virtual reality
                experiences.
              </p>
              <button className="px-6 py-3 text-sm bg-neonblue rounded-full w-fit ">
                Learn More
              </button>
            </div>
            {/* Card #2 */}
            <div className="flex flex-col max-w-lg bg-white space-y-6 py-7 px-6 rounded-2xl shadow-2xl">
              <img src={wp2} alt="wp2" className="w-32" />
              <h1 className="text-3xl font-semibold">Whitepaper</h1>
              <p className="font-medium  text-[#7a7a7a]">
                This whitepaper presents the Socia's Token Decentralized Social
                Media Platform, a revolutionary social media ecosystem built on
                blockchain technology.
              </p>
              <button
                onClick={() =>
                  window.open("https://socia.gitbook.io/whitepaper/", "_blank")
                }
                className="px-6 py-3 text-sm bg-neonblue rounded-full w-fit "
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* // Points */}
      {/* <div className="h-24 bg-[#2c225a] z-10 " />
      <div className="h-24 bg-[#2c225a] transform -rotate-3 -mt-12 z-20" />
      <div className="h-24 bg- -z-10 -mt-12" /> */}
      <div className="grid grid-cols-1 md:text-left text-center md:grid-cols-2 gap-8 bg-white p-4 rounded-lg my-20">
        <div className="flex md:flex-row flex-col gap-4 justify-center items-center md:items-start">
          <div>
            {" "}
            <img src={About1} alt="about" />{" "}
          </div>
          <div className="flex flex-col justify-center items-start max-w-md">
            <p className="font-medium ">
              Pre-Minting of Tokens for Controlled Supply
            </p>
            <p className="text-sm ">
              To control the token price and avoid manipulation, we propose
              pre-minting 4 billion SOCIA tokens. This approach allows us to
              create a reserve to stabilize the token economy.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 justify-center items-center md:items-start">
          <div>
            {" "}
            <img src={wp4} alt="ab3" />{" "}
          </div>
          <div className="flex flex-col justify-center items-start max-w-md">
            <p className="font-medium ">
              Locking and Vesting Mechanism to Prevent Price Manipulation
            </p>
            <p className="text-sm">
              We implement a locking and vesting mechanism for influential
              accounts to prevent immediate token cashing. This ensures a fair
              token distribution and a more stable ecosystem.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 justify-center items-center md:items-start ">
          <div>
            {" "}
            <img src={wp3} alt="wp3" />{" "}
          </div>
          <div className="flex flex-col justify-center items-start max-w-md ">
            <p className="font-medium ">
              Liquidity Pool for Social Media Influencers
            </p>
            <p className="text-sm">
              To incentivize social media influencers, we create a liquidity
              pool with 50% of the total token supply. Influencers are rewarded
              based on their engagement levels and content quality
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 justify-center items-center md:items-start">
          <div>
            {" "}
            <img src={wp5} alt="wp4" />{" "}
          </div>
          <div className="flex flex-col justify-center items-start max-w-md">
            <p className="font-medium ">
              Dynamic Halving Schedule for Sustainable Growth
            </p>
            <p className="text-sm">
              Instead of a flat rate issuance, we adopt a dynamic halving
              schedule for the remaining 4 billion tokens. This strategy strikes
              a balance between early adopter incentives and sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitePaper;
