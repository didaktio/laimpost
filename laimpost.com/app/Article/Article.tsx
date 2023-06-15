import Link from 'next/link';
import Image from 'next/image';

import styles from './Article.module.scss';
import { Comments } from '../Comments/Comments';
import type { ArticleProps } from './Article.types';

export const Article = ({
  article: { title, description, body, image_src, image_alt, original_article, comments, slug },
  withComments,
  truncate,
  imageOpts,
}: ArticleProps) => {
  const image = (
    <Image
      className={styles.laimArticleImage}
      loading="eager"
      src={image_src}
      alt={image_alt}
      width={800}
      height={400}
      priority={imageOpts?.priority}
    />
  );
  return (
    <div className={styles.laimArticle}>
      {imageOpts?.href ? <Link href={imageOpts?.href}>{image}</Link> : image}
      <h2>{title}</h2>
      <p>{description}</p>
      <p>
        {truncate ? (
          <>
            {body.substring(0, 748)}... <Link href={slug}>Read on {'->'}</Link>
          </>
        ) : (
          body
        )}
      </p>
      {original_article && (
        <>
          <div className={styles.laimArticleOriginalUrl}>
            A different take:{' '}
            <a className="laimUnderline" href={original_article.url} target="_blank" rel="noopener">
              {original_article.url}
            </a>
          </div>
        </>
      )}
      {withComments && <Comments comments={comments} />}
    </div>
  );
};
