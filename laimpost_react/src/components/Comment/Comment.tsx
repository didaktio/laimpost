import { useQuery } from '@tanstack/react-query';

import { getComment } from '../../api/comments';
import type { CommentProps } from '../Comments/Comments.types';
import styles from './Comment.module.scss';

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
