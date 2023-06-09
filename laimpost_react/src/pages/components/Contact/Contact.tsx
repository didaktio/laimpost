import { Link } from 'react-router-dom';

import './Contact.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Content } from '../../../components/Content/Content';

export const Contact = () => (
  <>
    <Header />
    <Content>
      <div id="laim-page-contact">
        <div>contact@laimpost.com</div>
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
