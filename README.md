QurbaniHat

A modern, clean marketplace to browse and book healthy livestock for Qurbani.
Built for trust — verified animals, transparent pricing, easy booking.

 
Overview
QurbaniHat connects buyers with trusted livestock sellers across Bangladesh. Browse cows and goats by breed, weight, and location — then book directly from the platform after signing in. No middlemen, no confusion.
 
Live Site
https://b13-a08-kappa.vercel.app/
 
What's Inside
Home — Hero banner, featured animals, live farm ticker with walking animal animation, and Qurbani tips section.
All Animals — Full livestock listing with sort by price (low to high / high to low). Each card shows breed, weight, location, and price at a glance.
Animal Detail — Complete animal profile with image, age, weight, location, breed, and description. Booking form is gated — only visible after login.
Booking — Simple form with name, email, phone, address. Submits with a success toast. No database storage — just the experience.
Auth — Email/password and Google login via Better Auth. Register with name, email, photo URL, and password. Redirects handled cleanly.
My Profile — Shows logged-in user's name, photo, and email. Update name and photo URL with live image preview before saving.
 


Tech Stack
Next.js 15          — App Router, server + client components
Better Auth         — Email/password + Google OAuth
MongoDB             — User data via mongodbAdapter
Tailwind CSS        — Utility-first styling
DaisyUI             — Component library on top of Tailwind
React Spring        — Animal walking animation
React Toastify      — Success and error notifications
React Icons         — Icon set throughout the UI
 
Getting Started
bashgit clone https://github.com/your-username/b13-a08
cd b13-a08
npm install
npm run dev

Create a .env.local file in the root:
BETTER_AUTH_SECRET            = your_secret_key
BETTER_AUTH_URL               = http://localhost:3000
MONGODB_URI                   = your_mongodb_connection_string
GOOGLE_CLIENT_ID              = your_google_client_id
GOOGLE_CLIENT_SECRET          = your_google_client_secret
 

NPM Packages Used:
bashbetter-auth
@react-spring/web
react-toastify
react-icons
animate.css
 
Notes

Private routes redirect to /login if unauthenticated
Booking form does not persist data — toast only
Profile photo updates with live preview before saving
All routes work correctly after Vercel deployment

 

Crafted for Qurbani season — simple, honest, functional.