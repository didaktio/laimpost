import { Link } from 'react-router-dom';

import './Footer.css';

export default () => {
  return (
    <div id="laim-footer">
      <div id="laim-footer-buttons">
        <Link className="laim-button" to="/contact">
          Contact
        </Link>
        <Link className="laim-button" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};
