
import { Variants } from 'framer-motion';

export const styles = {
  // Modal & Trigger
  overlay: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-all",
  triggerButton: "group flex items-center gap-3 bg-glass-bg border border-glass-border px-4 py-3 rounded-xl hover:border-neon/50 hover:bg-glass-bg/80 transition-all duration-300 min-w-[240px] cursor-pointer shadow-lg relative",
  triggerIcon: "text-neon group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all",
  triggerText: "text-slate-300 font-medium group-hover:text-white",
  triggerReset: "absolute left-3 p-1 rounded-full hover:bg-white/10 text-slate-500 hover:text-neon transition-colors z-10",
  
  // Containers
  glassContainer: "relative overflow-hidden bg-glass-bg backdrop-blur-2xl border border-glass-border shadow-2xl flex flex-col md:flex-row max-h-[90vh]",
  sidebar: "bg-slate-900/40 border-glass-border backdrop-blur-md overflow-y-auto",
  
  // Header & Typography
  headerTitle: "text-xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] cursor-pointer hover:text-neon transition-colors select-none",
  
  // Grid
  gridDay: "relative flex items-center justify-center rounded-xl text-sm transition-all duration-300 select-none",
  dayStartEnd: "bg-neon text-black font-bold shadow-neon-strong z-10",
  dayMiddle: "bg-neon/10 text-neon font-medium z-0",
  dayDisabled: "text-slate-700 opacity-40 cursor-default",
  dayDefault: "text-slate-300 hover:bg-white/10 hover:text-white hover:border hover:border-white/20",
  
  // Scrollbars & Utilities
  scrollBar: "scrollbar-thin scrollbar-thumb-neon/20 scrollbar-track-transparent hover:scrollbar-thumb-neon/40",
  
  // Month/Year Selector
  monthButton: "rounded-xl font-bold border border-white/5 hover:border-neon/50 hover:bg-neon/10 hover:text-neon transition-all duration-300 flex items-center justify-center w-full relative overflow-hidden",
  monthButtonActive: "bg-neon text-black shadow-neon border-transparent",

  // Action Footer
  actionFooter: "border-t border-white/10 p-4 flex items-center justify-between bg-slate-900/60 backdrop-blur-md",
  confirmBtn: "bg-neon text-black font-bold px-6 py-2 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:bg-[#33f2ff] transition-all text-sm",
  cancelBtn: "text-slate-400 hover:text-white px-4 py-2 transition-colors text-sm font-medium"
};

export const animations: {
  overlay: Variants;
  container: Variants;
  day: Variants;
} = {
  overlay: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  },
  container: {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 }
    },
    exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } }
  },
  day: {
    hover: { scale: 1.15, zIndex: 10, transition: { type: 'spring', stiffness: 400 } },
    tap: { scale: 0.9 }
  }
};
