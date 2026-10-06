// @ts-check
import js from "@eslint/js"
import prettier from "eslint-config-prettier"
import astro from "eslint-plugin-astro"
import { defineConfig, globalIgnores } from "eslint/config"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig(
  globalIgnores(["dist/", ".astro/", "working/"]),

  js.configs.recommended,
  tseslint.configs.recommended,

  // .astro files: frontmatter, template and <script> tags. The jsx-a11y set
  // runs through eslint-plugin-jsx-a11y-x, the fork that supports ESLint 10;
  // eslint-plugin-astro picks it up automatically.
  astro.configs.recommended,
  astro.configs["jsx-a11y-recommended"],

  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // Destructuring a key out just to drop it from `...rest` is intended.
      "@typescript-eslint/no-unused-vars": [
        "error",
        { ignoreRestSiblings: true },
      ],
    },
  },

  // Formatting is Prettier's job; this turns off every rule that would
  // disagree with it. Keep it last.
  prettier,
)
