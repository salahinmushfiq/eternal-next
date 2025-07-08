'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '@/lib/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'sonner';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PageLoader>
          <Navbar />
          <main className="pt-[72px] min-h-screen">{children}</main>
          <Footer />
        </PageLoader>
        <Toaster richColors position="top-center" />
      </PersistGate>
    </Provider>
  );
}
