import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Article } from '../../components/Article/Article';
import { Article as ArticleProps } from '../../components/Article/Article.types';
import { getArticle } from '../../api/articles';
import Header from '../../components/Header/Header';
import { Content } from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';

export const Articles = () => {
  const { articleId } = useParams();
  const [article, setArticle] = React.useState<ArticleProps | null>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      if (!article && articleId)
        try {
          setArticle(await getArticle(articleId));
        } catch (error) {
          console.error(`Article '${articleId}' not found. Flying home.`, error);
          navigate('/');
        }
    })();
  }, [articleId]);

  return (
    <>
      <Header />
      <Content>
        <>{article ? <Article {...article} /> : null}</>
      </Content>
      <Footer />
    </>
  );
};
