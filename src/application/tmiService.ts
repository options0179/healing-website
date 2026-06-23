import animalsTmi from '../data/tmi/animals.json';
import natureTmi from '../data/tmi/nature.json';
import historyTmi from '../data/tmi/history.json';
import universeTmi from '../data/tmi/universe.json';
import foodTmi from '../data/tmi/food.json';

// 카테고리별 데이터는 현재 큐레이션 풀에서 가져오지만,
// 추후 외부 API로 교체할 카테고리만 이 맵의 값을 바꾸면 된다.
const curatedPools: Record<string, string[]> = {
  animals: animalsTmi,
  nature: natureTmi,
  history: historyTmi,
  universe: universeTmi,
  food: foodTmi,
};

export function getRandomTmi(categoryId: string, excluding?: string): string {
  const pool = curatedPools[categoryId];
  if (!pool || pool.length === 0) {
    return '아직 준비된 TMI가 없어요. 곧 채워질 예정이에요!';
  }
  if (pool.length === 1) return pool[0];

  let candidate = pool[Math.floor(Math.random() * pool.length)];
  while (candidate === excluding) {
    candidate = pool[Math.floor(Math.random() * pool.length)];
  }
  return candidate;
}
