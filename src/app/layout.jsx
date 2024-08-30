import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/headerNav/navBar";
import Footer from "@/components/footer";

const inter = Plus_Jakarta_Sans(
  { 
    subsets: ["latin"], 
    preload: true, 
    // display: 'swap' 
  });

export const metadata = {
  title: "AI Trends",
  description: "Empowering Automation, Driving AI Efficiency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-LightColor-100`}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
