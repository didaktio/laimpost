declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_BASE_URL: string;
      CONFIG_COMMENTS_ON?: 'TRUE' | 'FALSE';
      API_ALLOWED_ORIGIN: string;
    }
  }
}

export const API_BASE_URL = process.env.API_BASE_URL;
export const CONFIG_COMMENTS_ON = process.env.CONFIG_COMMENTS_ON === 'TRUE';
export const CONFIG = {
  COMMENTS_ON: CONFIG_COMMENTS_ON,
};

export const API_ALLOWED_ORIGIN = process.env.API_ALLOWED_ORIGIN;
export const NODE_ENV = process.env.NODE_ENV;

export const enum APIPath {
  Articles = '/articles',
  Comments = '/comments',
}

export const enum APICacheTag {
  Articles = 'articles',
  Comment = 'comment',
}
