// ===== НАСТРОЙКИ =====

// За сколько дней минимум можно заказать торт (2 = не раньше, чем послезавтра)
const MIN_DAYS_AHEAD = 2;

// Адрес «почтальона» (Google Apps Script). Если оставить пустым — заказ только показывается на экране.
const ORDER_URL = "https://script.google.com/macros/s/AKfycbwz-SQ9PPcTZZW_GEYb-i-n-mVyAiUgins2tyDnA0DzI_R6m5aqba1cRy0uXww7Nd35wA/exec";

// ===== СПИСОК ТОРТОВ =====
// Чтобы добавить торт: скопируйте строку от { до }, поставьте запятую и поменяйте текст.
// Цена — только число, без «₽» и пробелов.

const CAKES = [
  {
    name: "Наполеон",
    price: 4000,
    description: "Тонкие слоёные коржи и нежный заварной крем. Около 1,5 кг.",
    photo: "photos/napoleon_tg.jpg",
  },
  {
    name: "Орешки со сгущёнкой",
    price: 1000,
    description: "Хрустящие орешки с варёной сгущёнкой. Коробка 20 штук.",
    photo: "photos/oreshki_tg.jpg",
  },
];
