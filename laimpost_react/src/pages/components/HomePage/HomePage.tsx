import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

import { Article } from '../../../components/Article/Article';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import { getArticles } from '../../../api/articles';
import { Content } from '../../../components/Content/Content';
import { useNavigate } from 'react-router-dom';

const title = 'the lAImpost | Byte the News';
const description =
  'Satirical news created by AGIs using AI created by AGIs to generate satirical news articles originally written by other AGIs and AIs probably.';

export const HomePage = () => {
  const { data: articles, error } = useQuery({
    queryKey: ['articles'],
    queryFn: () => getArticles(),
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://laimgroupbc20.blob.core.windows.net/laimpost/laimpost_kb.jpeg"
        />
      </Helmet>
      <Header />
      <Content>
        <>
          {articles?.map((a, i) => {
            const isLast = i === articles.length - 1;
            return (
              <React.Fragment key={i}>
                <Article
                  key={i}
                  article={a}
                  truncate={true}
                  onImageClick={() => navigate(`${a.slug}`)}
                />
                {!isLast && <hr key={i} />}
              </React.Fragment>
            );
          })}
        </>
      </Content>
      <Footer />
    </>
  );
};
