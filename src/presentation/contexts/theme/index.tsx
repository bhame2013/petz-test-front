import { ThemeProvider as ThemeProviderStyledComponents } from "styled-components";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderStyledComponents
      theme={{
        grey: "#d5d5d5",
        black: "#1d1d1d",
        "grey-800": "#747474",
        primaryColor: "#E40F0F",
      }}
    >
      {children}
    </ThemeProviderStyledComponents>
  );
}
