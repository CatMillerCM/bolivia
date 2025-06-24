import { Quicksand } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "salt.flat() snaps",
  description: "Have fun creating your own perspective photos from the famous Uyuni salt flats with this interactive app",
  icons: {
    icon: '/favicon.ico'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-84SD328Z6J" />
    </html>
  );
};