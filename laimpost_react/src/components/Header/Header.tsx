import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

export default () => {
  const navigate = useNavigate();

  return (
    <div id={styles.laimHeader}>
      <h1 id={styles.laimLogo} onClick={() => navigate('/')}>
        the l<span id={styles.lAIm}>AI</span>mpost
      </h1>
    </div>
  );
};
