import Link from 'next/link';
import Head from 'next/head';

import styles from './About.module.scss';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { Footer } from '../Footer/Footer';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About the lAImpost</title>
      </Head>
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
