
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay updated on latest deals and auctions!
          </h2>
          <p className="text-orange-100 text-lg">
            Sign up for our newsletter to get the best of Flogit.je delivered to your inbox
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white border-0 focus:ring-2 focus:ring-orange-300"
            />
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
