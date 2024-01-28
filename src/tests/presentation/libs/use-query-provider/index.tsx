import dynamic from "next/dynamic";

import { QueryClient } from "@tanstack/react-query";

const QueryClientProviderLib = dynamic(
  () => import("@tanstack/react-query").then((e) => e.QueryClientProvider),
  {
    ssr: false,
  }
);

const queryClient = new QueryClient();

export function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProviderLib client={queryClient}>
      {children}
    </QueryClientProviderLib>
  );
}
