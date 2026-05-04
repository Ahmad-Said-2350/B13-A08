import React from 'react';
import Link from 'next/link';
// Import specific icons from Font Awesome
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaFacebook
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="container mx-auto px-4 md:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Qurbani</span>Hat
            </h3>
            <p className="text-sm leading-relaxed opacity-80">
              Connecting you with high-quality, healthy livestock for a meaningful Qurbani. We prioritize transparency and health to ensure your peace of mind.
            </p>
          </div>

          <div>
            <h3 className="footer-title opacity-100 font-bold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="link link-hover opacity-80">Home</Link>
              <Link href="/animals" className="link link-hover opacity-80">All Animals</Link>
              <Link href="/my-profile" className="link link-hover opacity-80">my-profile</Link>
            </div>
          </div>

          <div>
            <h3 className="footer-title opacity-100 font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 opacity-80">
                <FaMapMarkerAlt className="text-primary mt-1" size={16} />
                <span>Dhaka,Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 opacity-80">
                <FaPhoneAlt className="text-primary" size={16} />
                <span>+8801342179060</span>
              </li>
              <li className="flex items-center gap-3 opacity-80">
                <FaEnvelope className="text-primary" size={16} />
                <span>info@qurbanihat.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title opacity-100 font-bold text-lg mb-4">Social Media</h3>
            <div className="flex gap-4">
              <a href="#" className="btn btn-primary btn-outline btn-circle btn-sm hover:text-white transition-all">
                <FaFacebook size={16} />
              </a>
              <a href="#" className="btn btn-primary btn-outline btn-circle btn-sm hover:text-white transition-all">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="btn btn-primary btn-outline btn-circle btn-sm hover:text-white transition-all">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-base-300 mt-10 pt-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-70">
          <p>© {new Date().getFullYear()} QurbaniHat. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-primary">Privacy Policy</span>
            <span className="cursor-pointer hover:text-primary">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;