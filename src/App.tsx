import React from 'react';
import AppLayout from './layouts/AppLayout';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </div>
  );
}

export default App;