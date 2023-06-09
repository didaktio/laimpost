import * as React from 'react';

import { Article } from '../../components/Article/Article';
import { Article as ArticleProps } from '../../components/Article/Article.types';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { getArticles } from '../../api/articles';
import { Content } from '../../components/Content/Content';

export const Articles = () => {
  const [articles, setArticles] = React.useState<ArticleProps[] | null>(null);

  React.useEffect(() => {
    (async () => {
      if (!articles)
        try {
          setArticles(await getArticles());
        } catch (error) {
          console.error(error);
          // navigate('/');
        }
    })();
  }, []);

  return (
    <>
      <Header />
      <Content>
        <>
          {articles?.map((article, index) => {
            const isLast = index === articles.length - 1;
            return (
              <React.Fragment key={`frag-${article.title.replaceAll(' ', '')}`}>
                <Article key={article.title.replaceAll(' ', '')} {...article} />
                {!isLast && <hr key={`hr-${article.title.replaceAll(' ', '')}`} />}
              </React.Fragment>
            );
          })}
        </>
      </Content>
      <Footer />
    </>
  );
};
