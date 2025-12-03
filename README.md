
<div align="center">

# 💎 Liquid Neon Persian Picker
### The Ultimate High-End Jalali Date Range Picker for React

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18%2B-61DAFB.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0%2B-06B6D4.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Powered-purple.svg)](https://www.framer.com/motion/)

<br />

**Liquid Neon** is not just a date picker; it's a **UI experience**.  
Built with a focus on **Glassmorphism**, **Cyberpunk Aesthetics**, and **Fluid Physics**, it provides a fully responsive Persian (Jalali) date range selection interface that feels alive.

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Configuration](#-configuration) • [فارسی](#-مستندات-فارسی)

</div>

---

## ✨ Features

### 🎨 Visual Engineering
*   **Cinema-Grade Glassmorphism**: Multi-layer backdrop blurs, noise textures, and specular reflections.
*   **Neon Aesthetics**: Dynamic glow effects that react to user interaction.
*   **Fluid Animations**: Powered by `framer-motion` for spring-physics transitions, directional sliding, and staggered entrances.

### 🧠 Smart UX
*   **Smart Trigger**: A compact button that intelligently expands on hover or selection to show detailed date information in a stacked layout.
*   **Auto-Close Timer**: Detects inactivity and automatically closes the modal after 5 seconds to keep the UI clean.
*   **Smart Inputs**: Single-day selection logic (hides range if start == end) and intuitive "From/To" display.

### 📅 Core Functionality
*   **Full Jalali Support**: Built on `date-fns-jalali` for precise Persian calendar calculations.
*   **Range Selection**: Intuitive start and end date picking with visual highlighting.
*   **Shortcuts Sidebar**: Quick access to "Today", "Yesterday", "This Week", and "Last Month".
*   **Month/Year Navigator**: A dedicated grid view for jumping between months and years quickly.

### 📱 Adaptive Responsiveness
*   **Desktop**: Dual-calendar view with a sidebar.
*   **Tablet (Portrait)**: optimized single view with 4-column grids.
*   **Mobile (Landscape)**: Specialized split-view layout.
*   **Mobile (Portrait)**: Bottom-sheet style modal.

---

## 📦 Installation

Install the component and its peer dependencies:

```bash
npm install date-fns-jalali framer-motion lucide-react clsx tailwind-merge
# or
yarn add date-fns-jalali framer-motion lucide-react clsx tailwind-merge
```

---

## 🎨 Configuration (Tailwind)

To achieve the neon/glass look, add these presets to your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: '#00F0FF',
          dim: 'rgba(0, 240, 255, 0.1)',
        },
        glass: {
          bg: 'rgba(18, 24, 38, 0.65)',
          border: 'rgba(255, 255, 255, 0.12)',
        }
      },
      fontFamily: {
        // Ensure you have a Persian font loaded (e.g., Vazirmatn)
        sans: ['Vazirmatn', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)',
      }
    },
  },
}
```

---

## 🚀 Usage

Import the component and use it in your React application. It works best in a dark-themed environment.

```tsx
import React from 'react';
import NeonDatePicker, { DateRange } from './components/NeonDatePicker';

const BookingPage = () => {
  const handleDateChange = (range: DateRange) => {
    console.log("Start Date:", range.startDate);
    console.log("End Date:", range.endDate);
  };

  return (
    <div className="bg-slate-900 min-h-screen p-10 flex justify-center">
      <NeonDatePicker 
        onChange={handleDateChange}
        defaultOpen={false} 
        className="z-50"
      />
    </div>
  );
};

export default BookingPage;
```

---

## ⚙️ Props API

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `onChange` | `(range: DateRange) => void` | `-` | Callback fired when the user clicks "Confirm". Returns `{ startDate, endDate }`. |
| `defaultOpen` | `boolean` | `false` | Whether the picker modal is open initially. |
| `className` | `string` | `""` | Additional CSS classes for the trigger button wrapper. |

---

<br />
<div dir="rtl" align="right">

# 💎 مستندات فارسی
### انتخابگر تاریخ نئون مایع (Liquid Neon)

این کتابخانه یک کامپوننت انتخاب بازه زمانی (Date Range Picker) فوق پیشرفته برای تقویم جلالی است که با تمرکز بر زیبایی‌شناسی سایبرپانک و رابط کاربری شیشه‌ای (Glassmorphism) طراحی شده است.

---

## ✨ ویژگی‌های برجسته

### ۱. مهندسی بصری
*   **افکت‌های شیشه‌ای سینمایی**: استفاده از لایه‌های بلور (Blur) چندگانه، نویز و بازتاب نور.
*   **نئون داینامیک**: تمام اجزا دارای افکت‌های نوری هستند که به حرکت موس واکنش نشان می‌دهند.
*   **انیمیشن‌های فیزیکال**: تمام ترنزیشن‌ها (باز شدن، تغییر ماه، هاور) با فیزیک فنری (Spring Physics) پیاده‌سازی شده‌اند.

### ۲. تجربه کاربری هوشمند (Smart UX)
*   **تریگر هوشمند**: دکمه بازکردن تقویم در حالت عادی یک آیکون/عدد ساده است، اما با هاور شدن باز می‌شود و جزئیات دقیق تاریخ (از/تا) را نشان می‌دهد.
*   **تایمر غیرفعالی**: اگر کاربر ۵ ثانیه با تقویم کار نکند، مودال خودکار بسته می‌شود.
*   **نمایش تک‌روزه**: اگر تاریخ شروع و پایان یکی باشد (مثلاً «امروز»)، نمایشگر هوشمندانه به حالت تک‌خطی تغییر می‌کند.

### ۳. ریسپانسیو بودن (Responsive)
*   **تبلت (عمودی)**: گرید‌ها به ۴ ستون تغییر می‌کنند تا فضای خالی پر شود.
*   **موبایل**: تبدیل به یک مودال تمام‌صفحه یا Bottom Sheet بهینه شده برای لمس.
*   **دسکتاپ**: نمای دوگانه (Dual View) با سایدبار میانبرها.

---

## 🚀 راهنمای نصب

```bash
npm install date-fns-jalali framer-motion lucide-react clsx tailwind-merge
```

## 🛠 نحوه استفاده

```tsx
import NeonDatePicker from './components/NeonDatePicker';

function App() {
  return (
    <div className="bg-dark text-right" dir="rtl">
      <NeonDatePicker 
        onChange={(range) => console.log('بازه انتخاب شده:', range)} 
      />
    </div>
  );
}
```

## 🏗 ساختار فایل‌ها

*   `components/NeonDatePicker/index.ts`: نقطه ورود کتابخانه.
*   `DesktopView.tsx` / `MobileView.tsx`: لایه‌های جداگانه برای دستگاه‌های مختلف.
*   `styles.ts`: تمام استایل‌های Tailwind و Variantهای انیمیشن در اینجا متمرکز شده‌اند.
*   `utils.ts`: توابع کمکی تقویم جلالی.

</div>
