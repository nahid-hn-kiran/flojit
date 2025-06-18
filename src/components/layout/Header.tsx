import React from "react";
import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { constants } from "@/lib/constants";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top Header with Logo, Search, and Auth */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={constants.siteLogo} alt="Flojit.je" />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-12">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for anything"
                className="pl-12 pr-32 py-3 w-full border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-full text-base"
              />
              <Button
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-full"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3 ml-8">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-orange-500 font-medium px-6"
            >
              Log In
            </Button>
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2.5">
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden p-2">
            <Menu className="w-6 h-6 text-gray-700" />
          </Button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for anything"
              className="pl-12 pr-4 py-3 w-full border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center space-x-8 h-12">
            <Link
              to="/"
              className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors"
            >
              Categories
            </Link>
            <Link
              to="/auctions"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors"
            >
              Auctions
            </Link>
            <Link
              to="/buy-now"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors"
            >
              Buy Now
            </Link>
            <Link
              to="/sell"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors"
            >
              Sell
            </Link>
            <Link
              to="/about"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
