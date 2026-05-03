"use client";
import Link from "next/link";

const Navbar = ({ session, onLogout }) => {
  return (
    <div className="navbar bg-base-100 shadow-md px-2 md:px-8 sticky top-0 z-50">
      
      {/* LEFT SECTION: Logo (Desktop) | Icon + Logo (Mobile) */}
      <div className="navbar-start w-auto lg:flex-1">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-xl border border-base-200"
          >
            <li><Link href="/">Home</Link></li>
            <li><Link href="/animals">All Animals</Link></li>
          </ul>
        </div>

        {/* Logo - Stays left on all devices */}
        <Link href="/" className="btn btn-ghost text-xl font-bold tracking-tight px-2">
          <span className="text-primary">Qurbani</span>Hat
        </Link>
      </div>

      {/* CENTER SECTION: Nav Items (Visible only on Large screens) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium gap-2">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/animals">All Animals</Link></li>
        </ul>
      </div>

      {/* RIGHT SECTION: Auth Buttons (Visible on all devices) */}
      <div className="navbar-end gap-2">
        {session ? (
          <div className="flex items-center gap-3">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-primary">
                <div className="w-10 rounded-full">
                  <img
                    alt="User Profile"
                    src={session.user.image || "https://i.ibb.co/mJR9Qxc/user-avatar.png"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-xl border border-base-200"
              >
                <li className="menu-title text-primary border-b border-base-200 mb-1">{session.user.name}</li>
                <li><Link href="/my-profile">My Profile</Link></li>
                <li><button onClick={onLogout} className="text-error font-semibold">Logout</button></li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-1 md:gap-2">
            <Link href="/login" className="btn btn-primary btn-sm md:btn-md text-white px-4 md:px-6">
              Login
            </Link>
            <Link href="/register" className="btn btn-outline btn-primary btn-sm md:btn-md hidden sm:inline-flex">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;