/* ============================================================
   بيانات قائمة صاروج بيكري
   ============================================================ */

const CATEGORIES = [
  {
    id: "iced-tea",
    nameAr: "الشاي المثلج",
    nameEn: "Iced Tea",
    items: [
      { id: "it-1", nameAr: "خوخ وباشن", nameEn: "Peach Passion", price: 1.000, image: "https://images.unsplash.com/photo-1585518419759-fac26a0ee6d0?w=150&q=70", available: true },
      { id: "it-2", nameAr: "مانجو", nameEn: "Mango", price: 1.000, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=150&q=70", available: true },
      { id: "it-3", nameAr: "فراولة", nameEn: "Strawberry", price: 1.000, image: "https://images.unsplash.com/photo-1587256144407-8f06ca6c869c?w=150&q=70", available: true },
      { id: "it-4", nameAr: "توت أزرق", nameEn: "Blueberry", price: 1.000, image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd87282?w=150&q=70", available: true }
    ]
  },
  {
    id: "teapot",
    nameAr: "أباريق الشاي",
    nameEn: "Teapot",
    items: [
      { id: "tp-1", nameAr: "أزهار البابونج", nameEn: "Chamomile", price: 0.700, image: "https://images.unsplash.com/photo-1597318107778-96b88b0ba02d?w=150&q=70", available: true },
      { id: "tp-2", nameAr: "الزعفران", nameEn: "Saffron", price: 0.700, image: "https://images.unsplash.com/photo-1597318107778-96b88b0ba02d?w=150&q=70", available: true },
      { id: "tp-3", nameAr: "الليمون والزنجبيل", nameEn: "Lemon Ginger", price: 0.700, image: "https://images.unsplash.com/photo-1597318107778-96b88b0ba02d?w=150&q=70", available: true },
      { id: "tp-4", nameAr: "لافندر", nameEn: "Lavender", price: 0.700, image: "https://images.unsplash.com/photo-1597318107778-96b88b0ba02d?w=150&q=70", available: true }
    ]
  },
  {
    id: "mojitos",
    nameAr: "موهيتو",
    nameEn: "Mojitos",
    items: [
      { id: "mj-1", nameAr: "الفراولة", nameEn: "Strawberry Mojito", price: 1.000, image: "https://images.unsplash.com/photo-1556140533-bb4e41f92bf2?w=150&q=70", available: true },
      { id: "mj-2", nameAr: "الخوخ", nameEn: "Peach Mojito", price: 1.000, image: "https://images.unsplash.com/photo-1556140533-bb4e41f92bf2?w=150&q=70", available: true },
      { id: "mj-3", nameAr: "التوت الأزرق", nameEn: "Blueberry Mojito", price: 1.000, image: "https://images.unsplash.com/photo-1556140533-bb4e41f92bf2?w=150&q=70", available: true },
      { id: "mj-4", nameAr: "الليمون", nameEn: "Lemon Mojito", price: 1.000, image: "https://images.unsplash.com/photo-1556140533-bb4e41f92bf2?w=150&q=70", available: true },
      { id: "mj-5", nameAr: "الرمان", nameEn: "Pomegranate Mojito", price: 1.000, image: "https://images.unsplash.com/photo-1556140533-bb4e41f92bf2?w=150&q=70", available: true },
      { id: "mj-6", nameAr: "باشن", nameEn: "Passion Mojito", price: 1.000, image: "https://images.unsplash.com/photo-1556140533-bb4e41f92bf2?w=150&q=70", available: true }
    ]
  },
  {
    id: "ice-cream",
    nameAr: "آيسكريم",
    nameEn: "Ice Cream",
    items: [
      { id: "ic-1", nameAr: "مخروط فراولة", nameEn: "Strawberry Cone", price: 1.600, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=150&q=70", available: true },
      { id: "ic-2", nameAr: "مخروط فانيلا", nameEn: "Vanilla Cone", price: 1.600, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=150&q=70", available: true },
      { id: "ic-3", nameAr: "مخروط مكس", nameEn: "Mixed Cone", price: 1.600, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=150&q=70", available: true },
      { id: "ic-4", nameAr: "كوب فراولة", nameEn: "Strawberry Cup", price: 0.900, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=150&q=70", available: true },
      { id: "ic-5", nameAr: "كوب فانيلا", nameEn: "Vanilla Cup", price: 0.900, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=150&q=70", available: true },
      { id: "ic-6", nameAr: "كوب مكس", nameEn: "Mixed Cup", price: 0.900, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=150&q=70", available: true }
    ]
  },
  {
    id: "cold-coffee",
    nameAr: "القهوة الباردة",
    nameEn: "Cold Coffee",
    items: [
      { id: "cc-1", nameAr: "سبانيش لاتيه", nameEn: "Spanish Latte", price: 1.300, image: "https://images.unsplash.com/photo-1605960375944-2ed4e9a9e3b1?w=150&q=70", available: true },
      { id: "cc-2", nameAr: "كرامل لاتيه", nameEn: "Caramel Latte", price: 1.300, image: "https://images.unsplash.com/photo-1605960375944-2ed4e9a9e3b1?w=150&q=70", available: true },
      { id: "cc-3", nameAr: "زعفران لاتيه", nameEn: "Saffron Latte", price: 1.300, image: "https://images.unsplash.com/photo-1605960375944-2ed4e9a9e3b1?w=150&q=70", available: true },
      { id: "cc-4", nameAr: "بيستاشيو لاتيه", nameEn: "Pistachio Latte", price: 1.300, image: "https://images.unsplash.com/photo-1605960375944-2ed4e9a9e3b1?w=150&q=70", available: true },
      { id: "cc-5", nameAr: "دارك موكا", nameEn: "Dark Mocha", price: 1.300, image: "https://images.unsplash.com/photo-1605960375944-2ed4e9a9e3b1?w=150&q=70", available: true },
      { id: "cc-6", nameAr: "وايت موكا", nameEn: "White Mocha", price: 1.300, image: "https://images.unsplash.com/photo-1605960375944-2ed4e9a9e3b1?w=150&q=70", available: true },
      { id: "cc-7", nameAr: "كركديه", nameEn: "Hibiscus", price: 1.000, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=150&q=70", available: true },
      { id: "cc-8", nameAr: "كورتادو", nameEn: "Cortado", price: 1.300, image: "https://images.unsplash.com/photo-1605960375944-2ed4e9a9e3b1?w=150&q=70", available: true },
      { id: "cc-9", nameAr: "ماتشا", nameEn: "Matcha", price: 1.400, image: "https://images.unsplash.com/photo-1605960375944-2ed4e9a9e3b1?w=150&q=70", available: true },
      { id: "cc-10", nameAr: "أفوكاتو", nameEn: "Avocado", price: 1.500, image: "https://images.unsplash.com/photo-1605960375944-2ed4e9a9e3b1?w=150&q=70", available: true },
      { id: "cc-11", nameAr: "كريمي إسبريسو", nameEn: "Creamy Espresso", price: 1.400, image: "https://images.unsplash.com/photo-1605960375944-2ed4e9a9e3b1?w=150&q=70", available: true },
      { id: "cc-12", nameAr: "روز لاتيه", nameEn: "Rose Latte", price: 1.300, image: "https://images.unsplash.com/photo-1605960375944-2ed4e9a9e3b1?w=150&q=70", available: true },
      { id: "cc-13", nameAr: "ماء", nameEn: "Water", price: 0.100, image: "https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=150&q=70", available: true }
    ]
  },
  {
    id: "frappe",
    nameAr: "فراب",
    nameEn: "Frappe",
    items: [
      { id: "fr-1", nameAr: "بيستاشيو فراب", nameEn: "Pistachio Frappe", price: 1.800, image: "https://images.unsplash.com/photo-1605960375944-2ed4e9a9e3b1?w=150&q=70", available: true },
      { id: "fr-2", nameAr: "كرامل فراب", nameEn: "Caramel Frappe", price: 1.800, image: "https://images.unsplash.com/photo-1605960375944-2ed4e9a9e3b1?w=150&q=70", available: true },
      { id: "fr-3", nameAr: "موكا فراب", nameEn: "Mocha Frappe", price: 1.800, image: "https://images.unsplash.com/photo-1605960375944-2ed4e9a9e3b1?w=150&q=70", available: true }
    ]
  },
  {
    id: "hot-coffee",
    nameAr: "القهوة الساخنة",
    nameEn: "Hot Coffee",
    items: [
      { id: "hc-1", nameAr: "سبانيش لاتيه", nameEn: "Spanish Latte", price: 1.300, image: "https://images.unsplash.com/photo-1545665225-76d7ff409dd1?w=150&q=70", available: true },
      { id: "hc-2", nameAr: "كرامل لاتيه", nameEn: "Caramel Latte", price: 1.300, image: "https://images.unsplash.com/photo-1545665225-76d7ff409dd1?w=150&q=70", available: true },
      { id: "hc-3", nameAr: "زعفران لاتيه", nameEn: "Saffron Latte", price: 1.300, image: "https://images.unsplash.com/photo-1545665225-76d7ff409dd1?w=150&q=70", available: true },
      { id: "hc-4", nameAr: "بيستاشيو لاتيه", nameEn: "Pistachio Latte", price: 1.300, image: "https://images.unsplash.com/photo-1545665225-76d7ff409dd1?w=150&q=70", available: true },
      { id: "hc-5", nameAr: "موكا", nameEn: "Mocha", price: 1.300, image: "https://images.unsplash.com/photo-1545665225-76d7ff409dd1?w=150&q=70", available: true },
      { id: "hc-6", nameAr: "كورتادو", nameEn: "Cortado", price: 1.300, image: "https://images.unsplash.com/photo-1545665225-76d7ff409dd1?w=150&q=70", available: true },
      { id: "hc-7", nameAr: "ماتشا", nameEn: "Matcha", price: 1.400, image: "https://images.unsplash.com/photo-1545665225-76d7ff409dd1?w=150&q=70", available: true },
      { id: "hc-8", nameAr: "كابتشينو", nameEn: "Cappuccino", price: 1.200, image: "https://images.unsplash.com/photo-1545665225-76d7ff409dd1?w=150&q=70", available: true },
      { id: "hc-9", nameAr: "لاتيه", nameEn: "Latte", price: 1.300, image: "https://images.unsplash.com/photo-1545665225-76d7ff409dd1?w=150&q=70", available: true },
      { id: "hc-10", nameAr: "فلات وايت", nameEn: "Flat White", price: 1.300, image: "https://images.unsplash.com/photo-1545665225-76d7ff409dd1?w=150&q=70", available: true },
      { id: "hc-11", nameAr: "إسبريسو", nameEn: "Espresso", price: 0.900, image: "https://images.unsplash.com/photo-1545665225-76d7ff409dd1?w=150&q=70", available: true },
      { id: "hc-12", nameAr: "أمريكانو", nameEn: "Americano", price: 1.000, image: "https://images.unsplash.com/photo-1545665225-76d7ff409dd1?w=150&q=70", available: true },
      { id: "hc-13", nameAr: "هوت شوكليت", nameEn: "Hot Chocolate", price: 1.400, image: "https://images.unsplash.com/photo-1545665225-76d7ff409dd1?w=150&q=70", available: true },
      { id: "hc-14", nameAr: "قهوة عمانية", nameEn: "Omani Coffee", price: 1.000, image: "https://images.unsplash.com/photo-1545665225-76d7ff409dd1?w=150&q=70", available: true }
    ]
  },
  {
    id: "cold-brew",
    nameAr: "كولد برو / مشروبات خاصة",
    nameEn: "Cold Brew / Speciality",
    items: [
      { id: "cb-1", nameAr: "V60 كلاسيك", nameEn: "V60 Classic", price: 1.500, image: "https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=150&q=70", available: true },
      { id: "cb-2", nameAr: "V60 فروتي", nameEn: "V60 Fruity", price: 1.600, image: "https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=150&q=70", available: true },
      { id: "cb-3", nameAr: "كولد برو", nameEn: "Cold Brew", price: 1.600, image: "https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=150&q=70", available: true }
    ]
  },
  {
    id: "bakery",
    nameAr: "الحلويات والمخبوزات",
    nameEn: "Dessert & Bakery",
    items: [
      { id: "bk-1", nameAr: "كرواسون سادة", nameEn: "Plain Croissant", price: 1.000, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=150&q=70", available: true },
      { id: "bk-2", nameAr: "كرواسون شوكليت", nameEn: "Chocolate Croissant", price: 1.400, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=150&q=70", available: true },
      { id: "bk-3", nameAr: "كرواسون تركي", nameEn: "Turkish Croissant", price: 1.700, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=150&q=70", available: true },
      { id: "bk-4", nameAr: "كرواسون حلومي", nameEn: "Halloumi Croissant", price: 1.700, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=150&q=70", available: true },
      { id: "bk-5", nameAr: "كرواسون بيض", nameEn: "Egg Croissant", price: 1.700, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=150&q=70", available: true },
      { id: "bk-6", nameAr: "دانيش بيري", nameEn: "Danish Pastry", price: 1.000, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=150&q=70", available: true },
      { id: "bk-7", nameAr: "شوكليت كيك", nameEn: "Chocolate Cake", price: 2.500, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=150&q=70", available: true },
      { id: "bk-8", nameAr: "كريمي كيك", nameEn: "Creamy Cake", price: 2.500, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=150&q=70", available: true },
      { id: "bk-9", nameAr: "كيكة التمر", nameEn: "Date Cake", price: 2.500, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=150&q=70", available: true },
      { id: "bk-10", nameAr: "بيستاشيو كيك", nameEn: "Pistachio Cake", price: 2.500, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=150&q=70", available: true }
    ]
  }
];

const SHOP_NAME_AR = "مخبز صاروج بيكري";
const SHOP_NAME_EN = "Sarouj Bakery";
const CURRENCY_LABEL = "ر.ع.";
const CURRENT_LANG = "ar";
