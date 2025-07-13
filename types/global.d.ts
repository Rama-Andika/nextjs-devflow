interface TagType {
  _id: string;
  name: string;
}

interface AuthorType {
  _id: string;
  name: string;
  image?: string;
}

interface QuestionType {
  _id: string;
  title: string;
  tags: TagType[];
  author: AuthorType;
  createdAt: Date;
  upvotes: number;
  answers: number;
  views: number;
}
