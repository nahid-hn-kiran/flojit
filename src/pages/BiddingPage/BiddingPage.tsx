// --- MOCK DATA ---

import BiddingForm from "@/features/BiddingForm";
import MainLayout from "@/layouts/MainLayout";
import { Star } from "lucide-react";

// In a real application, this data would come from an API
export const biddingData = {
  productName: "High-End Gaming jersey",
  images: [
    "https://placehold.co/400x400/fdeace/303030?text=WHODUNELSON%5Cn10",
    "https://placehold.co/400x400/fdeace/303030?text=WHODUNELSON%5Cn10",
    "https://placehold.co/400x400/fdeace/303030?text=WHODUNELSON%5Cn10",
    "https://placehold.co/400x400/fdeace/303030?text=WHODUNELSON%5Cn10",
  ],
  seller: {
    name: "jersey_seller90",
    avatarUrl: "https://placehold.co/100/20384f/ffffff?text=JS",
    reviews: 22,
    memberSince: "January 2024",
  },
  currentBid: "850.00",
  currency: "£",
  timeRemaining: "01:05:47",
  nextBidSuggestion: "852",
  maxBidSuggestion: "1000",
};

const BiddingPage = () => {
  return (
    <MainLayout>
      <div className="bg-surface py-12">
        <div className="container">
          <h1 className="text-4xl lg:text-5xl font-bold text-heading mb-8">
            {biddingData.productName}
          </h1>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {biddingData.images.map((img, index) => (
              <div
                key={index}
                className="aspect-square w-full rounded-card overflow-hidden bg-surface-card border border-border-subtle"
              >
                <img
                  src={img}
                  alt={`${biddingData.productName} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/400/eee/303030?text=Error";
                  }}
                />
              </div>
            ))}
          </div>

          {/* Seller Info */}
          <div className="flex items-center gap-4 mt-8">
            <img
              src={biddingData.seller.avatarUrl}
              alt={biddingData.seller.name}
              className="w-16 h-16 rounded-full border-2 border-surface-card shadow-md"
            />
            <div>
              <h2 className="text-xl font-bold text-heading">
                @{biddingData.seller.name}
              </h2>
              <div className="flex items-center gap-2 text-body mt-1">
                <Star
                  className="text-flogit-orange"
                  size={18}
                  fill="currentColor"
                />
                <span>({biddingData.seller.reviews} reviews)</span>
                <span className="mx-1">·</span>
                <span>Member since {biddingData.seller.memberSince}</span>
              </div>
            </div>
          </div>

          {/* Bidding Form */}
          <div className="card p-8 rounded-lg bg-flogit-blurOrange mt-8">
            <BiddingForm />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BiddingPage;
