import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";

function Timeline() {
  return (
    <section className="bg-primary text-gray-100 font-poppins border-[rgb(66,50,137)] border-y">
      <div className="container px-0 md:px-24 py-12 mx-auto">
        <div className="grid gap-4 md:mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-neonblue">
              <h3 className="text-3xl font-semibold">Roadmap</h3>
              <span className="text-sm font-bold tracki uppercase text-gray-400">
                Token Documentations
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-neonblue">
                <h3 className="text-xl font-semibold tracki">Development</h3>
                <time className="text-xs tracki uppercase text-gray-400">
                  2024 Q1
                </time>
                <div className="mt-3 flex flex-wrap gap-5">
                  <div className="flex items-center">
                    <AiFillSetting className="inline my-auto mr-1.5 text-neonblue" />
                    Contract Deployment
                  </div>
                  <div className="flex items-center">
                    <AiFillSetting className="inline my-auto mr-1.5 text-neonblue" />
                    Website & Telegram Launch
                  </div>
                  <div className="flex items-center">
                    <AiFillSetting className="inline my-auto mr-1.5 text-neonblue" />
                    Community Enhancement
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-neonblue">
                <h3 className="text-xl font-semibold tracki">Development</h3>
                <time className="text-xs tracki uppercase text-gray-400">
                  2024 Q2
                </time>
                <div className="mt-3 flex flex-wrap gap-5">
                  <div className="flex items-center">
                    <FaDatabase className="inline my-auto mr-1.5 text-neonblue" />
                    Social Media promotions
                  </div>
                  <div className="flex items-center">
                    <AiFillSetting className="inline my-auto mr-1.5 text-neonblue" />
                    Community Building
                  </div>
                  <div className="flex items-center">
                    <AiFillSetting className="inline my-auto mr-1.5 text-neonblue" />
                    White paper conpletion
                  </div>
                </div>
              </div>
              {/* Q2 */}
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-neonblue">
                <h3 className="text-xl font-semibold tracki">Listing</h3>
                <time className="text-xs tracki uppercase text-gray-400">
                  2024 Q2
                </time>
                <div className="mt-3 flex flex-wrap gap-5">
                  <div className="flex items-center">
                    <FaDatabase className="inline my-auto mr-1.5 text-neonblue" />
                    Pancake Swap Listing
                  </div>
                  <div className="flex items-center">
                    <AiFillSetting className="inline my-auto mr-1.5 text-neonblue" />
                    Dextools Update
                  </div>
                  <div className="flex items-center">
                    <AiFillSetting className="inline my-auto mr-1.5 text-neonblue" />
                    Twitter Influencer Partnerships
                  </div>
                  <div className="flex items-center">
                    <AiFillSetting className="inline my-auto mr-1.5 text-neonblue" />
                    Press Release & Article Blitz
                  </div>
                </div>
              </div>
              {/* Q2 */}
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-neonblue">
                <h3 className="text-xl font-semibold tracki">Pre-Sale</h3>
                <time className="text-xs tracki uppercase text-gray-400">
                  2024 Q2
                </time>
                <div className="mt-3 flex flex-wrap gap-5">
                  <div className="flex items-center">
                    <FaDatabase className="inline my-auto mr-1.5 text-neonblue" />
                    Presale Fair Launch
                  </div>
                  <div className="flex items-center">
                    <FaDatabase className="inline my-auto mr-1.5 text-neonblue" />
                    Biggest Buy Contests
                  </div>
                </div>
              </div>
              {/* Q3 */}
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-neonblue">
                <h3 className="text-xl font-semibold tracki">App Beta Test</h3>
                <time className="text-xs tracki uppercase text-gray-400">
                  2024 Q3
                </time>
                <div className="mt-3 flex flex-wrap gap-5">
                  <div className="flex items-center">
                    <FaDatabase className="inline my-auto mr-1.5 text-neonblue" />
                    Private closed beta
                  </div>
                  <div className="flex items-center">
                    <AiFillSetting className="inline my-auto mr-1.5 text-neonblue" />
                    Open beta launched to public and improvement the app
                  </div>
                </div>
              </div>
              {/* Q4 */}
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-neonblue">
                <h3 className="text-xl font-semibold tracki">Token Sale</h3>
                <time className="text-xs tracki uppercase text-gray-400">
                  2024 Q4
                </time>
                <div className="mt-3 flex flex-wrap gap-5">
                  <div className="flex items-center">
                    <FaDatabase className="inline my-auto mr-1.5 text-neonblue" />
                    Biggest Buy Contests
                  </div>
                  <div className="flex items-center">
                    <AiFillSetting className="inline my-auto mr-1.5 text-neonblue" />
                    Trending List & Ad Buys
                  </div>
                  <div className="flex items-center">
                    <AiFillSetting className="inline my-auto mr-1.5 text-neonblue" />
                    Banner Ads
                  </div>
                </div>
              </div>
              {/* Q4 */}
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-neonblue">
                <h3 className="text-xl font-semibold tracki">Alpha Test</h3>
                <time className="text-xs tracki uppercase text-gray-400">
                  2024 Q4
                </time>
                <div className="mt-3 flex flex-wrap gap-5">
                  <div className="flex items-center">
                    <FaDatabase className="inline my-auto mr-1.5 text-neonblue" />
                    Coin gecko & Coin market cap Listings{" "}
                  </div>
                  <div className="flex items-center">
                    <AiFillSetting className="inline my-auto mr-1.5 text-neonblue" />
                    TG Caller Partnerships & AMAs
                  </div>
                  <div className="flex items-center">
                    <AiFillSetting className="inline my-auto mr-1.5 text-neonblue" />
                    Viral Twitter Contest & Twiter Spaces Event
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
