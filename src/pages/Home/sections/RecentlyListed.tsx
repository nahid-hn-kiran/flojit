import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const RecentlyListed = () => {
  const categories = [
    "All",
    "Jersey",
    "Vehicles",
    "Electronics",
    "Home & Garden",
    "Job & Services",
    "Sports Gaming",
    "Different Gaming",
  ];

  const recentItems = [
    {
      id: 1,
      title: "Vintage Camera Collection",
      price: "£850.00",
      originalPrice: "£1,200.00",
      timeLeft: "2d 10h",
      category: "Electronics",
      rating: 4.8,
      reviews: 24,
      image: "bg-gradient-to-br from-purple-100 to-purple-200",
      tag: "FEATURED",
    },
    {
      id: 2,
      title: "Designer Leather Jacket",
      price: "£450.00",
      originalPrice: "£680.00",
      timeLeft: "1d 15h",
      category: "Fashion",
      rating: 4.9,
      reviews: 18,
      image: "bg-gradient-to-br from-blue-100 to-blue-200",
      tag: "HOT",
    },
    {
      id: 3,
      title: "Antique Wooden Furniture",
      price: "£1,200.00",
      originalPrice: "£1,800.00",
      timeLeft: "3d 8h",
      category: "Home & Garden",
      rating: 4.7,
      reviews: 12,
      image: "bg-gradient-to-br from-amber-100 to-amber-200",
      tag: "RARE",
    },
    {
      id: 4,
      title: "Gaming Console Bundle",
      price: "£320.00",
      originalPrice: "£480.00",
      timeLeft: "5d 2h",
      category: "Gaming",
      rating: 4.6,
      reviews: 35,
      image: "bg-gradient-to-br from-green-100 to-green-200",
      tag: "DEAL",
    },
    {
      id: 5,
      title: "Professional Art Supplies",
      price: "£180.00",
      originalPrice: "£250.00",
      timeLeft: "4d 12h",
      category: "Art & Crafts",
      rating: 4.8,
      reviews: 8,
      image: "bg-gradient-to-br from-pink-100 to-pink-200",
      tag: "NEW",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Recently listed items
          </h2>
          <div className="flex gap-x-4">
            <button className="swiper-button-prev-custom z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-50 transition-colors">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button className="swiper-button-next-custom z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-50 transition-colors">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={
                index === 0
                  ? "bg-gray-800 hover:bg-gray-900"
                  : "border-gray-300 hover:border-gray-400"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-orange-500",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-orange-600",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="featured-swiper"
          >
            {recentItems.map((item) => (
              <SwiperSlide key={item.id}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
                  <div
                    className={`h-56 ${item.image} rounded-t-lg relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    {/* Time Left */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <span className="text-sm font-medium text-gray-800">
                        {item.timeLeft}
                      </span>
                    </div>

                    {/* Heart Icon */}
                    <button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-3">
                      <span className="text-sm text-orange-500 font-medium">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-2xl font-bold text-gray-900">
                        {item.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {item.originalPrice}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(item.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          ({item.reviews})
                        </span>
                      </div>
                    </div>

                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5">
                      Bid Now
                    </Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RecentlyListed;
