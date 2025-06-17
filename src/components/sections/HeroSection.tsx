
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-white py-16 lg:py-24">
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
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center shadow-xl">
                <div className="w-64 h-80 bg-gray-800 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
                  <div className="absolute top-4 left-4 text-white font-bold text-lg">
                    Sample Jersey
                  </div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
