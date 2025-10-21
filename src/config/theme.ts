import { theme as defaultTheme, extendTheme } from "@chakra-ui/react";
import { textStyles } from "./text";

const theme = extendTheme({
  ...defaultTheme,
  textStyles,
  fonts: {
    heading: `'Figtree', sans-serif`,
    body: `'Figtree', sans-serif`,
  },
  colors: {
    primary: {
      50: "#F5F9F9",
      100: "#DCEEF2",
      200: "#AACDD4",
      300: "#80B4BE",
      400: "#569CA8",
      500: "#016A7D",
      600: "#015868",
      700: "#01353F",
      800: "#01353F",
      900: "#00232A",
    },
    grayscale: {
      50: "#F8FAFC",
      100: "#F1F4F8",
      200: "#E3E8EF",
      300: "#CDD5E0",
      400: "#97A3B6",
      500: "#677489",
      600: "#4A5567",
      700: "#364153",
      800: "#20293A",
      900: "#111729",
    },
    success: {
      100: "#DEF5ED",
      200: "#C6EEE1",
      300: "#87DCC0",
      400: "#42D0A1",
      500: "#049F6C",
      600: "#096B4B",
    },
    info: {
      100: "#EBF2FE",
      200: "#D6E6FD",
      300: "#9DC1FB",
      400: "#71A4F5",
      500: "#3882F6",
      600: "#0950C3",
    },
    warning: {
      100: "#FFFE60",
      200: "#FFEB99",
      300: "#FFDEA6",
      400: "#FFB44C",
      500: "#F29C06",
      600: "#BE7A03",
    },
    danger: {
      100: "#FFF0F3",
      200: "#FADBE1",
      300: "#E8A296",
      400: "#F54B6B",
      500: "#DF1C41",
      600: "#841127",
    },
  },
  components: {
    Text: {
      defaultProps: {
        color: "grayscale.900",
      },
    },
  },
});

export { theme };
