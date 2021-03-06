export namespace common {}
interface PaginationProps {
  requested: number;
  available: number;
}

interface UserProps {
  users: User[];
}

interface RootProps extends UserProps {
  pages: PaginationProps;
  redirect?: boolean;
}

interface PartialUser {
  id: number;
  xp: number;
  level: number;
  level_xp: number;
  last_known_as: string | null;
  last_known_avatar_url: string | null;
}

interface User {
  name: string;
  avatar: string;
  level_xp: number;
  levelup_xp: number;
  total_xp: number;
  level: number;
  rank: number;
}
