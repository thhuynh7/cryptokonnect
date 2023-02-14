import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid';

import { CheckIcon } from '@heroicons/react/outline';

import supportImg from '../../assets/cyber-bg.png';

const LicensePage = () => {
  return (
    <>
      <div name="support" className="w-full mt-0">
        <div className="w-full h-[400px] bg-gray-900/90 absolute">
          <img className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="/" />
        </div>

        <div className="max-w-[1240px] mx-auto text-white relative">
          <div className="px-4 py-12">
            <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">Crypto Konnect</h2>
            <h3 className="text-5xl font-bold py-6 text-center">User Agreement</h3>
            <p className="py-4 text-3xl text-slate-300">You acknowledge that Digital Assets are not subject to protections or insurance provided by the The Financial Transactions and Reports Analysis Centre of Canada (FINTRAC).</p>
          </div>


        </div>
      </div>

      <div name="platforms" className="w-full my-5">
        <div className="max-w-[1240px] mx-auto px-2">
          <h2 className="text-5xl font-bold text-center">Legal</h2>
          <p className="text-2xl py-8 text-gray-500 text-center">The following features may or may not be available to you depending on your location and other criteria.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Eligibility</h3>
                <p className="text-lg pt-2 pb-4">To be eligible to use the Crypto Konnect Services, you must be at least 18 years old, and reside in Canada.</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Account Registration</h3>
                <p className="text-lg pt-2 pb-4">You will need to complete certain verification procedures before you are permitted to use the Crypto Konnect Services.</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Personal Data</h3>
                <p className="text-lg pt-2 pb-4">You acknowledge and agree that your personal information may be disclosed to credit reference and fraud prevention.</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Access</h3>
                <p className="text-lg pt-2 pb-4">The Crypto Konnect Services can be accessed directly using the Crypto Konnect Site.</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Wallet Services</h3>
                <p className="text-lg pt-2 pb-4">Your Digital Wallet allows you to store, track, transfer, and manage your balances of Supported Digital Assets.</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Digital Assets</h3>
                <p className="text-lg pt-2 pb-4">Under no circumstances should you attempt to use your Digital Asset Wallet to store, send, request, or receive any assets other than Supported Digital Assets.</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Transactions</h3>
                <p className="text-lg pt-2 pb-4">You are not buying Supported Digital Assets from Crypto Konnect or selling Supported Digital Assets to Crypto Konnect.</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Fees</h3>
                <p className="text-lg pt-2 pb-4">By using Crypto Konnect Services you agree to pay all  fees and, if applicable based on the service.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LicensePage;
