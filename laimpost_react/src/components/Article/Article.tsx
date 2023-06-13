import { Link } from 'react-router-dom';
import { Comments } from '../Comments/Comments';

import styles from './Article.module.scss';
import type { ArticleProps } from './Article.types';

export const Article = ({
  article: { title, description, body, image_src, image_alt, original_article, comments, slug },
  withComments,
  truncate,
  onImageClick,
}: ArticleProps) => (
  <div className={styles.laimArticle}>
    <img
      className={`${styles.laimArticleImage}${onImageClick ? ` laimPointer` : ''}`}
      loading="eager"
      src={image_src}
      alt={image_alt}
      onClick={onImageClick}
    />
    <h2>{title}</h2>
    <p>{description}</p>
    <p>
      {truncate ? (
        <>
          {body.substring(0, 748)}... <Link to={slug}>Read on {'->'}</Link>
        </>
      ) : (
        body
      )}
    </p>
    {original_article && (
      <>
        <div className={styles.laimArticleOriginalUrl}>
          A different take:{' '}
          <a href={original_article.url} target="_blank" rel="noopener">
            {original_article.url}
          </a>
        </div>
      </>
    )}
    {withComments && <Comments comments={comments} />}
  </div>
);
