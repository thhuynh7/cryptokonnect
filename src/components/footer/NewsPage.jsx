import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid';

import { CheckIcon } from '@heroicons/react/outline';

import supportImg from '../../assets/support.jpg';

const NewsPage = () => {
  return (
    <>
      <div name="support" className="w-full mt-0">
        <div className="w-full h-screen bg-gray-900/90 absolute">
          <img className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="/" />
        </div>

        <div className="max-w-[1240px] mx-auto text-white relative">
          <div className="px-4 py-12">
            <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">News</h2>
            <h3 className="text-5xl font-bold py-6 text-center">Latest Crypto News</h3>
            <p className="pt-4 pb-0 text-2xl text-slate-300">As the industry faces liquidity struggles, we thought it important to provide clarity around these challenges and reiterate how Crypto Konnect’s business is different.</p>
          </div>





          <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                <h3 className="font-bold text-2xl my-6">The crypto market downturn explained</h3>
                <p className="text-gray-600 text-xl">In this edition of Around The Block, we take a look at the overall macro downturn with an eye towards the crypto markets. Central Banks and governments responded...</p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  Read More <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>






            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                <h3 className="font-bold text-2xl my-6">Crypto’s emergence as a geopolitical force</h3>
                <p className="text-gray-600 text-xl">Examining crypto’s usage in Ukraine, sanctions, and the Biden Executive Order. There’s a gravitational shift taking place within our industry.</p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  Read More <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>





            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                <h3 className="font-bold text-2xl my-6">Ventures’ Takeaways from ETH Denver</h3>
                <p className="text-gray-600 text-xl">The last time ETH Denver was held in person, ETH’s market cap stood at $30B, and few people outside of the 6,000 attendees knew what an NFT was...</p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  Read More <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>




            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                <h3 className="font-bold text-2xl my-6">A simple guide to the Web3 stack</h3>
                <p className="text-gray-600 text-xl">Web3 is the latest buzzword to see an uptick in interest in recent months — What does it actually mean?</p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  Read More <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                <h3 className="font-bold text-2xl my-6">DAOs: Social networks that can rewire the world</h3>
                <p className="text-gray-600 text-xl">What the internet did for communication, DAOs can do for capital. The internet and social networks have made it easier...</p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  Read More <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                <h3 className="font-bold text-2xl my-6">Scaling Ethereum & crypto for a billion users</h3>
                <p className="text-gray-600 text-xl">As of late 2022, Ethereum has grown to support thousands of applications from decentralized finance, NFTs, gaming and more.</p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  Read More <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div name="platforms" className="w-full my-24">
        <div className="max-w-[1240px] mx-auto px-2">
          {/* <h2 className="text-5xl font-bold text-center">All-In-One Platform</h2> */}
          <p className="text-2xl py-8 text-gray-500 text-center">This page details our approach to transparency, risk management, and consumer protection.</p>

        </div>
      </div>
    </>
  );
};

export default NewsPage;
