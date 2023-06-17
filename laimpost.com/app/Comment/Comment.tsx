import { useQuery } from '@tanstack/react-query';

import styles from './Comment.module.scss';
import type { CommentData, CommentProps } from '../Comments/Comments.types';
import { APICacheTag, APIPath, API_BASE_URL } from '../config';

const getComment = async (id: string): Promise<CommentData> =>
  (
    await fetch(`${API_BASE_URL}${APIPath.Comments}/${id}?format=json`, {
      next: {
        tags: [APICacheTag.Comment, id],
      },
    })
  ).json();

export const Comment = ({ id }: CommentProps) => {
  const { data } = useQuery({
    queryKey: ['comment', id],
    queryFn: () => getComment(id),
  });

  if (!data) return null;

  return (
    <div>
      <div className={styles.laimCommentTimestamp}>
        {new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeStyle: 'short', hour12: false })
          .format(new Date(data.published_date))
          .replace(',', '')
          .replace(' at ', ', ')}
      </div>
      <div className={styles.laimCommentBody}>{data.body}</div>
    </div>
  );
};
