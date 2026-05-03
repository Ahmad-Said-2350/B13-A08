"use client";

import React, { useState, useEffect } from 'react';
import AnimalsCard from "@/components/AnimalsCard"; 
const AllAnimalsPage = () => {
    const [animals, setAnimals] = useState([]);
    const [displayAnimals, setDisplayAnimals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://b13-a08-kappa.vercel.app/data.json")
            .then(res => res.json())
            .then(data => {
                setAnimals(data);
                setDisplayAnimals(data);
                setLoading(false);
            });
    }, []);

    const handleSort = (e) => {
        const value = e.target.value;
        let sorted = [...displayAnimals];

        if (value === "lowToHigh") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (value === "highToLow") {
            sorted.sort((a, b) => b.price - a.price);
        }
        setDisplayAnimals(sorted);
    };

    if (loading) return <div className=' flex justify-center items-center'><span className="loading loading-infinity loading-md"></span></div>;

    return (
        <div className="container mx-auto px-4 md:px-12 py-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                <h2 className="text-3xl md:text-4xl font-black uppercase">
                    All <span className="text-primary">Livestock</span>
                </h2>

                <div className="form-control w-full max-w-xs">
                    <select 
                        onChange={handleSort} 
                        className="select select-bordered font-bold bg-base-100 shadow-sm"
                        defaultValue=""
                    >
                        <option value="" disabled>Sort by Price</option>
                        <option value="lowToHigh">Price: Low to High</option>
                        <option value="highToLow">Price: High to Low</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {displayAnimals.map((animal) => (
                    <AnimalsCard key={animal.id} animal={animal} />
                ))}
            </div>

            
        </div>
    );
};

export default AllAnimalsPage;