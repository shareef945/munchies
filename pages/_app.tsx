import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import "@/styles/globals.css";

// @ts-ignore
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      </QueryClientProvider>

    </>
  );
}

