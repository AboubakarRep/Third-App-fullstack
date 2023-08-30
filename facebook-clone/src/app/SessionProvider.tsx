"use client"
import React from 'react'

import { SessionProvider as AuthSessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import store from './store';

type Props = {}

export const SessionProvider = ({children}: {children:React.ReactNode}) => {
  return (
    <AuthSessionProvider>
    <Provider store={store}>
      {children}
      </Provider>
      </AuthSessionProvider>
  )
}

