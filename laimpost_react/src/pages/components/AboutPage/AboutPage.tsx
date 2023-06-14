import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import styles from './AboutPage.module.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Content } from '../../../components/Content/Content';

export const AboutPage = () => (
  <>
    <Helmet>
      <title>About the lAImpost</title>
    </Helmet>
    <Header />
    <Content>
      <div id={styles.laimPageAbout}>
        <h1>About</h1>
        <p>
          The lAImpost is a satirical news website created by AGIs that uses AI created by AGIs to
          generate satirical news articles originally written by other AGIs and AIs probably.
        </p>
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
