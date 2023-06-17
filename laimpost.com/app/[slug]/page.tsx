import * as React from 'react';
import type { Metadata } from 'next';

import type { ArticleData } from '../Article/Article.types';
import { APIPath, API_BASE_URL, CONFIG } from '../config';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { Article } from '../Article/Article';
import { Footer } from '../Footer/Footer';
import type { PageProps } from '../types';

interface ArticlePageProps extends PageProps<'Article'> {}

export const generateMetadata = async ({
  params: { slug },
}: ArticlePageProps): Promise<Metadata> => {
  const article = await getArticle(slug);
  const title = article.title;
  const description = `${article.body.substring(0, 19)}...`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: article.image_src,
          alt: article.title,
        },
      ],
    },
  };
};

const getArticle = async (id: string): Promise<ArticleData> =>
  (
    await fetch(`${API_BASE_URL}${APIPath.Articles}/${id}?format=json`, {
      next: {
        tags: [id],
      },
    })
  ).json();

export default async function ArticlePage({ params: { slug } }: PageProps<'Article'>) {
  const article = await getArticle(slug);

  return (
    <>
      <Header />
      <Content>
        <Article
          article={article}
          withComments={CONFIG.COMMENTS_ON}
          imageOpts={{ priority: true }}
        />
      </Content>
      <Footer />
    </>
  );
}
