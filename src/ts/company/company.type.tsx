import { Console } from '@/ts/console/console.type';

export type Company = {
  id: number;
  name: string;
  consoles?: Console[];
};
