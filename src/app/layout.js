import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/Components/Shared/Footer";
import { ContextProvider } from "@/Components/Context/ProveiderContext";
import { ToastContainer } from "react-toastify";
import NavBar from "@/Components/Shared/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper | Home Page",
  description: "This is homepage and parents",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ContextProvider>
          <NavBar />
          {children}
          <Footer />
          <ToastContainer />
        </ContextProvider>
      </body>
    </html>
  );
}
