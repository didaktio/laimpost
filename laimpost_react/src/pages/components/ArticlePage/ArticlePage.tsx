import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

import { getArticle } from '../../../api/articles';
import Header from '../../../components/Header/Header';
import { Content } from '../../../components/Content/Content';
import Footer from '../../../components/Footer/Footer';
import { Article } from '../../../components/Article/Article';
import { CONFIG } from '../../../environment';

export const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data: article, error } = useQuery({
    queryKey: ['article', slug],
    queryFn: () => getArticle(slug as string),
    enabled: !!slug,
  });

  React.useEffect(() => {
    if (error) {
      console.error(`Article '${slug}' not found. Flying home.`, error);
      navigate('/');
    }
  }, [error]);

  return (
    <>
      <Header />
      <Content>
        {article && (
          <>
            <Helmet>
              <title>{article?.title}</title>
            </Helmet>
            <Article article={article} withComments={CONFIG.COMMENTS_ON} />
          </>
        )}
      </Content>
      <Footer />
    </>
  );
};
