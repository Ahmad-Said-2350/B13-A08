"use client";
import { toast } from "react-toastify";

const BookingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking successful!");
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Full Name"
        className="input input-bordered w-full" required />

      <input type="email" name="email" placeholder="Email"
        className="input input-bordered w-full" required />

      <input type="tel" name="phone" placeholder="Phone"
        className="input input-bordered w-full" required />

      <textarea name="address" placeholder="Address"
        className="textarea textarea-bordered w-full" required />

      <button type="submit" className="btn btn-primary w-full text-white">
        Confirm Booking
      </button>
    </form>
  );
};

export default BookingForm;