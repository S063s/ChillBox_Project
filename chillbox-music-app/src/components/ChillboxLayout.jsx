import Header from './Header.jsx'
import BottomNav from './BottomNav.jsx'
import React from 'react';

function ChillboxLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#A307CA]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 w-full">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}

export default ChillboxLayout;
