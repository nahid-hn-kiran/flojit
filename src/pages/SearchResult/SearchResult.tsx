import Button from "@/components/shared/Button";
import { FlogitPagination } from "@/components/shared/Pagination";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "@/layouts/MainLayout";
import { Star } from "lucide-react";

const SearchResult = () => {
  const allListings = [
    {
      id: 1,
      title: "Vintage Sports Jersey Collection",
      price: "£450.00",
      timeLeft: "2d 5h",
      category: "Sports",
      rating: 4.8,
      image: "bg-blue-100",
    },
    {
      id: 2,
      title: "Gaming Console Bundle",
      price: "£325.00",
      timeLeft: "1d 12h",
      category: "Electronics",
      rating: 4.9,
      image: "bg-green-100",
    },
    {
      id: 3,
      title: "Designer Furniture Set",
      price: "£1,200.00",
      timeLeft: "5d 3h",
      category: "Furniture",
      rating: 4.7,
      image: "bg-purple-100",
    },
    {
      id: 4,
      title: "Rare Book Collection",
      price: "£180.00",
      timeLeft: "3d 8h",
      category: "Books",
      rating: 4.6,
      image: "bg-yellow-100",
    },
    {
      id: 5,
      title: "Professional Camera Equipment",
      price: "£750.00",
      timeLeft: "4d 15h",
      category: "Electronics",
      rating: 4.9,
      image: "bg-red-100",
    },
    {
      id: 6,
      title: "Antique Watch Collection",
      price: "£2,100.00",
      timeLeft: "6d 2h",
      category: "Collectibles",
      rating: 4.8,
      image: "bg-indigo-100",
    },
  ];
  return (
    <MainLayout>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            All Listings
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allListings.map((item) => (
              <Card
                key={item.id}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`h-48 ${item.image} rounded-t-lg relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium">
                    {item.timeLeft}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-2xl font-bold text-orange-500 mb-2">
                    {item.price}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">{item.category}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {item.rating}
                      </span>
                    </div>
                    <Button size="sm" className="bg-gray-800 hover:bg-gray-900">
                      Bid Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="pt-12">
          <FlogitPagination />
        </div>
      </div>
    </MainLayout>
  );
};

export default SearchResult;
