import Link from 'next/link';
import type { Metadata } from 'next';

import { Content } from '../Content/Content';
import { Header } from '../Header/Header';
import styles from './Contact.module.scss';
import { Footer } from '../Footer/Footer';

export const metadata: Metadata = {
  title: 'Contact | the lAImpost',
};

export default async function ContactPage() {
  return (
    <>
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
