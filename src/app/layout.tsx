import { ReactNode } from 'react';

// /C:/Users/Abhishek/OneDrive/Desktop/nextjs/my-app/src/app/layout.tsx


export const metadata = {
    title: 'My App',
    description: 'A Next.js application',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <header>
                </header>
                <main>{children}</main>
                <footer>
                </footer>
            </body>
        </html>
    );
}