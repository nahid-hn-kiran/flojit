
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

const RecentlyListed = () => {
  const categories = [
    "Jersey", "Vehicles", "Electronics", "Home & Garden", "Job & Services", "Sports Gaming", "Different Gaming"
  ];

  const recentItems = [
    {
      id: 1,
      title: "High-End Gaming PC",
      price: "£500.00",
      timeLeft: "7hrs left, 3d 12h",
      image: "bg-red-100"
    },
    {
      id: 2,
      title: "High-End Gaming PC",
      price: "£700.00",
      timeLeft: "Time left: 2d 14d",
      image: "bg-red-200"
    },
    {
      id: 3,
      title: "High-End Gaming PC",
      price: "£400.00",
      timeLeft: "Time left: 5d 20h",
      image: "bg-gray-100"
    },
    {
      id: 4,
      title: "High-End Gaming PC",
      price: "£665.00",
      timeLeft: "Time left: 4d 5h",
      image: "bg-gray-200"
    },
    {
      id: 5,
      title: "High-End Gaming PC",
      price: "£600.00",
      timeLeft: "Time left: 6d 3h",
      image: "bg-yellow-100"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Recently listed items</h2>
          <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
            View All <ChevronRight className="ml-1 w-4 h-4" />
          </Button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "bg-gray-800 hover:bg-gray-900" : "border-gray-300 hover:border-gray-400"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {recentItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-300">
              <div className={`h-40 ${item.image} rounded-t-lg`}></div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg font-bold text-orange-500 mb-1">{item.price}</p>
                <p className="text-xs text-gray-600">{item.timeLeft}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyListed;
