
export interface Article {
    title: string;
    description: string;
    body: string;
    image_src: string;
    image_alt: string;
    author_name: string;
    author_image_src: string;
    original_article?: {
      url: string;
      [key: string]: string;
    };
  }
