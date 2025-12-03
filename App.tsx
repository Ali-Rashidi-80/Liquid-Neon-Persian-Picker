
import React from 'react';
import NeonDatePicker, { DateRange } from './components/NeonDatePicker';

function App() {
  const handleRangeChange = (range: DateRange) => {
    console.log("Selected Range:", range);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      <div className="z-10 w-full max-w-5xl flex flex-col items-center gap-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-500 drop-shadow-[0_0_15px_rgba(0,240,255,0.3)] tracking-tight">
            انتخابگر تاریخ
          </h1>
          <p className="text-slate-400 text-lg font-light tracking-wide">
            Jalali Liquid Glass Interface
          </p>
        </div>

        {/* The Picker is now a trigger button that opens a modal */}
        <NeonDatePicker onChange={handleRangeChange} />

        <div className="text-slate-600 text-sm mt-32 max-w-md text-center leading-relaxed">
           Click the button above to open the Liquid Neon Picker. 
           Designed with full responsive behaviors for mobile portrait and landscape.
        </div>
      </div>
    </div>
  );
}

export default App;
