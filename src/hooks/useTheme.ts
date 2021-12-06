import { useState } from "react";

type ThemeState = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeState>("dark");
  return { theme, setTheme };
};
