import { reactive } from 'vue';

export const store = reactive({
  courses: [
    {
      image: '/img/ipad.jpg',
      field: 'Development >',
      title: 'The complete iOS 10 & Swift 3 Developer Coourse',
      stars: [1, 2, 3, 4],
      oldPrice: '$ 199.99',
      newPrice: '$ 100',
    },
    {
      image: '/img/css.jpg',
      field: 'Design >',
      title: 'CSS - The Complete Guide 2020 (incl. Flexbox, Grid, Sass)',
      stars: [1, 2, 3, 4, 5],
      oldPrice: '$ 199.99',
      newPrice: '$ 100',
    },
    {
      image: '/img/code.jpg',
      field: 'Development >',
      title: 'Web Design for beginners: Real World Coding in HTML & CSS',
      stars: [1, 2, 3, 4, 5],
      oldPrice: '$ 129.99',
      newPrice: '$ 65',
    },
    {
      image: '/img/colors.jpg',
      field: 'Design >',
      title: 'Digitally Painting Light and Color: Amateur to Master',
      stars: [1, 2, 3, 4],
      oldPrice: '$ 139.99',
      newPrice: '$ 70',
    },
    {
      image: '/img/letters.jpg',
      field: 'Arts & Crafts >',
      title: 'Become an Arabic Calligraphy Artist From Scratch',
      stars: [1, 2, 3, 4, 5],
      oldPrice: null,
      newPrice: '$ 199.99',
    },
    {
      image: '/img/ninja.jpg',
      field: 'Google >',
      title: 'Google Searching Ninja',
      stars: [1, 2, 3],
      oldPrice: '$ 89.99',
      newPrice: '$ 45',
    },
    {
      image: '/img/watercolor.jpg',
      field: 'Arts & Crafts >',
      title: 'Foundations for Mastering Watercolor Painting',
      stars: [1, 2, 3, 4],
      oldPrice: '$ 19.99',
      newPrice: '$ 10',
    },
    {
      image: '/img/wine.jpg',
      field: 'Food & Beverage >',
      title: 'Get Wine-Smart',
      stars: [1, 2, 3, 4],
      oldPrice: '$ 49.99',
      newPrice: '$ 25',
    },
    {
      image: '/img/pencil.jpg',
      field: 'Arts & Crafts >',
      title: 'The Colored Pencil Drawing Course',
      stars: [1, 2, 3, 4],
      oldPrice: '$ 34.99',
      newPrice: '$ 18',
    },
    {
      image: '/img/flowers1.jpg',
      field: 'Arts & Crafts >',
      title: 'Paint Realistic Watercolor and Botanicals - STUDIO BASIC',
      stars: [1, 2, 3, 4],
      oldPrice: '$ 69.99',
      newPrice: '$ 35',
    },
    {
      image: '/img/paint.jpg',
      field: 'Arts & Crafts >',
      title: 'Mastering Brushstrokes - Part 1',
      stars: [1, 2, 3, 4, 5],
      oldPrice: '$ 19.99',
      newPrice: '$ 10',
    },
    {
      image: '/img/flowers2.jpg',
      field: 'Arts & Crafts >',
      title: 'Paint Realistic Watercolour and Botanicals - MAGNIOLIAS',
      stars: [1, 2, 3, 4, 5],
      oldPrice: '$ 69.99',
      newPrice: '$ 35',
    },
    {
      image: '/img/git.jpg',
      field: 'Development >',
      title: 'GitHub Ultimate: Master Git and GitHub - Beginner to Expert',
      stars: [1, 2, 3, 4],
      oldPrice: '$ 99.99',
      newPrice: '$ 50',
    },
    {
      image: '/img/iphone.jpg',
      field: 'Development >',
      title: 'The Complete iOS 11 & Swift Developer Course - Build 20 Apps',
      stars: [1, 2, 3, 4],
      oldPrice: '$ 199.99',
      newPrice: '$ 100',
    },
    {
      image: '/img/android.jpg',
      field: 'Development >',
      title: 'Android java Masterclass - Become an App Developer',
      stars: [1, 2, 3, 4],
      oldPrice: '$ 99.99',
      newPrice: '$ 50',
    },
    {
      image: '/img/x.jpg',
      field: 'Development >',
      title: 'Xamarin Forms: Build Native Cross-Platform Apps with C#',
      stars: [1, 2, 3, 4],
      oldPrice: '$ 109.99',
      newPrice: '$ 95',
    },
  ],
});
