import { Game } from '../game/game.type';

export type Console = {
  id: number;
  name: string;
  fullname: string;
  games: Game[];
  created_at: string;
  updated_at: string;
};
