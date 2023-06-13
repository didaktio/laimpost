import type { CommentData } from '../components/Comments/Comments.types';
import { API_BASE_URL } from '../environment';
import { APIPath } from './enums';

export const getComment = async (id: string): Promise<CommentData> =>
  (await fetch(`${API_BASE_URL}${APIPath.Comments}/${id}?format=json`)).json();
