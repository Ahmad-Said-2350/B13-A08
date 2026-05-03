"use client";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const MyProfilePage = () => {
  const { data: session, isPending, refetch } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) router.push("/login");
  }, [session, isPending]);

  useEffect(() => {
    refetch?.();
  }, []);

  if (isPending) return (
    <div className="min-h-screen flex justify-center items-center">
      <span className="loading loading-infinity loading-lg"></span>
    </div>
  );

  if (!session) return null;

  const user = session.user;
  const image = user.image && user.image !== ""
    ? user.image
    : "https://i.ibb.co/mJR9Qxc/user-avatar.png";

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card bg-base-100 shadow-xl w-full max-w-md p-8 text-center">

        <div className="flex justify-center mb-4">
          <img
            src={image}
            alt="Profile"
            onError={(e) => e.target.src = "https://i.ibb.co/mJR9Qxc/user-avatar.png"}
            className="w-24 h-24 rounded-full object-cover ring-4 ring-primary ring-offset-2"
          />
        </div>

        <h2 className="text-2xl font-black">{user.name}</h2>
        <p className="text-base-content/60 mt-1">{user.email}</p>

        <Link href="/my-profile/update" className="btn btn-primary text-white mt-6 w-full">
          Update Profile
        </Link>

      </div>
    </div>
  );
};

export default MyProfilePage;