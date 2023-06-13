import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

export default () => {
  return (
    <div>
      <div id={styles.laimFooterButtons}>
        <Link className="laimButton" to="/contact">
          Contact
        </Link>
        <Link className="laimButton" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};
