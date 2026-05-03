"use client";
import React from 'react';
import { FaPhoneAlt, FaMapMarkedAlt, FaUser, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const BookingForm = ({ user }) => {
  
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const phone = formData.get('phone');

    toast.success(`Booking successful! Contacting at ${phone}`, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

    e.target.reset();
  };

  return (
    <div className="w-full bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 dark:border-zinc-800">
      
      <div className="mb-10">
        <h2 className="text-3xl font-light tracking-tight text-zinc-800 dark:text-zinc-100">
          Book Your <span className="font-bold text-primary">Livestock</span>
        </h2>
        <p className="text-zinc-400 mt-2 text-sm">Please provide your details to complete the order.</p>
      </div>
      
      <form onSubmit={handleBookingSubmit} className="space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Full Name</label>
            <div className="relative group">
              <input 
                type="text" 
                name="name"
                defaultValue={user?.name || ""} 
                placeholder="Ex: Abdus Samad" 
                className="w-full py-3 px-0 bg-transparent border-b-2 border-zinc-100 dark:border-zinc-800 focus:border-primary outline-none transition-all duration-300 placeholder:text-zinc-300" 
                required 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              placeholder="017XXXXXXXX" 
              className="w-full py-3 px-0 bg-transparent border-b-2 border-zinc-100 dark:border-zinc-800 focus:border-primary outline-none transition-all duration-300 placeholder:text-zinc-300" 
              required 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
          <input 
            type="email" 
            name="email"
            defaultValue={user?.email || ""} 
            className="w-full py-3 px-0 bg-transparent border-b-2 border-zinc-100 dark:border-zinc-800 text-zinc-400 cursor-not-allowed italic" 
            readOnly 
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Delivery Address</label>
          <textarea 
            name="address"
            rows="2"
            className="w-full py-3 px-0 bg-transparent border-b-2 border-zinc-100 dark:border-zinc-800 focus:border-primary outline-none transition-all duration-300 placeholder:text-zinc-300 resize-none" 
            placeholder="House, Road, City..." 
            required
          ></textarea>
        </div>

        <div className="pt-6">
          <button 
            type="submit" 
            className="w-full bg-zinc-900 dark:bg-primary dark:text-white text-white py-4 rounded-xl font-bold tracking-wide hover:bg-primary transition-colors duration-300 shadow-lg shadow-zinc-200 dark:shadow-none"
          >
            CONFIRM BOOKING
          </button>
          
          <div className="flex items-center justify-center gap-2 mt-6 opacity-30 group-hover:opacity-100 transition-opacity">
            <FaCheckCircle className="text-[10px]" />
            <p className="text-[10px] uppercase font-black tracking-[0.2em]">Verified Secure</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;