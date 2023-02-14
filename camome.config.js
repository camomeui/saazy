import { defineConfig } from "@camome/system";

export default defineConfig({
  themes: {
    // Customize theme here.
    common: {
      font: {
        family: {
          base: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`,
        },
      },
    },
    light: {},
    dark: {},
  },
});
