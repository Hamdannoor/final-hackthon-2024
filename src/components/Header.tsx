import React from "react";

const Header = () => {
  return (
    <header className="bg-white text-black">
      <div className="container mx-auto flex items-center justify-between p-4">
    
        <div className="text-lg font-bold">Bandage</div>

        
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">Shop</a>
          <a href="#" className="hover:text-blue-500">About</a>
          <a href="#" className="hover:text-blue-500">Blog</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
          <a href="#" className="hover:text-blue-500">Pages</a>
        </nav>

        
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-blue-500">Login / Register</a>
          <button className="hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h.01M12 7h.01M16 7h.01M8 11h8M8 15h4" />
            </svg>
          </button>
          <button className="hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h18M3 12h18M3 16h18" />
            </svg>
          </button>
          <button className="hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 11h18M3 15h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
