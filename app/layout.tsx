import "./globals.css";
import "./bulma-custom-styles.css";

import NavigationBar from "@/components/navbar/NavigationBar";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata = {
  title: "webdevfor.me",
  description: "An opinionated website development course",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"en"} className={"has-navbar-fixed-top"}>
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
