import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div>
      <div id={styles.laimFooterButtons}>
        <Link className="laimButton" href="/contact">
          Contact
        </Link>
        <Link className="laimButton" href="/about">
          About
        </Link>
      </div>
    </div>
  );
};
