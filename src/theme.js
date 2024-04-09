// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#F0F5FF',
      100: '#C6E0FF',
      200: '#9ACFFF',
      300: '#6EB8FF',
      400: '#43A5FF',
      500: '#1087FF',
      600: '#0B74D2',
      700: '#085C9E',
      800: '#05486A',
      900: '#02323D',
    },
    secondary: {
      50: '#FDF7F3',
      100: '#FAE6D3',
      200: '#F5CFB2',
      300: '#F0B791',
      400: '#EFA072',
      500: '#EC794E',
      600: '#D65F3E',
      700: '#B04B35',
      800: '#8A392C',
      900: '#6C2824',
    },
    // Add more custom colors as needed
  },
});

export default theme;
