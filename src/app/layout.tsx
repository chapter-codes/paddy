import "./globals.css";
import type { Metadata } from "next";
import { inter, brandFont, andika, lato } from "@fonts/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Paddy",
    default: "Paddy",
  },
  description: "chat, call and make videos with your friends - your paddy",
  metadataBase: new URL("https://paddy-{}.vercel.app"),
};

// export const metadata: Metadata = {
//   title: {
//     template: '%s | Acme Dashboard',
//     default: 'Acme Dashboard',
//   },
//   description: 'The official Next.js Learn Dashboard built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };
export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${brandFont.variable} ${andika.variable} ${lato.variable}`}
    >
      <body
        className={`h-screen h-[100svh] flex flex-col text-textColor font-lato`}
      >
        {props.children}
      </body>
    </html>
  );
}
