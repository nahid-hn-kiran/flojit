import React from "react";
import { UserPlus, List, DollarSign, Handshake } from "lucide-react";
import Button from "@/components/shared/Button";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register an Account",
      description:
        "Create your free account to get started on your buying and selling journey.",
    },
    {
      icon: List,
      title: "List and sell your items",
      description:
        "Upload photos, write descriptions and listing, list your items and let the buyers come to you.",
    },
    {
      icon: DollarSign,
      title: "Bid, Win, or Buy Instantly",
      description:
        "Browse our listings, place bids on auction items, or find items available for immediate purchase.",
    },
    {
      icon: Handshake,
      title: "Meet & Exchange Locally",
      description:
        "Arrange to meet sellers and buyers locally, in safe locations such as police stations, coffee shops and shopping centers, to complete your purchase.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <step.icon className="w-8 h-8 text-white" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg">Learn More about Flogit.je</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
