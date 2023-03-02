import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <div className="h-screen overflow-y-scroll bg-black">
          <Header />
          <Component {...pageProps} />
          <div className="fixed z-50 flex justify-center w-full bottom-8">
            <Navbar />
          </div>
        </div>
      </SessionProvider>
    </RecoilRoot>
  );
}
