import type { ArticleData } from '../components/Article/Article.types';
import { API_BASE_URL } from '../environment';
import { APIPath } from './enums';

export const getArticles = async (): Promise<ArticleData[]> =>
  (await fetch(`${API_BASE_URL}${APIPath.Articles}?format=json`)).json();

export const getArticle = async (id: string): Promise<ArticleData> =>
  (await fetch(`${API_BASE_URL}${APIPath.Articles}/${id}?format=json`)).json();
