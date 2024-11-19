import "./globals.css";

import MainContainer from "@/components/MainContainer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
