import React from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";

require('@solana/wallet-adapter-react-ui/styles.css');

const endpoint = "https://api.devnet.solana.com";

export default function App() {
  const wallets = [
    new PhantomWalletAdapter(),
  ];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50 }}>
            <h1>Solana Dapp Beispiel</h1>
            <WalletMultiButton />
            <p>Verbinde deine Wallet, um loszulegen!</p>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
