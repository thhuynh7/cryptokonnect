import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid';

import { CheckIcon } from '@heroicons/react/outline';

import supportImg from '../../assets/cyber-bg.png';

const PrivacyPage = () => {
  return (
    <>
      <div name="platforms" className="w-full my-5">
        <div className="max-w-[1240px] mx-auto px-2">
          <h2 className="text-5xl font-bold text-center">Data Privacy Policy</h2>
          <p className="text-2xl py-8 text-gray-500 text-center">Crypto Konnect prioritizes Protecting your data and your privacy including the following types of user information:</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Personal Identification</h3>
                <p className="text-lg pt-2 pb-4">Full legal name, date of birth, age, nationality, gender, signature, utility bills, photographs, phone number, home address, and/or email.</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Formal Identification</h3>
                <p className="text-lg pt-2 pb-4">Information deemed necessary to comply with our legal obligations under financial or anti-money laundering laws.</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Financial Information</h3>
                <p className="text-lg pt-2 pb-4">Bank account information, payment card primary account number (PAN), transaction history, trading data, and/or tax identification.</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Transaction Information</h3>
                <p className="text-lg pt-2 pb-4">Information about the transactions you make on our Services, such as the name of the recipient, your name, the amount, and/or timestamp.</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Correspondence</h3>
                <p className="text-lg pt-2 pb-4"> Survey responses, information provided to our support team or user research team.</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Online Identifiers</h3>
                <p className="text-lg pt-2 pb-4">Geo location/tracking details, browser fingerprint, operating system, browser name and version, and/or personal IP addresses.</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">User-generated Content</h3>
                <p className="text-lg pt-2 pb-4">Content such as images, videos, text, testimonials, and audio, that has been posted by users on our Crypto Social platform such as social posts and live discussion.</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Usage Data</h3>
                <p className="text-lg pt-2 pb-4">Authentication data, security questions, click-stream data, public social networking posts, and other data collected via cookies and similar technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
