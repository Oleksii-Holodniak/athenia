import { UserProvider } from "@/common/contexts";
import { IUser } from "@/common/types/models";
import StyledComponentsRegistry from "@/lib/registry";
import "@/styles/globals.css";
import Theme from "@/theme/Theme";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import localFont from "next/font/local";
import { cookies } from "next/headers";

const greece = localFont({
  src: "../assets/fonts/dsgreece.ttf",
  variable: "--greece-font",
});
const nunito = Nunito({ subsets: ["latin"], variable: "--nunito" });

export const metadata: Metadata = {
  title: "Athenia",
  description: "Generated by create next app",
  icons: ["/favicon.png"],
};

const getUser = async (): Promise<IUser | null> => {
  const cookieStore = cookies();
  const token = cookieStore.get(process.env.COOKIES_NAME!);

  const res = await fetch(`${process.env.BASE_URL}/user/info`, {
    headers: {
      Cookie: `${token?.name}=${token?.value}`,
    },
  });
  if (res?.status === 200) {
    const data = await res.json();
    if (data?.result && data?.result?.length > 0) {
      return data?.result[0];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  return (
    <html lang="en" className={`${greece.variable} ${nunito.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <UserProvider initUser={user}>
            <Theme>{children}</Theme>
          </UserProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
