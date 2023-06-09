import { Article } from "../components/Article/Article.types";
import { APIPath } from "./enums";


export const getArticles = async (): Promise<Article[]> => (await fetch(`${process.env.REACT_APP_API_BASE_URL}${APIPath.Articles}?format=json`)).json();

export const getArticle = async (id: string): Promise<Article> => (await fetch(`${process.env.REACT_APP_API_BASE_URL}${APIPath.Articles}/${id}?format=json`)).json();
