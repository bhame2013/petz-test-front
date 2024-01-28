import dynamic from "next/dynamic";

import { ThemeProvider } from "@/presentation";

const QueryClientProvider = dynamic(
  () => import("@tanstack/react-query").then((e) => e.QueryClientProvider),
  {
    ssr: false,
  }
);

import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient()

const componentToRender = (component: JSX.Element) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      {component}
    </ThemeProvider>
  </QueryClientProvider>
)

export default componentToRender