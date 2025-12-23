import { PawPrint } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="bg-amber-100 text-gray-700 py-10 px-6">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
       
        <div>
          <div className="flex items-center gap-2 mb-3">
            <PawPrint className="text-amber-700 w-6 h-6" />
            <h2 className="text-2xl font-bold text-amber-800">PawMart</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            PawMart connects local pet owners and buyers for adoption and pet
            care products. Because every pet deserves a loving home.
          </p>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-amber-800 mb-3">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#home"
                className="hover:text-amber-600 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-amber-600 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#terms"
                className="hover:text-amber-600 transition-colors"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

      
        <div className="flex flex-col justify-center items-start md:items-end">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} PawMart. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Built with ❤️ for animal lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
