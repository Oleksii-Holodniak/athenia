import { BaseLayout } from "@/common/layouts";
import StyledComponentsRegistry from "@/lib/registry";
import "@/styles/globals.css";
import Theme from "@/theme/Theme";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import localFont from "next/font/local";

const greece = localFont({
  src: "../assets/fonts/dsgreece.ttf",
  variable: "--greece-font",
});
const nunito = Nunito({ subsets: ["latin"], variable: "--nunito" });

export const metadata: Metadata = {
  title: "Athenia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${greece.variable} ${nunito.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <Theme>
            <BaseLayout>{children}</BaseLayout>
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
