import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWeightHanging, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import AnimalsCard from './AnimalsCard';

const FeaturedAnimals = async () => {
  const res = await fetch("https://b13-a08-kappa.vercel.app/data.json");
  const featured = await res.json();

  const featuredAnimals = featured.slice(0,4) 

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4 md:px-12">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-base-content">
              Featured <span className="text-primary">Livestock</span>
            </h2>
            <div className="h-1 w-20 bg-primary mt-2 rounded-full"></div>
            <p className="text-base-content/70 mt-4">Top choices for your sacred sacrifice</p>
          </div>
          <Link href="/animals" className="hidden md:flex btn btn-ghost text-primary gap-2 hover:bg-primary/10">
            See All Animals <FaArrowRight />
          </Link>
        </div>

        {/* Animals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredAnimals.map((animal) => (
           <AnimalsCard key={animal.id} animal={animal}></AnimalsCard>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <Link href="/animals" className="btn btn-outline btn-primary w-full">
            Browse All Animals
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;