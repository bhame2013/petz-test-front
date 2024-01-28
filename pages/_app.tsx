import "reflect-metadata";

import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

import { QueryClient } from "@tanstack/react-query";

const QueryClientProvider = dynamic(
  () => import("@tanstack/react-query").then((e) => e.QueryClientProvider),
  {
    ssr: false,
  }
);


import { ThemeProvider } from "@/presentation";

import "styles/reset.css";
import "styles/globals.css";
import "styles/fonts.css";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
