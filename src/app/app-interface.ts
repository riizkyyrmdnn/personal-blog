export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  datetime: string;
  category: { title: string; href: string };
}
