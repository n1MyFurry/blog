import { User, Session } from 'next-auth';

export interface Posts {
    id: string;
    text: string;
    subtext: string;
    views: number;
    readTime: number;
    createDate: Date;
    createdBy: {
      name: string;
      email: string;
      avatarUrl: string;
      id: string;
    };

}

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
    isAdmin: boolean;
    isModer: boolean;
    subscription: {
      edges: { node: Subscription }[];
    };
    posts: {
      edges: { node: Posts }[];
    }
}

export interface Subscription {
  subId: {
    edges: { node: UserProfile }[];
  };
  type: string;
  subStart: Date;
  subEnd: Date;
  coast: boolean;
}

export interface Comments {
  author: string;
  postId: {
    edges: { node: Posts };
  };
  text: string;
  commentDate: Date;
}

export interface SessionInterface extends Session {
  user: User & {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
    isAdmin: boolean;
  };
}