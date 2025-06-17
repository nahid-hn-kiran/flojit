
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About Flogit.je</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                Flogit.je is Jersey's premier online auction and marketplace platform, connecting local buyers and sellers in a safe, secure, and simple environment.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to create a trusted community where Jersey residents can buy and sell items locally, supporting the local economy while providing a convenient and safe trading experience.
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
              <ul className="text-gray-600 mb-6">
                <li className="mb-2">• <strong>Safety First:</strong> We prioritize the security of our users through secure payment processing and local meetup recommendations.</li>
                <li className="mb-2">• <strong>Community Focused:</strong> Built exclusively for Jersey residents, fostering local connections and supporting the island's economy.</li>
                <li className="mb-2">• <strong>Transparency:</strong> Clear, honest listings and secure messaging systems that protect user privacy.</li>
                <li className="mb-2">• <strong>Simplicity:</strong> An easy-to-use platform that makes buying and selling straightforward for everyone.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
