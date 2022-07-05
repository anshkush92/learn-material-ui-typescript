// https://stackoverflow.com/questions/59365396/how-to-use-material-ui-custom-theme-in-react-with-typescript
// https://www.youtube.com/watch?v=ZyQlpX7lCRE
import { PaletteColor, PaletteColorOptions, Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomTheme extends Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    status?: {
      danger?: string;
    };
  }

  interface Palette {
    otherColor: PaletteColor;
    
  }

  interface PaletteOptions {
    otherColor?: PaletteColorOptions;
  }

  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
