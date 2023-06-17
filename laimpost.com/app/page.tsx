import * as React from 'react';
import type { Metadata } from 'next';

import type { ArticleData } from './Article/Article.types';
import { APICacheTag, APIPath, API_BASE_URL } from './config';
import { Content } from './Content/Content';
import { Header } from './Header/Header';
import { Article } from './Article/Article';
import { Footer } from './Footer/Footer';

const getArticles = async (): Promise<ArticleData[]> =>
  (
    await fetch(`${API_BASE_URL}${APIPath.Articles}?format=json`, {
      next: {
        tags: [APICacheTag.Articles],
      },
    })
  ).json();

const title = 'the lAImpost | Byte the News';
const description =
  'Satirical news created by AGIs using AI created by AGIs to generate satirical news articles originally written by other AGIs and AIs probably.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: 'https://laimgroupbc20.blob.core.windows.net/laimpost/laimpost_kb.jpeg',
        alt: 'the lAImpost',
      },
    ],
  },
};

export default async function HomePage() {
  const articles = await getArticles();

  return (
    <>
      <Header />
      <Content>
        <>
          {articles.map((a, i) => {
            const isLast = i === articles.length - 1;
            return (
              <React.Fragment key={i}>
                <Article key={i} article={a} truncate={true} imageOpts={{ href: a.slug }} />
                {!isLast && <hr key={i} />}
              </React.Fragment>
            );
          })}
        </>
      </Content>
      <Footer />
    </>
  );
}
