import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getArticleById } from '../services/articleService';
import type { Article } from '../types/article';

interface Props {
  collection: 'A' | 'B';
}

const ArticleDetail: React.FC<Props> = ({ collection }) => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language || 'ja';
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (id) {
      getArticleById(collection, id).then((a) => a && setArticle(a));
    }
  }, [id, collection]);

  if (!article) return <div>Loading...</div>;

  const image = article.image || '/dummy.png';

  return (
    <div className="article-detail">
      <h2>{article.title[lang]}</h2>
      <img src={image} alt={article.title[lang]} />
      <p>{article.date} | {article.author}</p>
      <div>{article.body?.[lang]}</div>
    </div>
  );
};

export default ArticleDetail;
