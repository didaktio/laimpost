import { Comment } from '../Comment/Comment';
import type { CommentsProps } from './Comments.types';
import styles from './Comments.module.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const Comments = ({ comments }: CommentsProps) => (
  <QueryClientProvider client={queryClient}>
    <div id={styles.laimComments}>
      <div id={styles.laimCommentsHeading}>Comments</div>
      {comments.map((id) => (
        <Comment key={id} id={id} />
      ))}
    </div>
    );
  </QueryClientProvider>
);
