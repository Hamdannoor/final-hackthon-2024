import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        
          <div>
            <h3 className="font-bold mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

        
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

        
          <div>
            <h3 className="font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>iOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

    
          <div>
            <h3 className="font-bold mb-4">Get In Touch</h3>
            <form>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md mb-4"
              />
              <button className="w-full bg-blue-500 text-white py-2 rounded-md">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor amet</p>
          </div>
        </div>

        <div className="border-t mt-10 pt-4 text-center text-sm text-gray-500">
          Made With Love By Finland All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;