import Header from './Header.jsx'
import BottomNav from './BottomNav.jsx'
import React from 'react';

function ChillboxLayout({ children }) {
  return (
 <div className="min-h-screen bg-gradient-to-b from-purple-700 to-purple-900 flex flex-col items-center text-white">
    <Header />
      <main className="flex-grow container mx-auto px-4 py-6 w-full">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}

export default ChillboxLayout;
