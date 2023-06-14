import * as React from 'react';

import type { ArticleData } from '../Article/Article.types';
import { APIPath, API_BASE_URL, CONFIG } from '../config';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { Article } from '../Article/Article';
import { Footer } from '../Footer/Footer';
import type { PageProps } from '../types';
import Head from 'next/head';

const getArticle = async (id: string): Promise<ArticleData> =>
  (await fetch(`${API_BASE_URL}${APIPath.Articles}/${id}?format=json`)).json();

export default async function ArticlePage({ params }: PageProps<{ slug: string }>) {
  const article = await getArticle(params.slug);

  return (
    <>
      <Head>
        <title>{article?.title}</title>
      </Head>
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
