import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

// Importar el plugin para la eliminación de variables no usadas
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      // Esta regla activa advertencias para variables e imports no usados
      "no-unused-vars": "warn",  
      // Plugin que elimina automáticamente los imports no utilizados
      "unused-imports/no-unused-imports": "error",  
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" },
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];