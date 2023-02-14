import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid';

import { CheckIcon } from '@heroicons/react/outline';

import supportImg from '../../assets/event.jpg';

import SplashHero from '../splash/SplashHero';

const SupportPage = () => {
  return (
    <>
      <div name="support" className="w-full mt-0">
        <div className="w-full h-[700px] bg-gray-900/90 absolute">
          <img className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="/" />
        </div>

        <div className="max-w-[1240px] mx-auto text-white relative">
          <div className="px-4 py-12">
            <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">Support</h2>
            <h3 className="text-5xl font-bold py-6 text-center">Customer Service</h3>
            <p className="py-4 text-3xl text-slate-300">
              Review our{' '}
              <Link className="no-underline hover:no-underline" to="/">
                Splash page
              </Link>{' '}
              for quick information. If you need more help, choose your product and connect with our Support team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                <h3 className="font-bold text-2xl my-6">Chat support</h3>
                <p className="text-gray-600 text-xl">Troubleshoot with our virtual assistant for quick solutions or chat with a customer representative.</p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                <h3 className="font-bold text-2xl my-6">Suspicious activity?</h3>
                <p className="text-gray-600 text-xl">If you suspect your account has been compromised, please call Support to lock your account.</p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                <h3 className="font-bold text-2xl my-6">Live phone support</h3>
                <p className="text-gray-600 text-xl">Before reaching a live agent, you may be prompted to verify yourself for security purposes.</p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div name="platforms" className="w-full my-20">
        <div className="max-w-[1240px] mx-auto px-2">
          <h2 className="text-4xl font-bold text-center">Book a Demo</h2>
          {/* <p className="text-2xl py-8 text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi nostrum tempore.</p> */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-12">
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Live Tracking</h3>
                <p className="text-lg pt-2 pb-4">Track and Receive Alerts on hundreds of cryptos!</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Transaction Demo</h3>
                <p className="text-lg pt-2 pb-4">Real-time sending and receiving Transactions to your Crypto Wallets.</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Live Portfolio</h3>
                <p className="text-lg pt-2 pb-4">Monitor your Crypto Assets and Net worth in realtime.</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Social Functions</h3>
                <p className="text-lg pt-2 pb-4">Live chat and Crypto Social platform Demo.</p>
              </div>
            </div>
          </div>

          <div>
            <SplashHero />
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
