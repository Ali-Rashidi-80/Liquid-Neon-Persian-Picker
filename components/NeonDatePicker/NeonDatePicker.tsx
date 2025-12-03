
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, X } from 'lucide-react';
import DesktopView from './DesktopView';
import MobileView from './MobileView';
import * as Jalali from './utils';
import { NeonDatePickerProps, ShortcutType, ViewMode } from './types';
import { styles, animations } from './styles';

const NeonDatePicker: React.FC<NeonDatePickerProps> = ({ onChange, className = '', defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Committed State (Trigger)
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  
  // Temporary State (Modal)
  const [tempStartDate, setTempStartDate] = useState<Date | null>(null);
  const [tempEndDate, setTempEndDate] = useState<Date | null>(null);
  
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [activeShortcut, setActiveShortcut] = useState<ShortcutType | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('calendar');
  const [isMobile, setIsMobile] = useState(false);

  // Sync internal state when opening modal
  useEffect(() => {
    if (isOpen) {
      setTempStartDate(startDate);
      setTempEndDate(endDate);
      // If we have a range, set current view to start date
      if (startDate) setCurrentDate(startDate);
    }
  }, [isOpen, startDate, endDate]);

  // Responsive Check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDateClick = (day: Date) => {
    setActiveShortcut(null);

    // Scenario 1: No start date selected yet
    if (!tempStartDate) {
      setTempStartDate(day);
      setTempEndDate(null);
      return;
    }

    // Scenario 2: Start date selected, no end date
    if (tempStartDate && !tempEndDate) {
      if (Jalali.isBefore(day, tempStartDate)) {
        setTempStartDate(day); // Reset start if clicked before
      } else {
        setTempEndDate(day); // Complete the range
      }
      return;
    }

    // Scenario 3: Full range selected - Smart Adjustment
    if (tempStartDate && tempEndDate) {
      if (Jalali.isBefore(day, tempStartDate)) {
        // Clicked before current start -> New Range Start
        setTempStartDate(day);
        setTempEndDate(null);
      } else {
        // Clicked after current start -> Adjust End Date (Keep Start)
        setTempEndDate(day);
      }
    }
  };

  const handleDateHover = (day: Date) => {
    if (tempStartDate && !tempEndDate) {
      setHoverDate(day);
    }
  };

  const handleReset = () => {
    // Reset committed state immediately
    setStartDate(null);
    setEndDate(null);
    setTempStartDate(null);
    setTempEndDate(null);
    setActiveShortcut(null);
    if (onChange) onChange({ startDate: null, endDate: null });
  };

  const handleShortcut = (type: ShortcutType) => {
    // Toggle logic
    if (activeShortcut === type) {
      setActiveShortcut(null);
      setTempStartDate(null);
      setTempEndDate(null);
      return;
    }

    setActiveShortcut(type);
    const today = new Date();
    let newStart: Date | null = null;
    let newEnd: Date | null = null;

    switch (type) {
      case ShortcutType.TODAY:
        newStart = today;
        newEnd = today;
        break;
      case ShortcutType.YESTERDAY:
        newStart = Jalali.subDays(today, 1);
        newEnd = Jalali.subDays(today, 1);
        break;
      case ShortcutType.THIS_WEEK:
        newStart = Jalali.subDays(today, 6); 
        newEnd = today;
        break;
      case ShortcutType.LAST_MONTH:
        const lastMonth = Jalali.subMonths(today, 1);
        newStart = Jalali.startOfMonth(lastMonth);
        newEnd = Jalali.endOfMonth(lastMonth);
        setCurrentDate(lastMonth);
        break;
    }
    setTempStartDate(newStart);
    setTempEndDate(newEnd);
    setViewMode('calendar'); 
  };

  const handleConfirm = () => {
    setStartDate(tempStartDate);
    setEndDate(tempEndDate);
    if (onChange) {
      onChange({ startDate: tempStartDate, endDate: tempEndDate });
    }
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleMonthChange = (amount: number) => {
    setCurrentDate(prev => Jalali.addMonths(prev, amount));
  };

  const handleSelectYear = (year: number) => {
    setCurrentDate(prev => Jalali.setYear(prev, year));
  };

  const handleSelectMonth = (monthIndex: number) => {
    setCurrentDate(prev => Jalali.setMonth(prev, monthIndex));
    setViewMode('calendar');
  };

  const viewProps = {
    currentDate,
    startDate: tempStartDate, // Pass temporary state to views
    endDate: tempEndDate,
    hoverDate,
    activeShortcut,
    viewMode,
    onDateClick: handleDateClick,
    onDateHover: handleDateHover,
    onShortcut: handleShortcut,
    onMonthChange: handleMonthChange,
    onViewModeChange: setViewMode,
    onSelectYear: handleSelectYear,
    onSelectMonth: handleSelectMonth,
    onConfirm: handleConfirm,
    onCancel: handleCancel,
  };

  const getTriggerText = () => {
    if (startDate && endDate) {
      return `${Jalali.formatDate(startDate)} - ${Jalali.formatDate(endDate)}`;
    }
    if (startDate) return Jalali.formatDate(startDate);
    return "انتخاب بازه زمانی...";
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`${styles.triggerButton} ${className}`}
      >
        <CalendarIcon className={`${styles.triggerIcon} w-5 h-5`} />
        <span className={styles.triggerText}>
          {getTriggerText()}
        </span>
        
        {startDate && (
          <div 
            role="button"
            onClick={(e) => {
              e.stopPropagation();
              handleReset();
            }}
            className={styles.triggerReset}
            title="پاک کردن"
          >
            <X size={16} />
          </div>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.overlay}
            variants={animations.overlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute top-4 left-4 z-50 md:hidden">
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                  className="p-2 rounded-full bg-slate-800/50 text-white border border-white/10 hover:bg-neon/20 transition-colors"
                >
                   <X className="w-6 h-6" />
                </button>
            </div>

            {isMobile ? (
              <MobileView {...viewProps} />
            ) : (
              <DesktopView {...viewProps} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NeonDatePicker;
