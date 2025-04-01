import { ReactNode } from 'react';


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