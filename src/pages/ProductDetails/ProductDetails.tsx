import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Gavel } from "lucide-react"; // Icons for the lightbox
import Button from "@/components/shared/Button";
import MainLayout from "@/layouts/MainLayout";
import Newsletter from "../Home/sections/Newsletter";

// --- MOCK DATA ---
const productData = {
  name: "High-End Gaming Jersey",
  description:
    "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  price: "850.00",
  currency: "£",
  timeRemaining: "01:05:47",
  bids: 12,
  images: [
    "https://placehold.co/800x800/fdeace/303030?text=WHODUNELSON%5Cn10",
    "https://placehold.co/800x800/fdeace/303030?text=Back%5Cn10",
    "https://placehold.co/800x800/fdeace/303030?text=Side%5CnView",
    "https://placehold.co/800x800/fdeace/303030?text=Zoom%5CnDetail",
    "https://placehold.co/800x800/fdeace/303030?text=Badge",
  ],
};

const disclaimerText =
  "The description of the item/lot is, to the best of the seller's knowledge, accurate and not misleading. Flogit.je Auctions requests detailed information about the lot from the seller and conducts a level of due diligence. However, potential buyers must satisfy themselves as to the accuracy of the description and the condition of the item and, where appropriate, view the lot in person if possible, and conduct any research they feel is necessary before committing to bid or purchase.\n\nIt is important to note that auction items, including but not limited to vehicles, often undergo repairs or restorations to address damage or wear, and these may not always be visible or explicitly mentioned in the description. Images supplied by the seller are for guidance only and, unless the seller assumes any item may have had restoration or repairs during its life. Photographs might not accurately depict the true condition of an item. Therefore, it is the bidder's responsibility to inspect the item, including any past repairs or restorations, before placing a bid or making a purchase. This can include raising questions with the seller and arranging personal inspections.\n\nFor items such as vehicles, unless otherwise noted, potential buyers should assume that any cherished registration may be retained by the seller. Please refer to our Terms and Conditions for complete details.";

/**
 * Product Detail Page Component
 * Features a custom-built image gallery with a lightbox/modal for viewing images.
 */
const ProductDetailsPage = () => {
  // State for the static gallery view
  const [activeImage, setActiveImage] = useState(productData.images[0]);

  // State for the lightbox
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToNext = () => {
    setLightboxIndex(
      (prevIndex) => (prevIndex + 1) % productData.images.length
    );
  };

  const goToPrevious = () => {
    setLightboxIndex(
      (prevIndex) =>
        (prevIndex - 1 + productData.images.length) % productData.images.length
    );
  };

  // Effect to handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <MainLayout>
      <div className="container py-8 md:py-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-heading mb-6">
          {productData.name}
        </h1>

        <main className="flex flex-col gap-8 lg:gap-12">
          {/* --- STATIC IMAGE GALLERY --- */}
          <div className="flex flex-col gap-4 w-full lg:max-w-2xl mx-auto">
            {/* Main Display Image */}
            <div
              className="aspect-square w-full rounded-card overflow-hidden bg-surface-card border border-border-subtle flex items-center justify-center cursor-pointer"
              onClick={() =>
                openLightbox(productData.images.indexOf(activeImage))
              }
            >
              <img
                src={activeImage}
                alt={productData.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/600/eee/303030?text=Image+Not+Found";
                }}
              />
            </div>
            {/* Thumbnail Strip */}
            <div className="grid grid-cols-5 gap-2 md:gap-4">
              {productData.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square rounded-btn overflow-hidden border-2 transition-all duration-200 ${
                    activeImage === img
                      ? "border-primary"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img.replace("800x800", "200x200")}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/200/eee/303030?text=Error";
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* --- PRODUCT INFO & ACTIONS --- */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold text-heading mb-3">
                Product Description
              </h2>
              <p className="text-body leading-relaxed">
                {productData.description}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 card p-8 rounded-lg bg-flogit-blurOrange">
              <div>
                <p className="text-2xl font-bold text-heading">
                  <p className="text-sm text-body mb-1 text-flogit-orange">
                    Current price (£)
                  </p>
                  {productData.price}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold text-heading">
                  <p className="text-sm text-body mb-1 text-flogit-orange">
                    Time Remaining
                  </p>
                  {productData.timeRemaining}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold text-heading">
                  <p className="text-sm text-body mb-1 text-flogit-orange">
                    Bids
                  </p>
                  {productData.bids}
                </p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <Button size="lg" className="flex gap-x-3">
                  <span>Place Bid</span>
                  <span>
                    <Gavel />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <section className="mt-12 py-20 bg-flogit-blurOrange">
        <div className="container">
          <h2 className="text-2xl font-bold text-heading mb-4">Disclaimer</h2>
          <div className="text-body space-y-4 text-sm leading-loose">
            {disclaimerText.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-opacity"
          >
            <X size={32} />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-10 text-white/70 hover:text-white transition-opacity"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="relative max-w-4xl max-h-[90vh] flex items-center justify-center">
            <img
              src={productData.images[lightboxIndex]}
              alt={`Lightbox view ${lightboxIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          <button
            onClick={goToNext}
            className="absolute right-4 md:right-10 text-white/70 hover:text-white transition-opacity"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
      <Newsletter />
    </MainLayout>
  );
};

export default ProductDetailsPage;
