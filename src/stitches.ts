import { createStitches } from "@stitches/react";

export const theme = {
  fonts: {
    sans: "'Inter', Arial, sans-serif",
    display: "'Lora', 'Inter', Arial, sans-serif",
  },
  transitions: {
    all: "all 250ms cubic-bezier(0.16, 1, 0.3, 1)",
    load: "all 1.25s cubic-bezier(0.16, 1, 0.3, 1)",
  },
};

export const { styled, css, keyframes, createTheme } = createStitches({
  theme,
});
