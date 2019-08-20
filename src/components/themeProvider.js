import * as React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { default as defaultTheme } from "./theme";
import Header from "./Header";
import "./styles.css";
export default function ThemeProvider({ children, location }) {
  return (
    <div>
      <Header location={location} />
      <EmotionThemeProvider theme={{ ...defaultTheme }}>
        {children}
      </EmotionThemeProvider>
    </div>
  );
}
