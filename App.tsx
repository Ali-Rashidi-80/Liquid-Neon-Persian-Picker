import React from 'react';
import NeonDatePicker, { DateRange } from './components/NeonDatePicker';

function App() {
  const handleRangeChange = (range: DateRange) => {
    console.log("Selected Range:", range);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0f172a] relative overflow-hidden">
       {/* Minimal Layout: Only the Picker */}
       <NeonDatePicker onChange={handleRangeChange} />
    </div>
  );
}

export default App;