import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const sans = 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

/**
 * Chakra v3 reset `teal` to a Tailwind-style scale (600 = #0d9488), which reads
 * distinctly green. This restores the v2 scale — a muted blue-green — so buttons
 * and badges keep the site's original colourway. The built-in semantic tokens
 * (`solid`, `fg`, `subtle`, …) all reference `{colors.teal.N}`, so overriding the
 * numeric scale is enough to carry the change everywhere.
 */
const tealV2 = {
  50: { value: '#E6FFFA' },
  100: { value: '#B2F5EA' },
  200: { value: '#81E6D9' },
  300: { value: '#4FD1C5' },
  400: { value: '#38B2AC' },
  500: { value: '#319795' },
  600: { value: '#2C7A7B' },
  700: { value: '#285E61' },
  800: { value: '#234E52' },
  900: { value: '#1D4044' },
  950: { value: '#14292C' },
};

const config = defineConfig({
  globalCss: {
    // The page gradient lives on <html> (see index.css), so the body must stay
    // transparent or Chakra's reset background would paint over it.
    body: { bg: 'transparent', color: '#102433' },
  },
  theme: {
    tokens: {
      colors: { teal: tealV2 },
      fonts: {
        heading: { value: sans },
        body: { value: sans },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
