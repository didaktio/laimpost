import { Comment } from '../Comment/Comment';
import type { CommentsProps } from './Comments.types';
import styles from './Comments.module.scss';

export const Comments = ({ comments }: CommentsProps) => (
  <div id={styles.laimComments}>
    <div id={styles.laimCommentsHeading}>Comments</div>
    {comments.map((id) => (
      <Comment key={id} id={id} />
    ))}
  </div>
);
