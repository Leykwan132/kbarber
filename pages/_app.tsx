import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/router";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <div
          className={`${
            currentRoute !== "/" && currentRoute !== "/login" && "bg-black"
          }h-screen overflow-y-scroll `}
        >
          {currentRoute !== "/" && currentRoute !== "/login" && <Header />}
          <Component {...pageProps} />
          {currentRoute !== "/" && currentRoute !== "/login" && (
            <div className="fixed z-30 flex justify-center w-full bottom-8">
              <Navbar />
            </div>
          )}
          {currentRoute !== "/" && currentRoute !== "/login" && (
            <div className="fixed bottom-0 z-20 flex justify-center w-full h-[84px] p-4 bg-black" />
          )}
        </div>
      </SessionProvider>
    </RecoilRoot>
  );
}
