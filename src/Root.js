import React, { useEffect } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import App from "./App";

export default function Root() {
  const theme = createTheme({
    typography: {
      fontFamily: ["GmarketSansMedium"],
    },
    palette: {
      primary: {
        main: "#32435f",
        contrastText: "#fff",
      },
      text: {
        main: "#000",
        contrastText: "#000",
      }
    },
  });

  useEffect(() => {
    const r = document.querySelector(":root");

    muiThemePaletteKeys.forEach((paletteKey) => {
      const themeColorObj = theme.palette[paletteKey];

      for (const key in themeColorObj) {
        if (Object.hasOwnProperty.call(themeColorObj, key)) {
          const colorVal = themeColorObj[key];
          r.style.setProperty(`--mui-color-${paletteKey}-${key}`, colorVal);
        }
      }
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </>
  );
}

const muiThemePaletteKeys = [
  "background",
  "common",
  "error",
  "grey",
  "info",
  "primary",
  "secondary",
  "success",
  "text",
  "warning",
];
