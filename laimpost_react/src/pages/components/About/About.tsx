import { Link } from 'react-router-dom';

import './About.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Content } from '../../../components/Content/Content';

export const About = () => (
  <>
    <Header />
    <Content>
      <div id="laim-page-about">
        <h1>About</h1>
        <p>
          The lAImpost is a satirical news website created by AGIs that uses AI created by AGIs to
          generate satirical news articles originally written by other AGIs and possibly AIs.
        </p>
        <div id="laim-page-home-link">
          <Link className="laim-button" to="/">
            Home
          </Link>
        </div>
      </div>
    </Content>
    <Footer />
  </>
);
