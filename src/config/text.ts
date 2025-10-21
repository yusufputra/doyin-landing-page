import { mode } from "@chakra-ui/theme-tools";
import type { CSSObject } from "@emotion/react";

export const textStyles2 = {
  textStyles: {
    // Headings
    h1: {
      fontSize: "56px",
      fontWeight: "semibold",
      lineHeight: "120%",
    },
    h2: {
      fontSize: "48px",
      fontWeight: "semibold",
      lineHeight: "120%",
    },
    h3: {
      fontSize: "40px",
      fontWeight: "semibold",
      lineHeight: "120%",
    },
    h4: {
      fontSize: "32px",
      fontWeight: "semibold",
      lineHeight: "120%",
    },
    h5: {
      fontSize: "24px",
      fontWeight: "semibold",
      lineHeight: "120%",
    },
    h6: {
      fontSize: "20px",
      fontWeight: "semibold",
      lineHeight: "120%",
    },
    // Body Text
    bodyXLarge: {
      fontSize: "18px",
      fontWeight: "semibold",
    },
    bodyLarge: {
      fontSize: "16px",
      fontWeight: "semibold", // or "medium" / "regular" based on variation
      lineHeight: "150%",
    },
    bodyMedium: {
      fontSize: "14px",
      fontWeight: "semibold", // or "medium" / "regular" based on variation
      lineHeight: "150%",
    },
    bodySmall: {
      fontSize: "12px",
      fontWeight: "semibold", // or "medium" / "regular" based on variation
      lineHeight: "150%",
    },
    // Uppercase Text
    uppercaseLarge: {
      fontSize: "16px",
      fontWeight: "medium",
      lineHeight: "150%",
      textTransform: "uppercase",
    },
    uppercaseMedium: {
      fontSize: "14px",
      fontWeight: "medium",
      lineHeight: "150%",
      textTransform: "uppercase",
    },
    uppercaseSmall: {
      fontSize: "11px",
      fontWeight: "medium",
      lineHeight: "150%",
      textTransform: "uppercase",
    },
  },
};

export const textStyles = {
  components: {
    Text: {
      baseStyle: {
        color: "primary.600",
      },
      variants: {
        body: {
          fontSize: "16px",
          lineHeight: "150%",
        },
        heading: {
          fontSize: "24px",
          fontWeight: "semibold",
          lineHeight: "120%",
        },
      },
      defaultProps: {
        variant: "body",
      },
    },
  },
};
