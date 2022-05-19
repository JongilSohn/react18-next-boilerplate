import { css, Global } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: Noto Sans KR, sans-serif;
        /* 아래부분 수정 */
      }

      a {
        /* color: inherit; */
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
);
