"use client";

import { ReactElement, useMemo } from "react";
import { createTheme, PaletteColorOptions, ThemeProvider } from "@mui/material";

import { useTheme } from "@/utils/providers/theme-provider";

export function TableThemeProvider({ children }: { children: ReactElement }) {
  const { theme } = useTheme();

  const tableColors = useMemo(() => {
    if (theme == "light")
      return {
        bodyBg: "#fff",
      };
    if (theme == "dark")
      return {
        bodyBg: "#000 ",
      };
  }, [theme]);

  const tableTheme = useMemo(
    () =>
      createTheme({
        // shadows: {
        //   ShadowRoot: "none",
        // },

        palette: {
          // mode: theme as any, //let's use the same dark/light mode as the global theme
          // primary: { main: "rgb(255,122,0)" },
          // // primary: globalTheme.palette.secondary, //swap in the secondary color as the primary for the table
          // info: {
          //   main: "rgb(255,122,0)", //add in a custom color for the toolbar alert background stuff
          // },
          // background: {
          //   default: tableColors?.bodyBg,
          // },
        },
        typography: {
          button: {
            textTransform: "none", //customize typography styles for all buttons in table by default
            fontSize: "1.2rem",
          },
        },
        components: {
          MuiTooltip: {
            styleOverrides: {
              tooltip: {
                fontSize: "1.1rem", //override to make tooltip font size larger
              },
            },
          },
          MuiSwitch: {
            styleOverrides: {
              thumb: {
                color: "pink", //change the color of the switch thumb in the columns show/hide menu to pink
              },
            },
          },
        },
      }),
    [theme]
  );

  return <ThemeProvider theme={tableTheme}>{children}</ThemeProvider>;
}
