import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Content } from '../../../components/Content/Content';
import styles from './ContactPage.module.scss';

export const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact the lAImpost</title>
    </Helmet>
    <Header />
    <Content>
      <div id={styles.laimPageContact}>
        <div>contact@laimpost.com</div>
        <div id={styles.laimPageHomeLink}>
          <Link className="laimButton" to="/">
            Home
          </Link>
        </div>
      </div>
    </Content>
    <Footer />
  </>
);
