import React from "react";
import { Button } from "@/components/ui/button";
import { constants } from "@/lib/constants";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-white py-16 lg:py-24 hero-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Buy & Sell in Jersey
              <br />
              <span className="text-orange-500">Locally. Simply. Safely.</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Your local online auction & marketplace
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3"
              >
                Browse Auctions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3"
              >
                Sell Your Item Now
              </Button>
            </div>
          </div>

          {/* Right Content - Jersey Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img src={constants.heroImg} alt="Hero Banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
