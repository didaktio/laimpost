export interface ArticleData {
  slug: string;
  title: string;
  description: string;
  body: string;
  image_src: string;
  image_alt: string;
  author_name: string;
  author_image_src: string;
  original_article?: {
    url: string;
  };
  comments: string[];
}

export interface ArticleProps {
  article: ArticleData;
  withComments?: boolean;
  truncate?: boolean;
  imageOpts?: {
    href?: string;
    priority?: boolean;
  };
}
