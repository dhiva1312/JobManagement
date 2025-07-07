'use client';

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
// import { theme } from '@/theme'; // Removed because module not found

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
