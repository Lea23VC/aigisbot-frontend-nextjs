import { Console } from '../console/console.type';

export type Game = {
  id: number;
  name: string;
  url: string;
  password: string;
  release_date: string;
  developer: string;
  publisher: string;
  genre: string;
  players: string;
  availability: boolean;
  console: Console;
  created_at: string;
  updated_at: string;
};
