import localFont from "next/font/local";
import { Inter, Andika, Lato } from "next/font/google";

const brandFont = localFont({
  src: "./files/ProtestRiot-Regular.ttf",
  display: "swap",
  variable: "--font-brand",
  style: "italic",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const andika = Andika({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-andika",
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["400", "700", "900"],
});

export { inter, brandFont, andika, lato };
