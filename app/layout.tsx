import '@/app/ui/global.css';
import { inter, lusitana } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lusitana.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
