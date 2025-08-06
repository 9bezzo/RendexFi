import React from 'react';
import WalletConnects from './compontents/WalletConnect';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItmes: 'center', marginTop: 50 }}>
      <WalletConnects />
    </div>
  );
}