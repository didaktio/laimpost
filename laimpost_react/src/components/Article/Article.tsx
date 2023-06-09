import './Article.css';
import type { Article as ArticleProps } from './Article.types';

export const Article = ({
  title,
  description,
  body,
  image_src,
  image_alt,
  author_image_src,
  author_name,
  original_article,
}: ArticleProps) => (
  <div className="laim-article">
    <img className="laim-article-image" loading="eager" src={image_src} alt={image_alt} />
    <h2>{title}</h2>
    <p>{description}</p>
    <p>{body}</p>
    {original_article && (
      <>
        <div className="laim-article-original-url">Original Article: {original_article.url}</div>
      </>
    )}
  </div>
);
