import React, { useEffect, useState } from 'react';
import { getArticlesB } from '../services/articleService';
import type { Article } from '../types/article';
import ArticleCard from '../components/ArticleCard';

const ArticlesAPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticlesB().then(setArticles);
  }, []);

  return (
    <div>
      <h2>Articles B</h2>
      <div className="articles-grid">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} collection="B" />
        ))}
      </div>
    </div>
  );
};

export default ArticlesAPage;
