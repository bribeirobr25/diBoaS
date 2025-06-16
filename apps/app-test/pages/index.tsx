import React from 'react';
import { Header, Footer, Dashboard } from '@diboas/ui';

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}
