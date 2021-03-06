import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    logo: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      text: string;
    };
  }
}
