'use client';

import { useState } from 'react';
import { MainContext } from './MainContext';
import { AuthUser } from '@/ts/auth/authUser.type';

const MainProvider = ({ children }: { children: JSX.Element }) => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);

  return (
    <MainContext.Provider
      value={{
        authUser,
        setAuthUser,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
