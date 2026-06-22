export interface Category {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'animals',
    emoji: '🦦',
    title: '동물의 어이없는 특징',
    description: '알면 피식 웃게 되는 동물들의 황당한 진실',
  },
  {
    id: 'nature',
    emoji: '🌿',
    title: '자연 속 숨겨진 비밀',
    description: '매일 보던 풍경에 숨어있던 작은 비밀',
  },
  {
    id: 'history',
    emoji: '🕰️',
    title: '역사적 인물의 의외인 점',
    description: '교과서 속 인물들의 예상 밖 모습',
  },
  {
    id: 'universe',
    emoji: '🌌',
    title: '우주의 사소한 진실',
    description: '광활한 우주에 숨어있는 작고 신기한 사실',
  },
  {
    id: 'food',
    emoji: '🍯',
    title: '음식에 숨은 과학',
    description: '매일 먹는 음식 속에 숨어있는 작은 과학',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id);
}
