import { useNavigate } from 'react-router-dom';
import './Header.css';

export default () => {
  const navigate = useNavigate();

  return (
    <div id="laim-header">
      <h1 id="laim-logo" onClick={() => navigate('/')}>
        the l<span id="laim-logo-text-ai">AI</span>mpost
      </h1>
    </div>
  );
};
