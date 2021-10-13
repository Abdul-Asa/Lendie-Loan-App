import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#E5F3FF',
      200: '#0E6BA8',
      300: '#0A2472',
      400: '#00072D',
      error: '#FF3B3B',
      warning: '#FFCC00',
      success: '#06C270',
      info: '#0063F7',
    },
  },
  fonts: {
    heading: 'EB Garamond',
    body: 'Lato',
  },
});

export default theme;
