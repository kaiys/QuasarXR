import type { Metadata } from 'next';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Header from '../components/header/header';
import '../global.css';

import { SessionProvider } from "next-auth/react";

config.autoAddCss = false;

export const metadata: Metadata = {
  title : 'QuasarXR',
}

const htmlStyle = {
  width: "100vw",
  height: "100vh",
  margin: "0px",
  overflow: "hidden"
}

export default function RootLayout( { children } : { children: React.ReactNode } ) {
    return (
      <html lang="en">
        <body style={htmlStyle}>
            <Header/>
            <main>
              <SessionProvider> {children} </SessionProvider>
            </main>
            </body>
      </html>
    )
  }