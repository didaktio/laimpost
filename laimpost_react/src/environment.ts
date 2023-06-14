declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_BASE_URL: string;
      REACT_APP_CONFIG_COMMENTS_ON?: 'TRUE' | 'FALSE';
    }
  }
}

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const CONFIG_COMMENTS_ON = process.env.REACT_APP_CONFIG_COMMENTS_ON === 'TRUE';
export const CONFIG = {
  COMMENTS_ON: CONFIG_COMMENTS_ON,
};
