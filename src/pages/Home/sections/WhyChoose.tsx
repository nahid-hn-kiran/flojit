
import React from 'react';
import { Shield, MessageCircle, Users, Eye } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "All payments are processed securely and safely through our trusted payment partners, giving you peace of mind."
    },
    {
      icon: MessageCircle,
      title: "On-site Messaging",
      description: "Connect with buyers and sellers directly through our secure messaging system."
    },
    {
      icon: Users,
      title: "Jersey-Only Community",
      description: "A platform designed exclusively for Jersey's vibrant community."
    },
    {
      icon: Eye,
      title: "No Contact Info Sharing",
      description: "Keep personal information private - contact details are never shared publicly or with other users."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Flogit.je?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
