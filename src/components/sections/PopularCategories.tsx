
import React from 'react';
import { Car, Smartphone, Home, Shirt, Sofa, Gamepad2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PopularCategories = () => {
  const categories = [
    { icon: Car, name: "Vehicles", color: "bg-red-100 text-red-600" },
    { icon: Smartphone, name: "Electronics", color: "bg-blue-100 text-blue-600" },
    { icon: Home, name: "Home & Garden", color: "bg-green-100 text-green-600" },
    { icon: Shirt, name: "Men's Clothing", color: "bg-purple-100 text-purple-600" },
    { icon: Sofa, name: "Furniture", color: "bg-yellow-100 text-yellow-600" },
    { icon: Gamepad2, name: "Toys & Games", color: "bg-pink-100 text-pink-600" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Categories</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="w-10 h-10 p-0">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="w-10 h-10 p-0">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 text-center group-hover:text-orange-500 transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
