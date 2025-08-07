import React from "react";
import WalletConnects from './components/WalletConnect';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50 }}>
      <WalletConnects />
    </div>
  );
}