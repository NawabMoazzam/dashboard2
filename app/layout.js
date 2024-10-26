import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import NavBottom from "./components/navbottom";
import ToastWrapper from "./components/toastwrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Prince Tech Dashboard",
  description: "This dashboard is a type of graphical user interface which often provides at-a-glance views of data relevant to a particular objective or process through a combination of visualizations and summary information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 pb-14`}>
        <ToastWrapper />
        {children}
        <NavBottom />
      </body>
      <Script src="https://cdn.lordicon.com/lordicon.js" strategy="afterInteractive" />
    </html>
  );
}
