import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../index";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          {/* Left Container */}
          <div className="mb-6 w-full md:w-auto flex flex-col items-start space-y-4">
            <Logo />
            <p className="text-sm">
              &copy; 2024 Your Company. All rights reserved.
            </p>
          </div>

          {/* Right Container */}
          <div className="w-full md:w-auto flex flex-wrap justify-between space-y-6 md:space-y-0 md:space-x-16">
            {/* Company Links */}
            <div className="w-full md:w-auto">
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="list-none space-y-2">
                <li>
                  <Link to="/features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/affiliate" className="hover:text-white">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link to="/presskit" className="hover:text-white">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="w-full md:w-auto">
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="list-none space-y-2">
                <li>
                  <Link to="/account" className="hover:text-white">
                    Account
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="hover:text-white">
                    Help
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/customer-support" className="hover:text-white">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="w-full md:w-auto">
              <h4 className="text-lg font-semibold mb-4">Legals</h4>
              <ul className="list-none space-y-2">
                <li>
                  <Link to="/terms" className="hover:text-white">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/licensing" className="hover:text-white">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
