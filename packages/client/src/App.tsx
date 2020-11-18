import React from 'react';

import GlobalStyle from './styles/global';
import { SignIn } from './pages/SignIn';

import { AppProvider } from './hooks';

export const App: React.FC = () => (
  <>
    <GlobalStyle />

    <AppProvider>
      <SignIn />
    </AppProvider>
  </>
);
