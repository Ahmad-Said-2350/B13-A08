"use client";
import React from 'react';
import Link from 'next/link';
import { FaWeightHanging, FaMapMarkerAlt, FaArrowRight, FaTag } from 'react-icons/fa';

const FeaturedAnimals = async() => {
    const res = await fetch()
  
  const featured = animals?.slice(0, 4) ;

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
          {featured.map((animal) => (
            <div 
              key={animal.id} 
              className="card bg-base-100 shadow-xl border border-base-200 group hover:border-primary/30 transition-all duration-300"
            >
              {/* Image Section */}
              <figure className="relative h-60 overflow-hidden">
                <img 
                  src={animal.image} 
                  alt={animal.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <div className="badge badge-primary font-bold text-xs p-3 shadow-lg">
                    {animal.category}
                  </div>
                </div>
                <div className="absolute bottom-3 right-3">
                   <div className="badge badge-secondary font-bold text-xs p-3">
                    {animal.breed}
                  </div>
                </div>
              </figure>
              
              {/* Content Section */}
              <div className="card-body p-6">
                <h3 className="card-title text-xl font-bold group-hover:text-primary transition-colors">
                  {animal.name}
                </h3>
                
                <div className="space-y-2 mt-2">
                  <div className="flex justify-between items-center text-sm opacity-80">
                    <span className="flex items-center gap-2">
                      <FaWeightHanging className="text-primary" /> {animal.weight} KG
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-primary" /> {animal.location}
                    </span>
                  </div>
                </div>

                <div className="divider my-2 opacity-50"></div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs opacity-50 uppercase font-bold tracking-wider">Price</p>
                    <span className="text-2xl font-black text-primary">
                      ৳{animal.price.toLocaleString()}
                    </span>
                  </div>
                  <Link 
                    href={`/details-page/${animal.id}`} 
                    className="btn btn-primary btn-sm md:btn-md text-white rounded-lg shadow-md hover:shadow-primary/40"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
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