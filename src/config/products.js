// Product image final paths live in /public/images/products/ — drop the real
// photos there and the cards switch automatically once `image` files exist.
export const PRODUCTS = [
  {
    id: 'hair-oil-100',
    image: 'images/products/hair-oil-100ml.jpg',
    price: 850,
    oldPrice: null,
    name: { ar: 'زيت الشعر مولانز جريس 100 مل', en: "Mulan's Grace Hair Oil 100ml" },
    description: {
      ar: 'مزيج طبيعي غني بالزيوت لتغذية الشعر وتقويته من الجذور حتى الأطراف.',
      en: 'A rich natural oil blend that nourishes and strengthens hair from root to tip.',
    },
  },
  {
    id: 'hair-oil-50',
    image: 'images/products/hair-oil-50ml.jpg',
    price: 550,
    oldPrice: null,
    name: { ar: 'زيت الشعر مولانز جريس 50 مل', en: "Mulan's Grace Hair Oil 50ml" },
    description: {
      ar: 'نفس التركيبة الطبيعية بحجم مثالي للتجربة أو السفر.',
      en: 'The same natural formula in a perfect size for trying out or travel.',
    },
  },
  {
    id: 'derma-roller',
    image: 'images/products/derma-roller.jpg',
    price: 170,
    oldPrice: 200,
    name: { ar: 'ديرما رولر ZGTS مقاس 1.0 مم', en: 'ZGTS Derma Roller 1.0mm' },
    description: {
      ar: 'يحفّز فروة الرأس ويعزز امتصاص الزيوت لنتائج أسرع وأقوى.',
      en: 'Stimulates the scalp and boosts oil absorption for faster, stronger results.',
    },
  },
]
