declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_BASE_URL: string;
      CONFIG_COMMENTS_ON?: 'TRUE' | 'FALSE';
    }
  }
}

export const API_BASE_URL = process.env.API_BASE_URL;
export const CONFIG_COMMENTS_ON = process.env.CONFIG_COMMENTS_ON === 'TRUE';
export const CONFIG = {
  COMMENTS_ON: CONFIG_COMMENTS_ON,
};

export const enum APIPath {
  Articles = '/articles',
  Comments = '/comments',
}
