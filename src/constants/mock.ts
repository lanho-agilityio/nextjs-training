import { Post, PostTag } from '@/models';

export const MOCK_TAG_LIST: PostTag[] = [
  {
    id: '1',
    title: 'TECHNOLOGY',
    color: 'blue',
  },
  {
    id: '2',
    title: 'LIFESTYLE',
    color: 'red',
  },
  {
    id: '3',
    title: 'TRAVEL',
    color: 'purple',
  },
];

export const MOCK_POSTS_LIST: Post[] = [
  {
    id: 'post1',
    title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    tag: {
      id: '1',
      title: 'TECHNOLOGY',
      color: 'blue',
    },
    author: {
      id: '1',
      name: 'Mario Sanchez 1',
    },
    pictureSrc: '/post.png',
    content:
      'Yet the context in which brand architecture decisions are being made has changed. Gone are the days of “competitive strategy”, with the military-inspired view of competition as a zero-sum game, where market share needs to be stolen from competitors, often in a street-by-street battle to win over each individual segment. The type of brand architecture required to win in this game demanded a dogged focus on each segment, and a sniper-like collection of individual brands sharply focused on each one. While there was always a place for a variety of architectures — see Joachimsthaler’s brand relationship spectrum — houses of brands were favored, as it enabled segment-by-segment competition and risk protection. P&G was the king of houses of brands, slicing and dicing the market not just by products and demographics, but also by psychographics, price range, buying patterns or attitudes. In B2B, houses of brands were omnipresent, with a product-driven logic that led to branding new features meant to provide short-term competitive advantage.',
    updatedAt: 'October 21, 2022',
  },
  {
    id: 'post2',
    title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    tag: {
      id: '1',
      title: 'TECHNOLOGY',
      color: 'blue',
    },
    author: {
      id: '1',
      name: 'Mario Sanchez 2',
    },
    pictureSrc: '/post.png',
    content: 'asdsadasdsadsadsadsa',
    updatedAt: 'October 21, 2022',
  },
  {
    id: 'post3',
    title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    tag: {
      id: '1',
      title: 'TECHNOLOGY',
      color: 'blue',
    },
    author: {
      id: '1',
      name: 'Mario Sanchez 3',
    },
    pictureSrc: '/post.png',
    content: 'asdsadasdsadsadsadsa',
    updatedAt: 'October 21, 2022',
  },
  {
    id: 'post4',
    title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    tag: {
      id: '1',
      title: 'TECHNOLOGY',
      color: 'blue',
    },
    author: {
      id: '1',
      name: 'Mario Sanchez 4',
    },
    pictureSrc: '/post.png',
    content: 'asdsadasdsadsadsadsa',
    updatedAt: 'October 21, 2022',
  },
  {
    id: 'post5',
    title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    tag: {
      id: '1',
      title: 'TECHNOLOGY',
      color: 'blue',
    },
    author: {
      id: '1',
      name: 'Mario Sanchez 5',
    },
    pictureSrc: '/post.png',
    content: 'asdsadasdsadsadsadsa',
    updatedAt: 'October 21, 2022',
  },
];

export const MOCK_POST: Post = MOCK_POSTS_LIST[0];
