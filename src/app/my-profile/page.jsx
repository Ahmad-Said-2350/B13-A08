"use client";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const MyProfilePage = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) router.push("/login");
  }, [session, isPending]);

  if (isPending) return (
    <div className="min-h-screen flex justify-center items-center">
      <span className="loading loading-infinity loading-lg"></span>
    </div>
  );

  if (!session) return null;

  const user = session.user;

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card bg-base-100 shadow-xl w-full max-w-md p-8 text-center">
        <div className="avatar justify-center mb-4">
          <div className="w-24 rounded-full ring ring-primary ring-offset-2">
            <Image
              src={user.image || "https://i.ibb.co/mJR9Qxc/user-avatar.png"}
              alt="Profile"
              width={96}
              height={96}
            />
          </div>
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