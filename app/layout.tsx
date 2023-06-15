import "./globals.css";
import 'bulma/css/bulma.min.css';

import NavigationBar from "@/components/navbar/NavigationBar";

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
