
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  isSameDay,
  isWithinInterval,
  startOfWeek,
  endOfWeek,
  subDays,
  isBefore,
  isAfter,
  startOfDay,
  getYear,
  setYear,
  setMonth,
  getMonth,
  addYears,
  subYears
} from 'date-fns-jalali';

export const isValidDate = (date: any): date is Date => {
  return date instanceof Date && !isNaN(date.getTime());
};

export const generateMonthGrid = (currentDate: Date): Date[] => {
  const start = startOfWeek(startOfMonth(currentDate), { weekStartsOn: 6 }); // Saturday start
  const end = endOfWeek(endOfMonth(currentDate), { weekStartsOn: 6 });
  return eachDayOfInterval({ start, end });
};

export const formatDate = (date: Date, formatStr: string = 'yyyy/MM/dd'): string => {
  return format(date, formatStr);
};

export const formatMonthYear = (date: Date): string => {
  return format(date, 'MMMM yyyy');
};

export const getJalaliYear = (date: Date): number => getYear(date);
export const getJalaliMonth = (date: Date): number => getMonth(date);

export const isDateInRange = (date: Date, startDate: Date | null, endDate: Date | null, hoverDate: Date | null): 'start' | 'end' | 'middle' | 'hover-middle' | null => {
  if (!startDate) return null;

  if (isSameDay(date, startDate)) return 'start';
  if (endDate && isSameDay(date, endDate)) return 'end';

  if (startDate && endDate) {
    if (isWithinInterval(date, { start: startDate, end: endDate })) {
      return 'middle';
    }
  }

  if (startDate && !endDate && hoverDate) {
    if (isAfter(hoverDate, startDate)) {
       if (isWithinInterval(date, { start: startDate, end: hoverDate })) {
         return 'hover-middle';
       }
    }
  }

  return null;
};

export const WEEKDAYS = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

export const PERSIAN_MONTHS = [
  'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
  'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
];

export {
  addMonths,
  subMonths,
  addYears,
  subYears,
  setYear,
  setMonth,
  isSameDay,
  subDays,
  startOfMonth,
  endOfMonth,
  startOfDay,
  isBefore,
  isAfter
};
