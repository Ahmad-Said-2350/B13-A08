import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div
      className="hero min-h-[70vh] lg:min-h-[85vh]"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2070&auto=format&fit=crop')",
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
            <button className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-black">
              View Qurbani Tips
            </button>
          </div>
          
          {/* Stats / Trust Badges (Extra touch for marks) */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 opacity-80 text-sm">
            <div className="flex flex-col">
              <span className="font-bold text-2xl">500+</span>
              <span>Available Livestock</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl">100%</span>
              <span>Healthy & Verified</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl">24/7</span>
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;