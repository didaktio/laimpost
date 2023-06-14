import type { ContentProps } from './Content.types';

import styles from './Content.module.scss';

export const Content = ({ children }: ContentProps) => (
  <main id={styles.laimcontent}>{children}</main>
);
