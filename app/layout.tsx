import { Outfit } from "next/font/google";

import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

import Room from "./Room";

export const metadata = {
  title: "Image Editor",
  description: "A minimal Image editor ",
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "600", "700"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className={`${outfit.className} bg-white`}>
      <Room>
        <TooltipProvider>{children}</TooltipProvider>
      </Room>
    </body>
  </html>
);

export default RootLayout;
