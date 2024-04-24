/** @type {import("tailwindcss").Config} */

const {
  default: flattenColorPalette
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  darkMode: ["class"],
  content: [
    'components/**/*.{ts,tsx}',
    'ui/**/*.{ts,tsx}',
    'src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        "card-entity-bg": "var(--card-entity-bg)",
        "danger-100": "var(--danger-100-color)",
        "danger-300": "var(--danger-300-color)",
        "danger-500": "var(--danger-500-color)",
        "danger-700": "var(--danger-700-color)",
        "danger-900": "var(--danger-900-color)",
        "dark-100": "var(--dark-100-color)",
        "dark-300": "var(--dark-300-color)",
        "dark-500": "var(--dark-500-color)",
        "dark-700": "var(--dark-700-color)",
        "dark-900": "var(--dark-900-color)",
        "dark-color": "var(--dark-color)",
        "light-100": "var(--light-100-color)",
        "light-300": "var(--light-300-color)",
        "light-500": "var(--light-500-color)",
        "light-700": "var(--light-700-color)",
        "light-900": "var(--light-900-color)",
        "overlay-color": "var(--overlay-color)",
        "primary-100": "var(--primary-100-color)",
        "primary-300": "var(--primary-300-color)",
        "primary-500": "var(--primary-500-color)",
        "primary-700": "var(--primary-700-color)",
        "primary-900": "var(--primary-900-color)",
        "red-dark": "var(--red-dark)",
        "red-light": "var(--red-light)",
        "secondary-color": "var(--secondary-color)",
        "skeleton-color": "var(--skeleton-color)",
        "success-100": "var(--success-100-color)",
        "success-300": "var(--success-300-color)",
        "success-500": "var(--success-500-color)",
        "success-700": "var(--success-700-color)",
        "success-900": "var(--success-900-color)",
        "warning-100": "var(--warning-100-color)",
        "warning-300": "var(--warning-300-color)",
        "warning-500": "var(--warning-500-color)",
        "warning-700": "var(--warning-700-color)",
        "warning-900": "var(--warning-900-color)"
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)"
      },
      fontFamily: {
        main: "var(--font-family-main)"
      },

      fontSize: {
        medium: "var(--font-size-medium)",
        regular: "var(--font-size-regular)",
        small: "var(--font-size-small)"
      },
      height: {
        "header": "var(--header-height)"
      },
      lineHeight: {
        medium: "var(--font-line-medium)",
        regular: "var(--font-line-regular)",
        small: "var(--font-line-small)"
      },
      width: {
        "sidebar": "var(--sidebar-width)"
      },
      zIndex: {
        "modal": "var(--modal-z-index)"
      },

      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        "shimmer": {
          from: { "backgroundPosition": "0 0" },
          to: {
            "backgroundPosition": "-200% 0"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'shimmer': "shimmer 2s linear infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors]

};

function addVariablesForColors({ addBase, theme }) {

  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars
  });
}