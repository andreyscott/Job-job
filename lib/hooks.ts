import { ThemeContext } from "@/context/theme-context-provider";
import { useContext } from "react";

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
