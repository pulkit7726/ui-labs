import CustomThemeProvider from './../src/themeing/CustomeThemeProvider';
import { CssBaseline } from "@mui/material";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    return (
      <CustomThemeProvider>
        <CssBaseline enableColorScheme/>
        <Story />
      </CustomThemeProvider>
    );
  }
];