// src/app/layout.tsx
'use client';

import './globals.css';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '@/lib/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'sonner';
import Footer from '@/components/Footer';
// import CartDrawer from '@/components/Cart/CartDrawer';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        
        <Provider store={store}>
          <Navbar/>
          <PersistGate loading={null} persistor={persistor}>
            {/* {children} */}
             <main className="pt-[72px] min-h-screen">{children}</main> {/* add padding-top to avoid overlap */}

            <Toaster richColors position="top-center" />
          </PersistGate>
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
