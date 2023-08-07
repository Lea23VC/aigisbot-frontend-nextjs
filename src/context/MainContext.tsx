import { AuthUser } from '@/ts/auth/authUser.type';
import { Dispatch, SetStateAction, createContext } from 'react';

type ContextProps = {
  authUser: AuthUser | null;
  setAuthUser: Dispatch<SetStateAction<AuthUser | null>>;
};

export const MainContext = createContext({} as ContextProps);
