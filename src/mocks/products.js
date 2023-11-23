const products = [
  {
    id: '0',
    name: 'Филе бедра куриного',
    description:
      'Филе куриного бедра ценится за нежную текстуру мяса, сочность и мягкий вкус при приготовлении. Это очень полезный продукт, богатый белком, витаминами группы B, PP, A, Е, С, а также калием, магнием и кальцием. В кулинарии филе бедра универсально: из него получаются превосходные бульоны, закуски и горячие блюда. Обратите внимание: в условиях безвоздушной среды может образовываться специфический аромат, поэтому рекомендуем после вскрытия вакуумной упаковки дать мясу полежать 10-15 минут.',
    price: 543,
    characteristics: {
      weight: '700 гр. (350-1050 гр.)',
      quality: 'ТУ 10.12.10-001-0191917484-2021',
      sellBy: '6 суток',
      placeOrigin: 'Рязанская область, Спасский р-н.',
    },
    properties: {
      nutritionalValue:
        'белки - 21 г., жиры - 6,5 г., углеводы - 0,1 г.; на 100 г.',
      kcal: '109 ккал. / 456 кДж',
    },
    url: 'img/order-page/chicken-breast.webp',
  },
  {
    id: '1',
    name: 'Гусь тушка',
    description:
      'Невероятно, но факт: мясо гуся помогает вывести из организма токсины и даже рекомендуется при отравлениях свинцом. Кроме того, гусятину на Руси прописывали людям, которые находятся в состоянии стресса, а также ослабленным, пожилым, вялым. Мясо гуся нельзя назвать диетическим, оно достаточно жирное, но у него множество своих достоинств: аминокислоты, витамины, профилактика анемии. И самое приятное — запечённый гусь такой вкусный, недаром на Руси это блюдо всегда подавали к празднику!',
    price: 4080,
    characteristics: {
      weight: '3,2 кг. (2, 24 - 4,16 кг.)',
      sellBy: '7 суток',
    },
    properties: {
      nutritionalValue:
        'белки - 15,2 г., жиры - 39 г., углеводы - 0 г.; на 100 г',
      kcal: '371 ккал / 1510 кДж',
    },
    url: 'img/order-page/goose.webp',
  },
  {
    id: '2',
    name: 'Мякоть бедра говяжья малая',
    description:
      'Мякоть бедра - это жестковатое мясо, но очень диетическое и прекрасно подходит для поклонников здорового питания. Мясо можно запечь или потушить с овощами. Все бычки на ферме Эдуарда Васильева выращиваются на натуральном корме, поэтому мясо нежное и вкусное.Цвет мяса может быть от светло розового до более тёмного в зависимости от зрелости бычков.',
    price: 669,
    characteristics: {
      weight: '500 гр. (375-625 гр.)',
      quality: 'А',
      sellBy: '7 суток',
      placeOrigin: 'Тверская область, Калининский район.',
    },
    properties: {
      nutritionalValue:
        'белки - 20,2 г., жиры - 6,4 г., углеводы - 0 г.; на 100 г',
    },

    url: 'img/order-page/beef-thigh.webp',
  },
  {
    id: '3',
    name: 'Грудка куриная на кости',
    description:
      'Мясо грудки считается самым диетическим. Грудку можно отваривать, тушить с овощами, запекать под сыром, обжаривать в соусе. Курицы на ферме Рошаля живут на свободном выгуле и питаются качественным сбалансированным комбикормом, поэтому их мясо мягкое и натуральное.',
    price: 783,
    characteristics: {
      weight: '1.00 кг. (0.75-1.25 кг.)',
      sellBy: '7 суток',
      placeOrigin: 'Краснодарский край, район Славянский.',
    },
    properties: {
      nutritionalValue:
        'белки - 23,6 г., жиры - 1,9 г., углеводы - 0 г.; на 100 г.',
      kcal: '201 ккал. / 841 кДж.',
    },
    url: 'img/order-page/chicken-bone.webp',
  },
  {
    id: '4',
    name: 'Голень куриная',
    description:
      'Куриная голень - полезный и вкусный продукт. Голени вкусно и пожарить, и запечь с пряностями в духовке. Курицы на ферме Рошаля живут на свободном выгуле и питаются качественным сбалансированным комбикормом, поэтому их мясо мягкое и натуральное.',
    price: 534,
    characteristics: {
      weight: '700 гр. (350-1050 гр.)',
      quality: 'КОББ 500',
      sellBy: '7 суток',
      placeOrigin: 'Краснодарский край, район Славянский.',
    },
    properties: {
      nutritionalValue:
        'белки - 19 г., жиры - 14 г., углеводы - 0 г.; на 100 г.',
      kcal: '200 ккал. / 836,8 кДж',
    },
    url: 'img/order-page/chicken-drumstick.webp',
  },
];

export default products;
