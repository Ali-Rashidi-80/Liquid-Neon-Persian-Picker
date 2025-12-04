
<div align="center">

# 💎 Liquid Neon Persian Picker

### The Ultimate High-End Jalali Date Range Picker for React

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18%2B-61DAFB.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6.svg)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Powered-purple.svg)](https://www.framer.com/motion/)

<br />

**Liquid Neon** is not just a date picker; it's a **UI experience**.  
Built with a focus on **Glassmorphism**, **Cyberpunk Aesthetics**, and **Fluid Physics**, it provides a fully responsive Persian (Jalali) date range selection interface that feels alive.

[Features](#-features) • [Installation](#-installation) • [Quick Start](#-quick-start) • [فارسی](#-مستندات-فارسی)

</div>

---

## ✨ Features

### 🎨 Visual Engineering
- **Cinema-Grade Glassmorphism**: Multi-layer backdrop blurs, noise textures, and specular reflections
- **Neon Aesthetics**: Dynamic glow effects that react to user interaction
- **Fluid Animations**: Powered by `framer-motion` for spring-physics transitions

### 📅 Core Functionality
- **Full Jalali Support**: Built on `date-fns-jalali` for precise Persian calendar calculations
- **Range Selection**: Intuitive start and end date picking with visual highlighting
- **Shortcuts Sidebar**: Quick access to "Today", "Yesterday", "This Week", and "Last Month"
- **Month/Year Navigator**: Dedicated grid view for jumping between months and years

### 📱 Adaptive Responsiveness
- **Desktop**: Dual-calendar view with sidebar
- **Tablet (Portrait)**: Optimized single view with 4-column grids
- **Mobile (Landscape)**: Specialized split-view layout
- **Mobile (Portrait)**: Bottom-sheet style modal

---

## 📦 Installation

### Step 1: Copy the Component

Copy the entire `components/NeonDatePicker` folder and `styles/neon-datepicker.css` into your project:

```
your-project/
├── src/
│   ├── components/
│   │   └── NeonDatePicker/          <- Copy this folder
│   │       ├── index.ts
│   │       ├── NeonDatePicker.tsx
│   │       ├── DesktopView.tsx
│   │       ├── MobileView.tsx
│   │       ├── LiquidButton.tsx
│   │       ├── MonthYearSelector.tsx
│   │       ├── styles.ts
│   │       ├── types.ts
│   │       └── utils.ts
│   └── styles/
│       └── neon-datepicker.css      <- Copy this file
```

### Step 2: Install Dependencies

```bash
npm install date-fns-jalali framer-motion lucide-react
# or
yarn add date-fns-jalali framer-motion lucide-react
```

### Step 3: Import the CSS

Add the CSS import to your main CSS file or App component:

```css
/* In your main CSS file (e.g., index.css or App.css) */
@import './styles/neon-datepicker.css';
```

Or in your React component:

```tsx
import './styles/neon-datepicker.css';
```

### Step 4: Add Vazirmatn Font (Recommended)

For best Persian text rendering, add Vazirmatn font:

```html
<!-- In your index.html -->
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
```

---

## 🚀 Quick Start

```tsx
import React, { useState } from 'react';
import NeonDatePicker from './components/NeonDatePicker';
import { DateRange } from './components/NeonDatePicker/types';
import './styles/neon-datepicker.css';

function App() {
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null
  });

  return (
    <div className="bg-slate-900 min-h-screen p-10" dir="rtl">
      <NeonDatePicker 
        onChange={setDateRange}
        onReset={() => setDateRange({ startDate: null, endDate: null })}
      />
      
      {dateRange.startDate && (
        <div className="mt-4 text-white">
          <p>شروع: {dateRange.startDate.toLocaleDateString('fa-IR')}</p>
          <p>پایان: {dateRange.endDate?.toLocaleDateString('fa-IR')}</p>
        </div>
      )}
    </div>
  );
}

export default App;
```

---

## ⚙️ Props API

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `onChange` | `(range: DateRange) => void` | `-` | Callback when user clicks "Confirm". Returns `{ startDate, endDate }` |
| `onReset` | `() => void` | `-` | Callback when user clicks "Reset" |
| `defaultOpen` | `boolean` | `false` | Whether picker modal is initially open |
| `className` | `string` | `""` | Additional CSS classes for the trigger button wrapper |

### DateRange Type

```typescript
interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}
```

---

## 🎨 Customization

### Changing the Neon Color

Edit `styles/neon-datepicker.css` and search for `#00F0FF` to replace with your preferred color:

```css
/* Example: Change to purple neon */
.text-neon {
    color: #A855F7 !important;
}
.bg-neon {  
    background-color: #A855F7 !important;
}
/* ... update all other neon color references */
```

---

## 📁 File Structure

```
NeonDatePicker/
├── index.ts              # Main export
├── NeonDatePicker.tsx    # Core component with state management
├── DesktopView.tsx       # Desktop dual-calendar layout
├── MobileView.tsx        # Mobile bottom-sheet layout
├── LiquidButton.tsx      # Animated button component
├── MonthYearSelector.tsx # Month/Year picker overlay
├── styles.ts             # Tailwind class definitions & animations
├── types.ts              # TypeScript interfaces
└── utils.ts              # Jalali calendar utilities

styles/
└── neon-datepicker.css   # Required CSS utilities
```

---

<br />
<div dir="rtl" align="right">

# 💎 مستندات فارسی

### انتخابگر تاریخ نئون مایع (Liquid Neon)

این کتابخانه یک کامپوننت انتخاب بازه زمانی فوق پیشرفته برای تقویم جلالی است.

---

## ✨ ویژگی‌های برجسته

### ۱. مهندسی بصری
*   **افکت‌های شیشه‌ای سینمایی**: استفاده از لایه‌های بلور چندگانه
*   **نئون داینامیک**: افکت‌های نوری که به حرکت موس واکنش نشان می‌دهند
*   **انیمیشن‌های فیزیکال**: تمام ترنزیشن‌ها با فیزیک فنری پیاده‌سازی شده‌اند

### ۲. تجربه کاربری هوشمند
*   **تریگر هوشمند**: دکمه هوشمندی که با هاور جزئیات نشان می‌دهد
*   **تایمر غیرفعالی**: بسته شدن خودکار بعد از ۵ ثانیه بدون فعالیت
*   **میانبرهای سریع**: امروز، دیروز، هفته جاری، ماه قبل

---

## 🚀 راهنمای نصب سریع

### ۱. کپی کردن فایل‌ها
پوشه `components/NeonDatePicker` و فایل `styles/neon-datepicker.css` را به پروژه خود کپی کنید.

### ۲. نصب وابستگی‌ها

```bash
npm install date-fns-jalali framer-motion lucide-react
```

### ۳. ایمپورت CSS

```css
@import './styles/neon-datepicker.css';
```

### ۴. استفاده

```tsx
import NeonDatePicker from './components/NeonDatePicker';

function App() {
  return (
    <div dir="rtl">
      <NeonDatePicker 
        onChange={(range) => console.log('بازه انتخاب شده:', range)} 
      />
    </div>
  );
}
```

---

## 📋 نیازمندی‌ها

| پکیج | نسخه |
| :--- | :--- |
| React | 18+ |
| date-fns-jalali | ^4.1.0 |
| framer-motion | ^12.0.0 |
| lucide-react | ^0.400.0 |

---

## 🤝 مشارکت

از مشارکت شما استقبال می‌کنیم! لطفاً با ایجاد Issue یا Pull Request در گیت‌هاب مشارکت کنید.

---

## 📄 مجوز

این پروژه تحت مجوز MIT منتشر شده است.

</div>
