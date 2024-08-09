import type { Preview } from "@storybook/react";
// import { withThemeFromJSXProvider } from '@storybook/addon-themes';
// import { Global, css } from '@emotion/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
