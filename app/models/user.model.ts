export interface User {
  id: string;
  username: string;
  email: string;
  profileImage?: string;
  bio?: string;
  followers?: string[];
  following?: string[];
}