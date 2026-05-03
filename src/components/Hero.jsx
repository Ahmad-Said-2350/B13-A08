import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div
      className="hero min-h-[70vh] lg:min-h-[85vh]"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/ds7MGStM/pexels-ganinph-7772719.jpg')",
      }}>
      <div className="hero-overlay bg-black/60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md md:max-w-2xl px-4">
          <h1 className="mb-5 text-4xl md:text-6xl font-extrabold leading-tight">
            Find the Best <span className="text-primary">Qurbani</span> Livestock
          </h1>
          <p className="mb-8 text-lg md:text-xl opacity-90">
            A modern marketplace for healthy, farm-fresh cows and goats. 
            Verified sellers, transparent pricing, and easy booking for your sacred sacrifice.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/animals" className="btn btn-primary btn-lg px-8 text-white">
              Browse Animals
            </Link>
            <Link href="#qur"  className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-black">
              View Qurbani Tips
            </Link>
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default Hero;