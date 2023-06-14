import Link from 'next/link';
import Head from 'next/head';

import { Content } from '../Content/Content';
import { Header } from '../Header/Header';
import styles from './Contact.module.scss';
import { Footer } from '../Footer/Footer';

export default async function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact the lAImpost</title>
      </Head>
      <Header />
      <Content>
        <div id={styles.laimPageContact}>
          <div>contact@laimpost.com</div>
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
