import React from 'react';
import { Link } from 'react-router-dom';
import { PaperAirplaneIcon } from '@heroicons/react/solid';

import bgImg from '../../assets/cyber-bg.png';

const AboutHero = () => {
  return (
    <div name="home" className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto mt-5 pt-8">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-4xl font-bold text-primary">Thai Huynh</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">Crypto Konnect</h1>
          <p className="text-2xl">Track, Send and Receive hundreds of cryptocurrencies.</p>
          <Link className="btn-danger rounded-lg py-2 w-[30%] bg-green-500 text-center no-underline hover:no-underline" to="/">
            Get Started
          </Link>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>

        <div
          className="mx-12 px-11 flex flex-col py-3 md:min-w-[1150px] bottom-[8%]
             bg-white
            border border-slate-300 rounded-xl text-center shadow-2xl"
        >
          <p className="text-2xl text-slate-500">About the Developer</p>
          <div className="flex justify-between flex-wrap px-4 text-3xl">
            <p className="flex flex-wrap mx-auto px-4 py-2 text-3xl text-indigo-600">
              <PaperAirplaneIcon className="h-9 text-indigo-600" /> Thai Huynh
            </p>
            <p className="text-left text-2xl">I am a seasoned Engineer with a knack for problem-solving and innovation. It may come as a surprise, but I haven't always considered myself a Software Engineer.</p>
            {/* <p className="text-left text-2xl">I used to be a Lead Engineer with 4+ years of experience leading teams of up to 8 engineers on hundreds of projects that are worth half a million dollars each.</p> */}
            <p className="text-left text-2xl">Before transitioning to software engineering, I was a Technical Lead for a leading construction firm in Australia. My work revolved around leveraging cutting-edge software and technologies to improve our operations. It was during this time that I realized how much I enjoyed working with computers and technology.</p>
            <p className="text-left text-2xl">Driven by this newfound passion, I made a pivotal career move and shifted from Civil Engineering to Programming. Now, I'm pursuing my calling in Canada, working in the ever-evolving tech industry in North America. It's exhilarating to be part of the world's fastest-growing software development sector, doing what I love every day.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
