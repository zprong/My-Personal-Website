import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
};

export default {
  ...config,
  theme: {
    ...config.theme,
    extend: {
      ...config.theme?.extend,
    },
  },
  plugins: [
    function ({ addBase }: any) {
      addBase({
        'body': {
          '@apply text-neutral-700 dark:text-neutral-300': {},
        },
      });
    },
  ],
} satisfies Config;
