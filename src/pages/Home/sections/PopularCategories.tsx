import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
  Car,
  Smartphone,
  Home,
  Shirt,
  Sofa,
  Gamepad2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PopularCategories = () => {
  const categories = [
    { icon: Car, name: "Vehicles", color: "bg-red-100 text-red-600", id: 1 },
    {
      icon: Smartphone,
      name: "Electronics",
      color: "bg-blue-100 text-blue-600",
      id: 2,
    },
    {
      icon: Home,
      name: "Home & Garden",
      color: "bg-green-100 text-green-600",
      id: 3,
    },
    {
      icon: Shirt,
      name: "Men's Clothing",
      color: "bg-purple-100 text-purple-600",
      id: 4,
    },
    {
      icon: Sofa,
      name: "Furniture",
      color: "bg-yellow-100 text-yellow-600",
      id: 5,
    },
    {
      icon: Gamepad2,
      name: "Toys & Games",
      color: "bg-pink-100 text-pink-600",
      id: 6,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Popular Categories
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

        <div>
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
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
            className="featured-swiper"
          >
            {categories.map((category, index) => (
              <SwiperSlide key={category.id}>
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div
                    className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 text-center group-hover:text-orange-500 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
