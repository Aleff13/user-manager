interface User {
  id?: string;
  name: string;
  password: string;
  organization?: string;
  createdAt?: number;
  updatedAt?: number;
}

export type { User };
