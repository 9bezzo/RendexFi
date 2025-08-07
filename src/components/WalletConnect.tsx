import React from 'react';
import { ConnetionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModal, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';

require('@solana/wallet-adapter-react-ui/style.css');

const endpoint = 'https://api.mainnet-beta.solana.com';

export default function WalletConnects() {
    const wallets = [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter(),
    ];

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets = {wallets} autoConnect>
                <WalletModalProvider>
                    <WalletMultiButton />
                <WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}
