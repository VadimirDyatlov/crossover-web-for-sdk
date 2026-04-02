import type { Product, ProductDetail } from '../types';

export const mockMerchant = {
  pointId: '12341234-1234-1234-1234-123412341234',
  name: 'Stars Coffee',
  logoUrl:
    'https://static.tildacdn.com/tild3637-3336-4665-b134-653264303330/Logo.svg',
  address: 'Кутузовский проспект, 32',
  qrData: '',
  infoWidget: {
    description: 'Быстрый и вкусный кофе',
    picture: 'https://example.com/images/pic.png',
  },
  status: {
    active: true,
    reason: '',
  },
  category: [
    {
      id: '1',
      name: 'Холодные напитки',
      size: 10,
    },
    {
      id: '2',
      name: 'Горячие напитки',
      size: 12,
    },
    {
      id: '3',
      name: 'Десерты',
      size: 8,
    },
    {
      id: '4',
      name: 'Завтраки',
      size: 6,
    },
  ],
};

// Холодные напитки
export const mockProducts1: Product[] = [
  {
    id: '660e8400-e29b-41d4-a716-446655440000',
    name: 'Айс Латте 350мл',
    price: 450,
    imageUrl:
      // 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/lf/cafe-coffee-restaurant-aroma.jpeg?auto=compress&fit=resize&w=1200&h=800&display=large&domain=img3.fonwall.rue',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440001',
    name: 'Айс Капучино 350мл',
    price: 330,
    imageUrl:
      // 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/pb/snow-winter-decoration-red.jpeg?auto=compress&fit=resize&h=400&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440002',
    name: 'Фраппе 400мл',
    price: 250,
    imageUrl:
      // 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/nw/snow-winter-flower-petal.jpeg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440003',
    name: 'Колд Брю 350мл',
    price: 290,
    imageUrl:
      // 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/cd/cat-kitty-cute.jpeg?auto=compress&fit=resize&h=282&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440004',
    name: 'Айс Американо 300мл',
    price: 270,
    imageUrl:
      // 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/cb/liquid-cafe-coffee-dark-rjfd.jpeg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440005',
    name: 'Айс Мокко 380мл',
    price: 360,
    imageUrl:
      // 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/rd/snow-winter-warm-sweet.jpeg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img1.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440000-2',
    name: 'Айс Латте 550мл',
    price: 650,
    imageUrl:
      // 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/og/drink-a-cup-deer.jpg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440001-2',
    name: 'Айс Капучино 550мл',
    price: 470,
    imageUrl:
      // 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/yg/drinks-glass-ice-cream-wallpaper-hot-cocoa.jpeg?auto=compress&fit=resize&h=282&w=500&display=thumb&domain=img3.fonwall.ru',
  },
];

// Горячие напитки
export const mockProducts2: Product[] = [
  {
    id: '660e8400-e29b-41d4-a716-446655440006',
    name: 'Капучино 300мл',
    price: 290,
    imageUrl:
      // 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/uq/coffee-morning-foam-cup.jpeg?auto=compress&fit=resize&h=325&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440007',
    name: 'Латте 300мл',
    price: 300,
    imageUrl:
      // 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/vk/coffee-shop-coffee-tea-morning.jpeg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img1.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440008',
    name: 'Раф 300мл',
    price: 340,
    imageUrl:
      // 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/ze/cafe-coffee-tea-morning-oxgc.jpeg?auto=compress&fit=resize&h=282&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440009',
    name: 'Американо 250мл',
    price: 250,
    imageUrl:
      // 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/lf/cafe-coffee-restaurant-aroma.jpeg?auto=compress&fit=resize&w=1200&h=800&display=large&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440010',
    name: 'Эспрессо 60мл',
    price: 200,
    imageUrl:
      // 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/gn/coffee-dish-meal-food-ovbt.jpeg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440011',
    name: 'Горячий шоколад 300мл',
    price: 330,
    imageUrl:
      // 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/rj/coffee-cup-hot-chocolate-food.jpeg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440006-2',
    name: 'Капучино 700мл',
    price: 390,
    imageUrl:
      // 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/xp/cafe-coffee-tea-morning-azhz.jpeg?auto=compress&fit=resize&w=1200&h=800&display=large&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440007-2',
    name: 'Латте 450мл',
    price: 490,
    imageUrl:
      // 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/zc/cold-glass-cup-hot-chocolate.jpeg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img3.fonwall.ru',
  },
];

// Десерты
export const mockProducts3: Product[] = [
  {
    id: '660e8400-e29b-41d4-a716-446655440012',
    name: 'Чизкейк Нью-Йорк 180г',
    price: 390,
    imageUrl:
      // 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/pn/food-cake-chocolate-slni.jpeg?auto=compress&fit=resize&h=335&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440013',
    name: 'Морковный торт 150г',
    price: 370,
    imageUrl:
      // 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/iw/food-produce-baking-dessert.jpeg?auto=compress&fit=resize&h=667&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440014',
    name: 'Брауни 120г',
    price: 320,
    imageUrl:
      // 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/nf/food-strawberries-cake.jpeg?auto=compress&fit=resize&h=313&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440015',
    name: 'Тирамису 160г',
    price: 420,
    imageUrl:
      // 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/xf/sweet-dish-meal-food-nrle.jpeg?auto=compress&fit=resize&h=341&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440016',
    name: 'Эклер ванильный 90г',
    price: 280,
    imageUrl:
      // 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/ww/food-strawberries-ice-cream.jpeg?auto=compress&fit=resize&h=313&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440017',
    name: 'Маффин шоколадный 110г',
    price: 250,
    imageUrl:
      // 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/wi/berry-sweet-food-produce.jpeg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440014-2',
    name: 'Картошка 130г',
    price: 120,
    imageUrl:
      // 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop&auto=format',
      'https://avatars.mds.yandex.net/get-entity_search/4789399/1254336384/S600xU_2x',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440015-2',
    name: 'Наполеон 150г',
    price: 220,
    imageUrl:
      // 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/nz/pirozhnoe-shokoladnoe-orehi.jpg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img2.fonwall.ru',
  },
];

// Завтраки
export const mockProducts4: Product[] = [
  {
    id: '660e8400-e29b-41d4-a716-446655440018',
    name: 'Круассан с ветчиной и сыром 200г',
    price: 350,
    imageUrl:
      // 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/uv/cold-wheat-grain-restaurant.jpeg?auto=compress&fit=resize&h=375&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440019',
    name: 'Сэндвич с курицей 250г',
    price: 380,
    imageUrl:
      // 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/cb/sandwich-salad-fast-food-food.jpeg?auto=compress&fit=resize&h=324&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440020',
    name: 'Овсяная каша с ягодами 300г',
    price: 290,
    imageUrl:
      // 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/er/fruit-berry-sweet-bowl.jpeg?auto=compress&fit=resize&h=333&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440021',
    name: 'Сырники со сметаной 220г',
    price: 310,
    imageUrl:
      // 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/rj/ete-cheesecakes-chay.jpg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440022',
    name: 'Яичница с беконом 180г',
    price: 340,
    imageUrl:
      // 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/ax/anime-food-delicious-sausages-egg.jpeg?auto=compress&fit=resize&h=352&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440023',
    name: 'Блинчики с творогом 250г',
    price: 300,
    imageUrl:
      // 'https://images.unsplash.com/photo-1575853121743-60c24f0a7502?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/wr/salmon-caviar-wallpaper-pancakes-food.jpeg?auto=compress&fit=resize&h=313&w=500&display=thumb&domain=img3.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440024',
    name: 'Пицца Маргарита 35см',
    price: 590,
    imageUrl:
      // 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/ah/food-tomatoes-pizza-pineapples.jpeg?auto=compress&fit=resize&h=313&w=500&display=thumb&domain=img1.fonwall.ru',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440025',
    name: 'Бургер Чизбургер 500гр',
    price: 420,
    imageUrl:
      // 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/fk/hamburger-vegetables-buns.jpeg?auto=compress&fit=resize&h=401&w=500&display=thumb&domain=img3.fonwall.ru',
  },
];

export const pagination = {
  currentPage: 1,
  totalPages: 5,
  totalItems: 95,
  itemsPerPage: 20,
};

export const mockProductDetails: ProductDetail[] = [
  // Холодные напитки
  {
    id: '660e8400-e29b-41d4-a716-446655440000',
    name: 'Айс Латте 350мл',
    price: 450,
    imageUrl:
      // 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/lf/cafe-coffee-restaurant-aroma.jpeg?auto=compress&fit=resize&w=1200&h=800&display=large&domain=img3.fonwall.ru',
    description: 'Освежающий латте со льдом',
    specifications:
      'В 100мл продукта:\n Ккал: 48\n Белки: 2.7г\n Жиры: 2.1г\n Углеводы: 4.3г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440001',
    name: 'Айс Капучино 350мл',
    price: 330,
    imageUrl:
      // 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/pb/snow-winter-decoration-red.jpeg?auto=compress&fit=resize&h=400&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Холодный капучино с плотной пеной',
    specifications:
      'В 100мл продукта:\n Ккал: 45\n Белки: 2.5г\n Жиры: 2г\n Углеводы: 4г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440002',
    name: 'Фраппе 400мл',
    price: 250,
    imageUrl:
      // 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/nw/snow-winter-flower-petal.jpeg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Кофейный коктейль со льдом',
    specifications:
      'В 100мл продукта:\n Ккал: 52\n Белки: 2г\n Жиры: 1.8г\n Углеводы: 7г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440003',
    name: 'Колд Брю 350мл',
    price: 290,
    imageUrl:
      // 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/cd/cat-kitty-cute.jpeg?auto=compress&fit=resize&h=282&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Холодный кофе длительной экстракции',
    specifications:
      'В 100мл продукта:\n Ккал: 3\n Белки: 0.1г\n Жиры: 0г\n Углеводы: 0.5г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440004',
    name: 'Айс Американо 300мл',
    price: 270,
    imageUrl:
      // 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/cb/liquid-cafe-coffee-dark-rjfd.jpeg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Освежающий американо со льдом',
    specifications:
      'В 100мл продукта:\n Ккал: 2\n Белки: 0.1г\n Жиры: 0г\n Углеводы: 0.3г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440005',
    name: 'Айс Мокко 380мл',
    price: 360,
    imageUrl:
      // 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/rd/snow-winter-warm-sweet.jpeg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img1.fonwall.ru',
    description: 'Кофе с шоколадом и молоком со льдом',
    specifications:
      'В 100мл продукта:\n Ккал: 58\n Белки: 2.3г\n Жиры: 2.5г\n Углеводы: 6.5г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440000-2',
    name: 'Айс Латте 550мл',
    price: 650,
    imageUrl:
      // 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/og/drink-a-cup-deer.jpg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Большой освежающий латте со льдом',
    specifications:
      'В 100мл продукта:\n Ккал: 48\n Белки: 2.7г\n Жиры: 2.1г\n Углеводы: 4.3г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440001-2',
    name: 'Айс Капучино 550мл',
    price: 470,
    imageUrl:
      // 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/yg/drinks-glass-ice-cream-wallpaper-hot-cocoa.jpeg?auto=compress&fit=resize&h=282&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Большой холодный капучино',
    specifications:
      'В 100мл продукта:\n Ккал: 45\n Белки: 2.5г\n Жиры: 2г\n Углеводы: 4г',
  },
  // Горячие напитки
  {
    id: '660e8400-e29b-41d4-a716-446655440006',
    name: 'Капучино 300мл',
    price: 290,
    imageUrl:
      // 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/uq/coffee-morning-foam-cup.jpeg?auto=compress&fit=resize&h=325&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Классический итальянский капучино с плотной молочной пеной',
    specifications:
      'В 100мл продукта:\n Ккал: 45\n Белки: 2.5г\n Жиры: 2г\n Углеводы: 4г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440007',
    name: 'Латте 300мл',
    price: 300,
    imageUrl:
      // 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/vk/coffee-shop-coffee-tea-morning.jpeg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img1.fonwall.ru',
    description: 'Нежный латте с мягкой молочной пеной',
    specifications:
      'В 100мл продукта:\n Ккал: 48\n Белки: 2.7г\n Жиры: 2.1г\n Углеводы: 4.3г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440008',
    name: 'Раф 300мл',
    price: 340,
    imageUrl:
      // 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/ze/cafe-coffee-tea-morning-oxgc.jpeg?auto=compress&fit=resize&h=282&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Кофе со сливками и ванильным сахаром',
    specifications:
      'В 100мл продукта:\n Ккал: 65\n Белки: 2.2г\n Жиры: 3.8г\n Углеводы: 5.1г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440009',
    name: 'Американо 250мл',
    price: 250,
    imageUrl:
      // 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/lf/cafe-coffee-restaurant-aroma.jpeg?auto=compress&fit=resize&w=1200&h=800&display=large&domain=img3.fonwall.ru',
    description: 'Классический американо из свежеобжаренных зерен',
    specifications:
      'В 100мл продукта:\n Ккал: 3\n Белки: 0.1г\n Жиры: 0г\n Углеводы: 0.5г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440010',
    name: 'Эспрессо 60мл',
    price: 200,
    imageUrl:
      // 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/gn/coffee-dish-meal-food-ovbt.jpeg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Крепкий эспрессо с насыщенным вкусом',
    specifications:
      'В 100мл продукта:\n Ккал: 2\n Белки: 0.1г\n Жиры: 0г\n Углеводы: 0.3г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440011',
    name: 'Горячий шоколад 300мл',
    price: 330,
    imageUrl:
      // 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/rj/coffee-cup-hot-chocolate-food.jpeg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Густой горячий шоколад с маршмеллоу',
    specifications:
      'В 100мл продукта:\n Ккал: 85\n Белки: 2.5г\n Жиры: 3.2г\n Углеводы: 12г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440006-2',
    name: 'Капучино 0мл',
    price: 390,
    imageUrl:
      // 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/xp/cafe-coffee-tea-morning-azhz.jpeg?auto=compress&fit=resize&w=1200&h=800&display=large&domain=img3.fonwall.ru',
    description: 'Особый капучино с двойной порцией эспрессо',
    specifications:
      'В 100мл продукта:\n Ккал: 50\n Белки: 2.8г\n Жиры: 2.2г\n Углеводы: 4.5г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440007-2',
    name: 'Латте 450мл',
    price: 490,
    imageUrl:
      // 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/zc/cold-glass-cup-hot-chocolate.jpeg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Большой латте с карамельным сиропом',
    specifications:
      'В 100мл продукта:\n Ккал: 52\n Белки: 2.9г\n Жиры: 2.3г\n Углеводы: 4.8г',
  },

  // Десерты
  {
    id: '660e8400-e29b-41d4-a716-446655440012',
    name: 'Чизкейк Нью-Йорк 180г',
    price: 390,
    imageUrl:
      // 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/pn/food-cake-chocolate-slni.jpeg?auto=compress&fit=resize&h=335&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Классический нью-йоркский чизкейк',
    specifications:
      'В 100г продукта:\n Ккал: 321\n Белки: 5.5г\n Жиры: 22г\n Углеводы: 26г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440013',
    name: 'Морковный торт 150г',
    price: 370,
    imageUrl:
      // 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/iw/food-produce-baking-dessert.jpeg?auto=compress&fit=resize&h=667&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Нежный морковный торт с крем-чизом',
    specifications:
      'В 100г продукта:\n Ккал: 298\n Белки: 4.2г\n Жиры: 15г\n Углеводы: 38г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440014',
    name: 'Брауни 120г',
    price: 320,
    imageUrl:
      // 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/nf/food-strawberries-cake.jpeg?auto=compress&fit=resize&h=313&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Шоколадное брауни с орехами',
    specifications:
      'В 100г продукта:\n Ккал: 450\n Белки: 6г\n Жиры: 25г\n Углеводы: 52г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440015',
    name: 'Тирамису 160г',
    price: 420,
    imageUrl:
      // 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/xf/sweet-dish-meal-food-nrle.jpeg?auto=compress&fit=resize&h=341&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Итальянский десерт с маскарпоне и кофе',
    specifications:
      'В 100г продукта:\n Ккал: 380\n Белки: 6.5г\n Жиры: 22г\n Углеводы: 40г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440016',
    name: 'Эклер ванильный 90г',
    price: 280,
    imageUrl:
      // 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/ww/food-strawberries-ice-cream.jpeg?auto=compress&fit=resize&h=313&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Заварной эклер с ванильным кремом',
    specifications:
      'В 100г продукта:\n Ккал: 290\n Белки: 5г\n Жиры: 12г\n Углеводы: 42г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440017',
    name: 'Маффин шоколадный 110г',
    price: 250,
    imageUrl:
      // 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/wi/berry-sweet-food-produce.jpeg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Шоколадный маффин с жидкой начинкой',
    specifications:
      'В 100г продукта:\n Ккал: 410\n Белки: 6.5г\n Жиры: 20г\n Углеводы: 52г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440014-2',
    name: 'Картошка 130г',
    price: 120,
    imageUrl:
      // 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop&auto=format',
      'https://avatars.mds.yandex.net/get-entity_search/4789399/1254336384/S600xU_2x',
    description: 'Пирожное "Картошка" из песочной крошки',
    specifications:
      'В 100г продукта:\n Ккал: 380\n Белки: 4.5г\n Жиры: 18г\n Углеводы: 52г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440015-2',
    name: 'Наполеон 150г',
    price: 220,
    imageUrl:
      // 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/nz/pirozhnoe-shokoladnoe-orehi.jpg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img2.fonwall.ru',
    description: 'Классический торт Наполеон',
    specifications:
      'В 100г продукта:\n Ккал: 420\n Белки: 5.5г\n Жиры: 22г\n Углеводы: 52г',
  },

  // Завтраки
  {
    id: '660e8400-e29b-41d4-a716-446655440018',
    name: 'Круассан с ветчиной и сыром 200г',
    price: 350,
    imageUrl:
      // 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/uv/cold-wheat-grain-restaurant.jpeg?auto=compress&fit=resize&h=375&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Свежий круассан с ветчиной и сыром',
    specifications:
      'В 100г продукта:\n Ккал: 320\n Белки: 12г\n Жиры: 18г\n Углеводы: 30г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440019',
    name: 'Сэндвич с курицей 250г',
    price: 380,
    imageUrl:
      // 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/cb/sandwich-salad-fast-food-food.jpeg?auto=compress&fit=resize&h=324&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Сэндвич с курицей и свежими овощами',
    specifications:
      'В 100г продукта:\n Ккал: 180\n Белки: 14г\n Жиры: 8г\n Углеводы: 15г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440020',
    name: 'Овсяная каша с ягодами 300г',
    price: 290,
    imageUrl:
      // 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/er/fruit-berry-sweet-bowl.jpeg?auto=compress&fit=resize&h=333&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Овсяная каша с сезонными ягодами',
    specifications:
      'В 100г продукта:\n Ккал: 110\n Белки: 3.5г\n Жиры: 2.5г\n Углеводы: 20г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440021',
    name: 'Сырники со сметаной 220г',
    price: 310,
    imageUrl:
      // 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/rj/ete-cheesecakes-chay.jpg?auto=compress&fit=resize&h=334&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Домашние сырники со сметаной',
    specifications:
      'В 100г продукта:\n Ккал: 210\n Белки: 12г\n Жиры: 10г\n Углеводы: 20г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440022',
    name: 'Яичница с беконом 180г',
    price: 340,
    imageUrl:
      // 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/ax/anime-food-delicious-sausages-egg.jpeg?auto=compress&fit=resize&h=352&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Яичница из двух яиц с хрустящим беконом',
    specifications:
      'В 100г продукта:\n Ккал: 220\n Белки: 14г\n Жиры: 18г\n Углеводы: 2г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440023',
    name: 'Блинчики с творогом 250г',
    price: 300,
    imageUrl:
      // 'https://images.unsplash.com/photo-1575853121743-60c24f0a7502?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/wr/salmon-caviar-wallpaper-pancakes-food.jpeg?auto=compress&fit=resize&h=313&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Блинчики с нежным творогом',
    specifications:
      'В 100г продукта:\n Ккал: 190\n Белки: 9г\n Жиры: 6г\n Углеводы: 28г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440024',
    name: 'Пицца Маргарита 35см',
    price: 590,
    imageUrl:
      // 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/ah/food-tomatoes-pizza-pineapples.jpeg?auto=compress&fit=resize&h=313&w=500&display=thumb&domain=img1.fonwall.ru',
    description: 'Классическая пицца Маргарита с томатным соусом и моцареллой',
    specifications:
      'В 100г продукта:\n Ккал: 260\n Белки: 11г\n Жиры: 9г\n Углеводы: 35г',
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440025',
    name: 'Бургер Чизбургер 500гр',
    price: 420,
    imageUrl:
      // 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop&auto=format',
      'https://image.fonwall.ru/o/fk/hamburger-vegetables-buns.jpeg?auto=compress&fit=resize&h=401&w=500&display=thumb&domain=img3.fonwall.ru',
    description: 'Чизбургер с говяжьей котлетой и сыром чеддер',
    specifications:
      'В 100г продукта:\n Ккал: 250\n Белки: 13г\n Жиры: 14г\n Углеводы: 20г',
  },
];
