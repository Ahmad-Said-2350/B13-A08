"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUp, signIn } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const image = formData.get("photoURL");
    const password = formData.get("password");

    const { error } = await signUp.email({ name, email, password, image });

    if (error) {
      toast.error(error.message || "Registration failed!");
    } else {
      toast.success("Registration successful! Please login.");
      router.push("/login");
    }
    setLoading(false);
  };

  const handleGoogle = async () => {
    await signIn.social({ provider: "google", callbackURL: "/" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-8">
        <h2 className="text-3xl font-black text-center mb-6">
          Join <span className="text-primary">QurbaniHat</span>
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Full Name</span></label>
            <input type="text" name="name" placeholder="Your Name"
              className="input input-bordered w-full" required />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Email</span></label>
            <input type="email" name="email" placeholder="your@email.com"
              className="input input-bordered w-full" required />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Photo URL</span></label>
            <input type="url" name="photoURL" placeholder="https://..."
              className="input input-bordered w-full" />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Password</span></label>
            <input type="password" name="password" placeholder="Min 8 characters"
              className="input input-bordered w-full" required minLength={8} />
          </div>

          <button type="submit" className="btn btn-primary w-full text-white mt-2" disabled={loading}>
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "Register"}
          </button>
        </form>

        <div className="divider">OR</div>

        <button onClick={handleGoogle} className="btn btn-outline w-full gap-2">
          <FaGoogle /> Continue with Google
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-bold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;