export interface CommentData {
  id: string;
  body: string;
  article: string;
  published_date: string;
}

export interface CommentsProps {
  comments: string[];
}

export interface CommentProps {
  id: string;
}
