import React from 'react';
import { FaWeightHanging, FaMapMarkerAlt, FaBirthdayCake, FaSyringe, FaClipboardCheck } from 'react-icons/fa';
import BookingForm from '@/components/BookingForm'; 
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
const AnimalsDpage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://b13-a08-kappa.vercel.app/data.json");
    const data = await res.json();
    const animal = data.find(p => p.id == id);

    
    if (!animal) return <div className="min-h-screen flex items-center justify-center text-2xl font-bold">Animal Not Found</div>;

const session = await auth.api.getSession({ headers: await headers() });

    return (
        <div className="min-h-screen bg-base-100 py-12">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    <div className="lg:col-span-2">
                        <div className="rounded-3xl overflow-hidden shadow-2xl mb-8">
                            <img 
                                src={animal.image} 
                                alt={animal.name} 
                                className="w-full h-[400px] md:h-[600px] object-cover"
                            />
                        </div>

                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h1 className="text-4xl font-black text-base-content">{animal.name}</h1>
                                <p className="text-primary font-bold text-xl mt-1">{animal.breed} — {animal.category}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm opacity-50 uppercase font-bold">Price</p>
                                <p className="text-4xl font-black text-primary">${animal.price.toLocaleString()}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-base-200 p-4 rounded-2xl text-center">
                                <FaWeightHanging className="mx-auto text-primary mb-2" size={24}/>
                                <p className="text-xs opacity-60">Weight</p>
                                <p className="font-bold">{animal.weight} KG</p>
                            </div>
                            <div className="bg-base-200 p-4 rounded-2xl text-center">
                                <FaBirthdayCake className="mx-auto text-primary mb-2" size={24}/>
                                <p className="text-xs opacity-60">Age</p>
                                <p className="font-bold">{animal.age} Years</p>
                            </div>
                            <div className="bg-base-200 p-4 rounded-2xl text-center">
                                <FaMapMarkerAlt className="mx-auto text-primary mb-2" size={24}/>
                                <p className="text-xs opacity-60">Location</p>
                                <p className="font-bold">{animal.location}</p>
                            </div>
                            <div className="bg-base-200 p-4 rounded-2xl text-center">
                                <FaClipboardCheck className="mx-auto text-primary mb-2" size={24}/>
                                <p className="text-xs opacity-60">Type</p>
                                <p className="font-bold">{animal.type}</p>
                            </div>
                        </div>

                        <div className="prose max-w-none">
                            <h3 className="text-2xl font-bold mb-4">Description</h3>
                            <p className="text-base-content/80 leading-relaxed text-lg">
                                {animal.description}
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-base-100 p-8 rounded-3xl border border-base-300 shadow-xl sticky top-28">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <FaSyringe className="text-primary"/> Book This Animal
                            </h2>
                            
                             {session ? (
  <BookingForm />
) : (
  <div className="text-center p-6 bg-base-200 rounded-2xl">
    <p className="mb-4 font-medium">Please login to place a booking.</p>
    <a href="/login" className="btn btn-primary w-full text-white">Login Now</a>
  </div>
)}
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AnimalsDpage;