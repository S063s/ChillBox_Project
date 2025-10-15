import React from 'react';

export default function SectionTabs() {
  return (
    <div className="flex justify-around w-10/12 mt-2">
      <div className="bg-gray-400 px-4 py-2 rounded-full">RECENTLY PLAYED</div>
      <div className="bg-gray-400 px-4 py-2 rounded-full">RECOMMENDATIONS</div>
    </div>
  );
}
