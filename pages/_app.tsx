import { MainNav } from "@/components/shared/main-nav";
import { UserNav } from "@/components/shared/user-nav";
import "@/styles/globals.css";
// @ts-ignore
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>

      <Component {...pageProps} />
    </>
  );
}
