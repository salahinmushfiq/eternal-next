// src/app/client-layout.tsx
'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '@/lib/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'sonner';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
        <Toaster richColors position="top-center" />
      </PersistGate>
    </Provider>
  );
}
