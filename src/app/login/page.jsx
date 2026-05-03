"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const { error } = await signIn.email({ email, password });

    if (error) {
      toast.error(error.message || "Login failed!");
    } else {
      toast.success("Login successful!");
      router.push("/");
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
          Login to <span className="text-primary">QurbaniHat</span>
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Email</span></label>
            <input type="email" name="email" placeholder="your@email.com"
              className="input input-bordered w-full" required />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Password</span></label>
            <input type="password" name="password" placeholder="••••••••"
              className="input input-bordered w-full" required />
          </div>

          <button type="submit" className="btn btn-primary w-full text-white mt-2" disabled={loading}>
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "Login"}
          </button>
        </form>

        <div className="divider">OR</div>

        <button onClick={handleGoogle} className="btn btn-outline w-full gap-2">
          <FaGoogle /> Continue with Google
        </button>

        <p className="text-center mt-4 text-sm">
          Dont have an account?{" "}
          <Link href="/register" className="text-primary font-bold hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;