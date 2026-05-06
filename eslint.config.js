import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { 
      globals: {
        ...globals.node // Ceci permet d'utiliser require, module, process, etc.
      } 
    }
  },
  pluginJs.configs.recommended,
];
