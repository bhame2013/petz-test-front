import dynamic from "next/dynamic";

const QueryClientProvider = dynamic(
  () => import("@tanstack/react-query").then((e) => e.QueryClientProvider),
  {
    ssr: false,
  }
);

import { QueryClient } from "@tanstack/react-query";

import { ThemeProvider } from "src/presentation/contexts";

export const queryClient = new QueryClient()

const componentToRender = (component: JSX.Element) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      {component}
    </ThemeProvider>
  </QueryClientProvider>
)

export default componentToRender