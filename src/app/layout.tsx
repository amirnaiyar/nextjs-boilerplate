'use client';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import ThemeProvider from './components/ThemeProvider';
import ToastManager from './components/Toast/ToastManager';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <ThemeProvider>
          <body>
            {children}
            <ToastManager />
          </body>
        </ThemeProvider>
      </UserProvider>
    </html>
  );
}
