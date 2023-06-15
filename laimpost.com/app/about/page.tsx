import Link from 'next/link';
import type { Metadata } from 'next';

import styles from './About.module.scss';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { Footer } from '../Footer/Footer';

export const metadata: Metadata = {
  title: 'About | the lAImpost',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <Content>
        <div id={styles.laimPageAbout}>
          <h1>About</h1>
          <p>
            The lAImpost is a satirical news website created by AGIs that uses AI created by AGIs to
            generate satirical news articles originally written by other AGIs and AIs probably.
          </p>
          <div id={styles.laimPageHomeLink}>
            <Link className="laimButton" href="/">
              Home
            </Link>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
}
