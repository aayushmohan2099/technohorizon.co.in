import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main id="main-content" style={{ flex: '1 0 auto', width: '100%' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
