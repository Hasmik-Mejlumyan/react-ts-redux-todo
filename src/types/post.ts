export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type IPostData = Omit<IPost, 'id'>;