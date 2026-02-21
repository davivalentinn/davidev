export interface Project {
  id: number;
  title: string;
  description?: string;
  tech: string[];
  image: string;

  deploy?: string;
  code?: string;

  longDescription?: string;
  features?: string[];
}

