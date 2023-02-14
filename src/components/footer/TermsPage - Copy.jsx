import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid';

import { CheckIcon } from '@heroicons/react/outline';

import supportImg from '../../assets/support.jpg';

const TermsPage = () => {
  return (
    <>
      <div name="support" className="round-corner w-full mt-0">
{/*         
        <div className="w-full h-auto bg-gray-900/90 absolute">
          <img className="w-full h-fit object-cover mix-blend-overlay" src={supportImg} alt="/" />
        </div> */}

        <div className="max-w-[1240px] mx-auto text-black relative">
          <div className="px-4 py-12">
            <h2 className="text-3xl pt-8 pb-4 text-gray-500 uppercase text-center">Crypto Konnect</h2>
            <h3 className="text-5xl font-bold py-6 text-center">Terms of Service</h3>

            <p className="pt-4 pb-0 text-2xl text-black">1. Users must have an account to access features outside of basic searches.</p>
            <p className="pt-4 pb-0 text-2xl text-black">2. Accounts must have a valid email address to become active (email verification upon registration).</p>
            <p className="pt-4 pb-0 text-2xl text-black">3. Sensitive user information must be encrypted</p>
            <p className="pt-4 pb-0 text-2xl text-black">4. Users are not entitled to reimbursement if they supply an incorrect destination address for transfers.</p>
            <p className="pt-4 pb-0 text-2xl text-black">5. User must be given an opportunity to review transaction details before they are finalized.</p>

            <p className="pt-4 pb-0 text-2xl text-black">6. Private keys will not be viewable by the user.</p>
            <p className="pt-4 pb-0 text-2xl text-black">7. A subscriber may cancel his/her premium subscription at any time.</p>
            <p className="pt-4 pb-0 text-2xl text-black">8. Subscribers must be sent a reminder email before they are charged again.</p>
            <p className="pt-4 pb-0 text-2xl text-black">9. No records of a user will be stored if they choose to deactivate their account.</p>
            <p className="pt-4 pb-0 text-2xl text-black">10. Personal information will not be shared with third party service providers without the user's consent.</p>        

            <p className="pt-4 pb-0 text-2xl text-black">11. Timestamps of when pricing information was retrieved must be visible to the user when queries are mad.</p>                
            <p className="pt-4 pb-0 text-2xl text-black">12. By joining Crypto Konnect social forum, Users agree that they have read and will follow the rules, terms and conditions set forth in our Community Access Agreement.</p>                
            <p className="pt-4 pb-0 text-2xl text-black">13. Crypto Konnect reserves the right to terminate service if the user breaches the Terms and Conditions agreement.</p>                
            <p className="pt-4 pb-0 text-2xl text-black">14. User must be notified prior to an update that might affect the usage of the app such as feature change or removal.</p>                
          </div>


        </div>
      </div>


    </>
  );
};

export default TermsPage;
