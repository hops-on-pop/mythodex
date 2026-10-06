// @ts-check

/** @type {import("prettier").Config} */
export default {
  semi: false,
  printWidth: 80,
  singleAttributePerLine: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],

  // Sorts Tailwind classes in class attributes and in tailwind-variants'
  // tv() calls (Starwind's variant files).
  tailwindStylesheet: "./src/styles/global.css",
  tailwindFunctions: ["tv"],
}
