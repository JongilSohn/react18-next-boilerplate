import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    mainColor: string;
    blueColor: string;
    redColor: string;
    grayLine: string;
    darkGray: string;
    whiteColor: string;
    mq: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
