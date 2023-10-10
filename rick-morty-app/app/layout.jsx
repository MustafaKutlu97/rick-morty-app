import Navbar from "./components/Navbar";
import "./globals.css";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ 
  subsets: ["latin"],
  weight: ["400","700"] 
});

export const metadata = {
  title: "AOS Rick and Morty App",
  description: "Next 13 ile Uygulama Geliştirme",
  keywords:"aos, next, udemy, react"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
