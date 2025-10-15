import type { Article } from '../types/article';

export const getArticlesA = async (): Promise<Article[]> => {
  const res = await import('../data/articlesA.json');
  return res.default;
};

export const getArticlesB = async (): Promise<Article[]> => {
  const res = await import('../data/articlesB.json');
  return res.default;
};

export const getArticleById = async (
  collection: 'A' | 'B',
  id: string
): Promise<Article | undefined> => {
  const articles = collection === 'A' ? await getArticlesA() : await getArticlesB();
  return articles.find((a) => a.id === id);
};
