import Link from 'next/link';

import styles from './Header.module.scss';

export const Header = () => (
  <div id={styles.laimHeader}>
    <h1 id={styles.laimLogo}>
      <Link className="laimUnderline" href="/">
        the l<span id={styles.lAIm}>AI</span>mpost
      </Link>
    </h1>
  </div>
);
