import React, { useState, useEffect } from 'react';
import './App.css';

// ==========================================
// PREMIUM VECTOR LOGOS & ICONS (No emojis)
// ==========================================

const InstagramLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TelegramLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const PhoneLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const VectorBurgerLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 15h18" />
    <path d="M3 11h18" />
    <path d="M3 7a9 9 0 0 1 18 0v2H3V7Z" />
    <path d="M5 19a3 3 0 0 0 14 0" />
  </svg>
);

const LocationPinLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const RobotLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8.01" y2="16" />
    <line x1="16" y1="16" x2="16.01" y2="16" />
    <path d="M2 14h1" />
    <path d="M21 14h1" />
  </svg>
);


// ==========================================
// SVG Assets for 3D Ingredient Builder
// ==========================================

const BunTopSVG = () => (
  <svg viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
    <defs>
      <radialGradient id="bunTopGrad" cx="50%" cy="30%" r="50%">
        <stop offset="0%" stopColor="#f7c873" />
        <stop offset="70%" stopColor="#d18a2c" />
        <stop offset="100%" stopColor="#965611" />
      </radialGradient>
    </defs>
    <path d="M10 80 C 10 20, 290 20, 290 80 C 290 100, 10 100, 10 80 Z" fill="url(#bunTopGrad)" />
    <ellipse cx="70" cy="50" rx="3" ry="6" fill="#fff" transform="rotate(30, 70, 50)" opacity="0.9" />
    <ellipse cx="110" cy="40" rx="3" ry="6" fill="#fff" transform="rotate(-15, 110, 40)" opacity="0.9" />
    <ellipse cx="150" cy="35" rx="3" ry="6" fill="#fff" transform="rotate(10, 150, 35)" opacity="0.9" />
    <ellipse cx="190" cy="42" rx="3" ry="6" fill="#fff" transform="rotate(-40, 190, 42)" opacity="0.9" />
    <ellipse cx="230" cy="55" rx="3" ry="6" fill="#fff" transform="rotate(25, 230, 55)" opacity="0.9" />
    <ellipse cx="140" cy="60" rx="3" ry="6" fill="#fff" transform="rotate(-10, 140, 60)" opacity="0.9" />
    <ellipse cx="175" cy="58" rx="3" ry="6" fill="#fff" transform="rotate(15, 175, 58)" opacity="0.9" />
  </svg>
);

const BaconSVG = () => (
  <svg viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
    <defs>
      <linearGradient id="baconGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7a1c1c" />
        <stop offset="25%" stopColor="#bd3a3a" />
        <stop offset="50%" stopColor="#f3bebe" />
        <stop offset="75%" stopColor="#bd3a3a" />
        <stop offset="100%" stopColor="#631313" />
      </linearGradient>
    </defs>
    <path d="M15 30 Q 35 10, 55 30 T 95 30 T 135 30 T 175 30 T 215 30 T 255 30 T 285 30 L 285 45 Q 255 45, 235 25 T 195 25 T 155 25 T 115 25 T 75 25 T 35 25 L 15 30 Z" fill="url(#baconGrad)" />
    <path d="M20 32 Q 35 15, 50 32 T 80 32 T 110 32 T 140 32 T 170 32 T 200 32 T 230 32 T 280 32" stroke="#ffcccc" strokeWidth="2" opacity="0.4" />
  </svg>
);

const CheeseSVG = () => (
  <svg viewBox="0 0 300 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
    <defs>
      <linearGradient id="cheeseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffd23f" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <path d="M15 15 L 285 15 L 280 35 Q 260 55, 250 35 Q 230 65, 210 35 L 170 35 Q 150 70, 130 35 L 90 35 Q 70 60, 50 35 L 20 35 Z" fill="url(#cheeseGrad)" />
  </svg>
);

const PattySVG = () => (
  <svg viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
    <defs>
      <linearGradient id="pattyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5c2e16" />
        <stop offset="50%" stopColor="#3d1d0c" />
        <stop offset="100%" stopColor="#241006" />
      </linearGradient>
    </defs>
    <rect x="15" y="15" width="270" height="55" rx="27.5" fill="url(#pattyGrad)" />
    <rect x="35" y="25" width="6" height="35" rx="3" fill="#1b0b04" opacity="0.8" transform="rotate(-15, 35, 25)" />
    <rect x="85" y="22" width="6" height="38" rx="3" fill="#1b0b04" opacity="0.8" transform="rotate(-15, 85, 22)" />
    <rect x="135" y="20" width="6" height="40" rx="3" fill="#1b0b04" opacity="0.8" transform="rotate(-15, 135, 20)" />
    <rect x="185" y="22" width="6" height="38" rx="3" fill="#1b0b04" opacity="0.8" transform="rotate(-15, 185, 22)" />
    <rect x="235" y="25" width="6" height="35" rx="3" fill="#1b0b04" opacity="0.8" transform="rotate(-15, 235, 25)" />
    <circle cx="60" cy="45" r="4" fill="#7a4325" opacity="0.7" />
    <circle cx="160" cy="50" r="4.5" fill="#7a4325" opacity="0.7" />
    <circle cx="250" cy="48" r="4" fill="#7a4325" opacity="0.7" />
  </svg>
);

const LettuceSVG = () => (
  <svg viewBox="0 0 300 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
    <defs>
      <linearGradient id="lettuceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#66bb6a" />
        <stop offset="60%" stopColor="#43a047" />
        <stop offset="100%" stopColor="#2e7d32" />
      </linearGradient>
    </defs>
    <path d="M15 35 C 10 20, 30 15, 45 25 C 60 10, 85 10, 100 25 C 115 15, 135 10, 150 25 C 165 10, 185 12, 200 25 C 215 15, 240 15, 255 25 C 270 15, 290 20, 285 35 C 280 50, 260 55, 245 45 C 230 55, 210 50, 195 45 C 180 55, 160 55, 145 45 C 130 55, 110 55, 95 45 C 80 55, 60 50, 45 45 C 30 55, 15 45, 15 35 Z" fill="url(#lettuceGrad)" />
    <path d="M45 25 Q 55 35, 75 35" stroke="#a5d6a7" strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M150 25 Q 155 38, 175 35" stroke="#a5d6a7" strokeWidth="2" fill="none" opacity="0.6" />
  </svg>
);

const SauceSVG = () => (
  <svg viewBox="0 0 300 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
    <defs>
      <linearGradient id="sauceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a82316" />
        <stop offset="100%" stopColor="#540b04" />
      </linearGradient>
    </defs>
    <path d="M30 15 Q 50 35, 70 20 Q 90 45, 110 15 Q 140 40, 160 20 Q 190 48, 210 20 Q 240 38, 270 15 Q 280 30, 260 35 Q 230 45, 210 32 Q 180 50, 150 32 Q 120 48, 95 32 Q 60 48, 40 32 Q 20 25, 30 15 Z" fill="url(#sauceGrad)" />
    <path d="M35 18 Q 45 28, 55 20" stroke="#f1a69e" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
  </svg>
);

const BunBottomSVG = () => (
  <svg viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
    <defs>
      <linearGradient id="bunBottomGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f5bd56" />
        <stop offset="40%" stopColor="#c77d20" />
        <stop offset="100%" stopColor="#874807" />
      </linearGradient>
    </defs>
    <path d="M15 15 L 285 15 C 285 15, 290 60, 260 70 C 230 80, 70 80, 40 70 C 10 60, 15 15, 15 15 Z" fill="url(#bunBottomGrad)" />
  </svg>
);

const ingredientComponents = {
  bun_top: <BunTopSVG />,
  bacon: <BaconSVG />,
  cheese: <CheeseSVG />,
  patty: <PattySVG />,
  lettuce: <LettuceSVG />,
  sauce: <SauceSVG />,
  bun_bottom: <BunBottomSVG />
};

const ingredientMetadata = {
  bun_top: { nameEn: 'Brioche Bun (Top)', nameUz: 'Briosh Bulochkasi (Tepasi)', nameUzCyr: 'Бриош Булочкаси (Тепаси)', nameRu: 'Бриошь булочка (Верх)', calories: 150, protein: 4, weight: 50, color: '#d18a2c' },
  bacon: { nameEn: 'Crispy Bacon', nameUz: 'Qarsillaydigan Bekon', nameUzCyr: 'Қарсиллайдиган Бекон', nameRu: 'Хрустящий бекон', calories: 80, protein: 6, weight: 15, color: '#bd3a3a' },
  cheese: { nameEn: 'Cheddar Cheese', nameUz: 'Chedder Pishlog\'i', nameUzCyr: 'Чеддер Пишлоғи', nameRu: 'Сыр Чеддер', calories: 110, protein: 7, weight: 20, color: '#ffd23f' },
  patty: { nameEn: 'Angus Patty', nameUz: 'Angus Katleti', nameUzCyr: 'Ангус Котлети', nameRu: 'Котлета Ангус', calories: 280, protein: 22, weight: 150, color: '#5c2e16' },
  lettuce: { nameEn: 'Fresh Lettuce', nameUz: 'Yangi Salat Bargi', nameUzCyr: 'Янги Салат Барги', nameRu: 'Свежий салат', calories: 5, protein: 0.5, weight: 10, color: '#4caf50' },
  sauce: { nameEn: 'Smoky BBQ Sauce', nameUz: 'Dudlangan BBQ Sous', nameUzCyr: 'Дудlangan BBQ Соус', nameRu: 'Копченый BBQ соус', calories: 40, protein: 0.1, weight: 15, color: '#a82316' },
  bun_bottom: { nameEn: 'Brioche Bun (Bottom)', nameUz: 'Briosh Bulochkasi (Pasti)', nameUzCyr: 'Бриош Булочкаси (Пасти)', nameRu: 'Бриошь булочка (Низ)', calories: 120, protein: 3, weight: 40, color: '#c77d20' }
};

export default function App() {
  const [lang, setLang] = useState('uz'); // 'uz', 'uzCyr', 'ru', 'en'
  const [openDrawer, setOpenDrawer] = useState(null); // 'menu', 'location', 'bot'
  const [activeLayerIndex, setActiveLayerIndex] = useState(null);

  // 3D Builder State
  const [builderStack, setBuilderStack] = useState([
    'bun_bottom',
    'patty',
    'cheese',
    'lettuce',
    'sauce',
    'bun_top'
  ]);

  // Multilingual Texts
  const t = {
    uz: {
      brand: 'Texas Burger',
      subtitle: 'Haqiqiy eman daraxti dudining ta\'mi dunyosi',
      menu: 'Menyu',
      call: 'Qo\'ng\'iroq',
      address: 'Manzil',
      telegramBot: 'Telegram bot',
      instagram: 'Instagram',
      workingHours: 'Har kuni 10:00 - 23:00',
      phoneText: '+998 95 902 60 70',
      copyright: '© 2026 Texas Burger. Barcha huquqlar himoyalangan.',
      menuDrawerTitle: '🤠 Bizning Menyu & 3D Builder',
      locationDrawerTitle: '📍 Bizning Manzil',
      botDrawerTitle: '🤖 Telegram Botimiz',
      buildYourOwn: 'O\'z burgingizni 3D loyihalang',
      signatureMenu: 'Maxsus Shov-shuvlarimiz',
      add: 'Qo\'shish',
      remove: 'Olib tashlash',
      kcal: 'kkal',
      calories: 'Kaloriya',
      protein: 'Oqsil',
      weight: 'Og\'irlik',
      reset: 'Qaytarish',
      orderCustom: 'Buyurtma Berish',
      botDesc: 'Bizning Telegram botimiz yordamida tezkor buyurtma berishingiz, ballar to\'plashingiz va maxsus kuponlardan foydalanishingiz mumkin!',
      botCta: 'Botni ishga tushirish',
      addressFull: 'Toshkent shahri, Amir Temur ko\'chasi, 45-uy (Amir Temur metro yaqinida)',
      mapCta: 'Xaritada ko\'rish (Google Maps)',
      menu1Title: 'Lonestar Smokehouse',
      menu1Desc: 'Ikki barobar dudlangan Angus go\'shti, bekon, halqa piyoz va BBQ sous.',
      menu2Title: 'Jalapeno Inferno',
      menu2Desc: 'Achchiq jalapeno, olovli chili sous, chedder pishlog\'i va yangi salat bargi.',
      menu3Title: 'Cattleman Classic',
      menu3Desc: 'Shiralı go\'sht, pomidor, tuzlangan bodring va firmaviy barbekyu sous.',
      orderSuccess: 'Sizning ajoyib buyurtmangiz qabul qilindi! Rahmat!'
    },
    uzCyr: {
      brand: 'Texas Burger',
      subtitle: 'Ҳақиқий эман дарахти дудининг таъми дунёси',
      menu: 'Меню',
      call: 'Қўнгғироқ',
      address: 'Манзил',
      telegramBot: 'Телеграм бот',
      instagram: 'Инстаграм',
      workingHours: 'Ҳар куни 10:00 - 23:00',
      phoneText: '+998 95 902 60 70',
      copyright: '© 2026 Texas Burger. Барча ҳуқуқлар ҳимояланган.',
      menuDrawerTitle: '🤠 Бизнинг Меню & 3D Builder',
      locationDrawerTitle: '📍 Бизнинг Манзил',
      botDrawerTitle: '🤖 Телеграм Ботимиз',
      buildYourOwn: 'Ўз бургингизни 3D лойиҳаланг',
      signatureMenu: 'Махсус Шов-шувларимиз',
      add: 'Қошиш',
      remove: 'Олиб ташлаш',
      kcal: 'ккал',
      calories: 'Калория',
      protein: 'Оқсил',
      weight: 'Оғирлик',
      reset: 'Қайтариш',
      orderCustom: 'Буюртма Бериш',
      botDesc: 'Бизнинг Телеграм ботимиз ёрдамида тезкор буюртма беришингиз, баллар тўплашингиз ва махсус купонлардан фойдаланишингиз мумкин!',
      botCta: 'Ботни ишга тушириш',
      addressFull: 'Тошкент шаҳри, Амир Темур кўчаси, 45-уй (Амир Темур метро яқинида)',
      mapCta: 'Харитада кўриш (Google Maps)',
      menu1Title: 'Lonestar Smokehouse',
      menu1Desc: 'Икки баробар дудланган Ангус гўшти, бекон, ҳалқа пиёз ва BBQ соус.',
      menu2Title: 'Jalapeno Inferno',
      menu2Desc: 'Аччиқ жалапено, оловли чили соус, чеддер пишлоғи ва янги салат барги.',
      menu3Title: 'Cattleman Classic',
      menu3Desc: 'Ширали гўшт, помидор, тузланган бодринг ва фирмавий барбекю соус.',
      orderSuccess: 'Сизнинг ажойиб буюртмангиз қабул қилинди! Раҳмат!'
    },
    ru: {
      brand: 'Texas Burger',
      subtitle: 'Мир вкуса легендарного копчения на дубовых дровах',
      menu: 'Меню',
      call: 'Звонок',
      address: 'Адрес',
      telegramBot: 'Телеграм бот',
      instagram: 'Инстаграм',
      workingHours: 'Каждый день 10:00 - 23:00',
      phoneText: '+998 95 902 60 70',
      copyright: '© 2026 Texas Burger. Все права защищены.',
      menuDrawerTitle: '🤠 Наше Меню & 3D Конструктор',
      locationDrawerTitle: '📍 Наш Адрес',
      botDrawerTitle: '🤖 Наш Телеграм Бот',
      buildYourOwn: 'Соберите свой бургер в 3D',
      signatureMenu: 'Наши Фирменные Бургеры',
      add: 'Добавить',
      remove: 'Убрать',
      kcal: 'ккал',
      calories: 'Калории',
      protein: 'Белки',
      weight: 'Вес',
      reset: 'Сбросить',
      orderCustom: 'Заказать Бургер',
      botDesc: 'С помощью нашего Телеграм бота вы можете быстро оформить заказ, копить баллы и получать персональные скидки!',
      botCta: 'Запустить бота',
      addressFull: 'г. Ташкент, пр-т Амира Темура, д. 45 (рядом с метро Амир Темур)',
      mapCta: 'Показать на карте (Google Maps)',
      menu1Title: 'Lonestar Smokehouse',
      menu1Desc: 'Двойная котлета Ангус двойного копчения, бекон, луковые кольца и BBQ соус.',
      menu2Title: 'Jalapeno Inferno',
      menu2Desc: 'Острый халапеньо, огненный чили соус, сыр чеддер и свежие листья салата.',
      menu3Title: 'Cattleman Classic',
      menu3Desc: 'Сочная котлета, томаты, маринованные огурцы и фирменный соус барбекю.',
      orderSuccess: 'Ваш заказ успешно принят! Спасибо!'
    },
    en: {
      brand: 'Texas Burger',
      subtitle: 'The world of authentic oakwood smoked burger passion',
      menu: 'Menu',
      call: 'Call Now',
      address: 'Location',
      telegramBot: 'Telegram bot',
      instagram: 'Instagram',
      workingHours: 'Every day 10:00 AM - 11:00 PM',
      phoneText: '+998 95 902 60 70',
      copyright: '© 2026 Texas Burger. All rights reserved.',
      menuDrawerTitle: '🤠 Our Menu & 3D Builder',
      locationDrawerTitle: '📍 Our Location',
      botDrawerTitle: '🤖 Our Telegram Bot',
      buildYourOwn: 'Design Your 3D Burger Stack',
      signatureMenu: 'Our Signature Selection',
      add: 'Add',
      remove: 'Remove',
      kcal: 'kcal',
      calories: 'Calories',
      protein: 'Protein',
      weight: 'Weight',
      reset: 'Reset Stack',
      orderCustom: 'Order This Build',
      botDesc: 'Order directly through our Telegram Bot to earn loyalty points, access exclusive secret drops, and get faster delivery!',
      botCta: 'Launch Telegram Bot',
      addressFull: '45 Amir Temur Ave, Tashkent, Uzbekistan (near Amir Temur metro station)',
      mapCta: 'View on map (Google Maps)',
      menu1Title: 'Lonestar Smokehouse',
      menu1Desc: 'Double oak-smoked Angus patty, crispy bacon, golden onion rings, cheddar, and dark BBQ.',
      menu2Title: 'Jalapeno Inferno',
      menu2Desc: 'Spicy jalapeno, hot chili glaze, melted cheddar, and crisp lettuce leaves.',
      menu3Title: 'Cattleman Classic',
      menu3Desc: 'Juicy Angus patty, vine-ripe tomatoes, pickles, and sweet BBQ glaze.',
      orderSuccess: 'Your custom gourmet order has been sent to our pitmasters! Thank you!'
    }
  };

  // Stack Builder Stats calculation
  const calculateStats = () => {
    let calories = 0;
    let protein = 0;
    let weight = 0;
    builderStack.forEach(item => {
      const meta = ingredientMetadata[item];
      if (meta) {
        calories += meta.calories;
        protein += meta.protein;
        weight += meta.weight;
      }
    });
    return { calories, protein: parseFloat(protein.toFixed(1)), weight };
  };

  const { calories, protein, weight } = calculateStats();

  const handleAddIngredient = (type) => {
    const newStack = [...builderStack];
    const topBunIndex = newStack.lastIndexOf('bun_top');
    if (topBunIndex !== -1) {
      newStack.splice(topBunIndex, 0, type);
    } else {
      newStack.push(type);
    }
    setBuilderStack(newStack);
  };

  const handleRemoveIngredient = (type) => {
    const newStack = [...builderStack];
    if (type === 'bun_top' && newStack.filter(x => x === 'bun_top').length <= 1) return;
    if (type === 'bun_bottom' && newStack.filter(x => x === 'bun_bottom').length <= 1) return;

    const index = newStack.lastIndexOf(type);
    if (index !== -1) {
      newStack.splice(index, 1);
      setBuilderStack(newStack);
    }
  };

  const handleResetBuilder = () => {
    setBuilderStack(['bun_bottom', 'patty', 'cheese', 'lettuce', 'sauce', 'bun_top']);
  };

  const getIngredientName = (type) => {
    const meta = ingredientMetadata[type];
    if (!meta) return '';
    if (lang === 'uz') return meta.nameUz;
    if (lang === 'uzCyr') return meta.nameUzCyr;
    if (lang === 'ru') return meta.nameRu;
    return meta.nameEn;
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      
      {/* Blurred background image layer */}
      <div 
        className="bg-blur-container" 
        style={{ backgroundImage: `url('/texas_burger_hero.png')` }}
      ></div>

      {/* Floating 3D Background elements (SVGs) */}
      <div className="floating-elements">
        <div className="float-item" style={{ top: '15%', left: '8%', width: '100px', transform: 'rotate(25deg)' }}><BunTopSVG /></div>
        <div className="float-item" style={{ top: '65%', left: '6%', width: '90px', transform: 'rotate(-40deg)', animationDelay: '2s' }}><PattySVG /></div>
        <div className="float-item" style={{ top: '25%', right: '8%', width: '80px', transform: 'rotate(50deg)', animationDelay: '4s' }}><CheeseSVG /></div>
        <div className="float-item" style={{ top: '75%', right: '10%', width: '95px', transform: 'rotate(15deg)', animationDelay: '1s' }}><LettuceSVG /></div>
        <div className="float-item" style={{ top: '45%', left: '75%', width: '70px', transform: 'rotate(-25deg)', animationDelay: '6s' }}><BaconSVG /></div>
      </div>

      {/* Centered Portal frame */}
      <div className="portal-container">
        
        {/* Glowing Logo Avatar */}
        <div className="portal-avatar-wrapper">
          <img src="/texas_burger_hero.png" alt="Texas Burger Logo" className="portal-avatar" />
        </div>

        {/* Title */}
        <h1 className="portal-title">{t[lang].brand}</h1>
        
        {/* Subtitle */}
        <p className="portal-subtitle">{t[lang].subtitle}</p>

        {/* Language Selection Pills */}
        <div className="lang-switcher-row">
          <button className={`lang-pill ${lang === 'uz' ? 'active' : ''}`} onClick={() => setLang('uz')}>UZ</button>
          <button className={`lang-pill ${lang === 'uzCyr' ? 'active' : ''}`} onClick={() => setLang('uzCyr')}>ЎЗ</button>
          <button className={`lang-pill ${lang === 'ru' ? 'active' : ''}`} onClick={() => setLang('ru')}>RU</button>
          <button className={`lang-pill ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
        </div>

        {/* Small Circular Social Links (Using Clean SVGs instead of Emojis) */}
        <div className="social-icons-row">
          <a href="https://instagram.com" target="_blank" className="social-circle-btn">
            <InstagramLogo size={20} />
          </a>
          <a href={`tel:${t[lang].phoneText.replace(/\s+/g, '')}`} className="social-circle-btn">
            <PhoneLogo size={18} />
          </a>
          <a href="https://t.me" target="_blank" className="social-circle-btn">
            <TelegramLogo size={20} />
          </a>
        </div>

        {/* Main Links Stack */}
        <div className="links-stack">
          
          {/* Link 1: Menu & 3D Builder */}
          <a href='https://t.me/texasgamburg_bot' className="portal-link-btn">
            <div className="link-icon-box">
              <LocationPinLogo size={20} />
            </div>
            <span className="link-text">{t[lang].menu}</span>
          </a>

          {/* Link 2: Call Now */}
          <a href={`tel:${t[lang].phoneText.replace(/\s+/g, '')}`} className="portal-link-btn">
            <div className="link-icon-box">
              <PhoneLogo size={20} />
            </div>
            <span className="link-text">{t[lang].call}</span>
          </a>

          {/* Link 3: Location Address */}
          <div className="portal-link-btn" onClick={() => setOpenDrawer('location')}>
            <div className="link-icon-box">
              <LocationPinLogo size={20} />
            </div>
            <span className="link-text">{t[lang].address}</span>
          </div>

          {/* Link 4: Telegram Bot */}
          <div className="portal-link-btn" onClick={() => setOpenDrawer('bot')}>
            <div className="link-icon-box">
              <RobotLogo size={20} />
            </div>
            <span className="link-text">{t[lang].telegramBot}</span>
          </div>

          {/* Link 5: Instagram */}
          <a href="https://instagram.com" target="_blank" className="portal-link-btn">
            <div className="link-icon-box">
              <InstagramLogo size={20} />
            </div>
            <span className="link-text">{t[lang].instagram}</span>
          </a>

        </div>

        {/* Portal Footer */}
        <div className="portal-footer">
          <div className="portal-footer-contact">
            {t[lang].phoneText} &nbsp;•&nbsp; {t[lang].workingHours}
          </div>
          <div className="portal-footer-copy">
            {t[lang].copyright}
          </div>
        </div>

      </div>

      {/* ========================================== */}
      {/* DRAWER 1: SIGNATURE MENU & 3D BUILDER       */}
      {/* ========================================== */}
      <div className={`drawer-overlay ${openDrawer === 'menu' ? 'open' : ''}`} onClick={() => setOpenDrawer(null)}>
        <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
          <div className="drawer-header">
            <h2 className="drawer-title">{t[lang].menuDrawerTitle}</h2>
            <button className="drawer-close-btn" onClick={() => setOpenDrawer(null)}>×</button>
          </div>
          <div className="drawer-body">
            
            {/* Part 1: Interactive 3D Stack Builder */}
            <h3 style={{ fontSize: '18px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <VectorBurgerLogo size={20} /> {t[lang].buildYourOwn}
            </h3>

            <div className="builder-grid-compact">
              
              {/* Dynamic Stack Preview */}
              <div className="builder-canvas-compact scene-3d">
                <div className="plate-compact"></div>
                <div className="stack-compact">
                  {builderStack.map((item, index) => {
                    const isHovered = activeLayerIndex === index;
                    const transformStyle = isHovered 
                      ? 'translateY(-15px) rotateX(10deg) rotateY(-5deg) scale(1.06)' 
                      : 'translateY(0) rotateX(25deg)';

                    return (
                      <div 
                        key={index}
                        style={{
                          width: '100%',
                          zIndex: index + 10,
                          transform: transformStyle,
                          transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                          marginTop: index === 0 ? '0px' : '-35px',
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                        onMouseEnter={() => setActiveLayerIndex(index)}
                        onMouseLeave={() => setActiveLayerIndex(null)}
                      >
                        {ingredientComponents[item]}

                        {isHovered && (
                          <div style={{
                            position: 'absolute',
                            top: '-5px',
                            left: '50%',
                            transform: 'translateX(-50%) translateZ(40px)',
                            background: 'rgba(23, 13, 18, 0.95)',
                            border: '1px solid #f5a623',
                            color: '#fff',
                            padding: '6px 10px',
                            borderRadius: '8px',
                            fontSize: '10px',
                            whiteSpace: 'nowrap',
                            pointerEvents: 'none',
                            zIndex: 100
                          }}>
                            <strong>{getIngredientName(item)}</strong>
                            <br />
                            +{ingredientMetadata[item].calories} kcal
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Stats & Ingredient list */}
              <div className="builder-controls-compact">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', textAlign: 'center', borderBottom: '1px solid var(--glass-border)', paddingBottom: '12px' }}>
                  <div>
                    <div style={{ color: '#f5a623', fontWeight: '800', fontSize: '18px' }}>{calories}</div>
                    <div style={{ fontSize: '9px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{t[lang].calories}</div>
                  </div>
                  <div>
                    <div style={{ color: '#f5a623', fontWeight: '800', fontSize: '18px' }}>{protein}g</div>
                    <div style={{ fontSize: '9px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{t[lang].protein}</div>
                  </div>
                  <div>
                    <div style={{ color: '#f5a623', fontWeight: '800', fontSize: '18px' }}>{weight}g</div>
                    <div style={{ fontSize: '9px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{t[lang].weight}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '180px', overflowY: 'auto', paddingRight: '4px' }}>
                  {Object.keys(ingredientMetadata).map(type => {
                    const meta = ingredientMetadata[type];
                    const count = builderStack.filter(x => x === type).length;
                    return (
                      <div className="compact-ing-item" key={type}>
                        <div>
                          <div className="compact-ing-name">{getIngredientName(type)}</div>
                          <div className="compact-ing-sub">+{meta.calories} {t[lang].kcal}</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <button 
                            onClick={() => handleRemoveIngredient(type)}
                            style={{ width: '24px', height: '24px', borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.06)', color: 'white', cursor: 'pointer' }}
                          >-</button>
                          <span style={{ fontSize: '14px', fontWeight: '700', minWidth: '12px', textAlign: 'center' }}>{count}</span>
                          <button 
                            onClick={() => handleAddIngredient(type)}
                            style={{ width: '24px', height: '24px', borderRadius: '50%', border: 'none', background: '#f5a623', color: '#170d12', fontWeight: 'bold', cursor: 'pointer' }}
                          >+</button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button 
                    onClick={handleResetBuilder}
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', padding: '10px 14px', borderRadius: '12px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}
                  >
                    {t[lang].reset}
                  </button>
                  <button 
                    onClick={() => alert(t[lang].orderSuccess)}
                    style={{ flexGrow: 1, background: 'var(--active-btn-grad)', border: 'none', color: 'white', padding: '10px', borderRadius: '12px', cursor: 'pointer', fontWeight: '700', fontSize: '13px', boxShadow: '0 4px 12px rgba(230,126,34,0.3)' }}
                  >
                    🍔 {t[lang].orderCustom}
                  </button>
                </div>

              </div>

            </div>

            {/* Part 2: Signature Menu Selection */}
            <h3 style={{ fontSize: '18px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '8px', marginTop: '16px' }}>
              ✨ {t[lang].signatureMenu}
            </h3>

            <div className="overlay-menu-grid">
              
              <div className="overlay-menu-card">
                <img src="/texas_burger_hero.png" alt="Lonestar Smokehouse" className="overlay-menu-img" />
                <div className="overlay-menu-info">
                  <div className="overlay-menu-title">{t[lang].menu1Title}</div>
                  <div className="overlay-menu-desc">{t[lang].menu1Desc}</div>
                  <div className="overlay-menu-footer">
                    <span className="overlay-menu-price">$12.99</span>
                    <button className="overlay-menu-btn" onClick={() => alert(`${t[lang].menu1Title} added!`)}>{t[lang].add}</button>
                  </div>
                </div>
              </div>

              <div className="overlay-menu-card">
                <img src="/texas_burger_hero.png" alt="Jalapeno Inferno" className="overlay-menu-img" style={{ filter: 'hue-rotate(40deg) saturate(1.2)' }} />
                <div className="overlay-menu-info">
                  <div className="overlay-menu-title">{t[lang].menu2Title}</div>
                  <div className="overlay-menu-desc">{t[lang].menu2Desc}</div>
                  <div className="overlay-menu-footer">
                    <span className="overlay-menu-price">$11.49</span>
                    <button className="overlay-menu-btn" onClick={() => alert(`${t[lang].menu2Title} added!`)}>{t[lang].add}</button>
                  </div>
                </div>
              </div>

              <div className="overlay-menu-card">
                <img src="/texas_burger_hero.png" alt="Cattleman Classic" className="overlay-menu-img" style={{ filter: 'hue-rotate(-20deg)' }} />
                <div className="overlay-menu-info">
                  <div className="overlay-menu-title">{t[lang].menu3Title}</div>
                  <div className="overlay-menu-desc">{t[lang].menu3Desc}</div>
                  <div className="overlay-menu-footer">
                    <span className="overlay-menu-price">$10.99</span>
                    <button className="overlay-menu-btn" onClick={() => alert(`${t[lang].menu3Title} added!`)}>{t[lang].add}</button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* DRAWER 2: LOCATION MAP                    */}
      {/* ========================================== */}
      <div className={`drawer-overlay ${openDrawer === 'location' ? 'open' : ''}`} onClick={() => setOpenDrawer(null)}>
        <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
          <div className="drawer-header">
            <h2 className="drawer-title">{t[lang].locationDrawerTitle}</h2>
            <button className="drawer-close-btn" onClick={() => setOpenDrawer(null)}>×</button>
          </div>
          <div className="drawer-body">
            <div className="location-card">
              <div className="location-icon">
                <LocationPinLogo size={40} />
              </div>
              <h3 className="location-title" style={{ marginTop: '10px' }}>Texas Smokehouse</h3>
              <p className="location-desc">{t[lang].addressFull}</p>
              <button 
                className="location-map-btn" 
                onClick={() => window.open('https://maps.google.com', '_blank')}
              >
                🗺️ {t[lang].mapCta}
              </button>
            </div>
            
            <div style={{
              width: '100%',
              height: '180px',
              borderRadius: '20px',
              border: '1px solid var(--glass-border)',
              background: 'linear-gradient(135deg, #2d1822 0%, #170d12 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted)',
              fontSize: '13px',
              gap: '10px'
            }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <VectorBurgerLogo size={32} />
                <LocationPinLogo size={32} />
              </div>
              <span style={{ fontWeight: '600', marginTop: '10px' }}>Smoke Grill Kitchen & Bar</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* DRAWER 3: TELEGRAM BOT                     */}
      {/* ========================================== */}
      <div className={`drawer-overlay ${openDrawer === 'bot' ? 'open' : ''}`} onClick={() => setOpenDrawer(null)}>
        <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
          <div className="drawer-header">
            <h2 className="drawer-title">{t[lang].botDrawerTitle}</h2>
            <button className="drawer-close-btn" onClick={() => setOpenDrawer(null)}>×</button>
          </div>
          <div className="drawer-body">
            <div className="location-card">
              <div className="location-icon">
                <RobotLogo size={40} />
              </div>
              <h3 className="location-title" style={{ marginTop: '10px' }}>@TexasBurger_Robot</h3>
              <p className="location-desc">{t[lang].botDesc}</p>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', justifyContent: 'center', background: 'var(--active-btn-grad)', border: 'none', color: 'white' }}
                onClick={() => window.open('https://t.me', '_blank')}
              >
                🚀 {t[lang].botCta}
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
