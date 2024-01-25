import { MainNav } from "@/components/shared/main-nav";
import { UserNav } from "@/components/shared/user-nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((Settings) => settings)

  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <Component {...pageProps} />
    </>
  );
}
