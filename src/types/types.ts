export interface BLOG {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  cover: {
    url: string;
    height: number;
    width: number;
  };
  body: string;
  tags: TAG[];
}
export interface TAG {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  slug: string;
}
