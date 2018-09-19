import { css } from 'styled-components';
import theme from '../1-settings/theme';

const base = css`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Proxima Nova', sans-serif;
    background-color: ${theme.colors.LIGHTER_GREY};
  }
  body,
  html,
  #root {
    height: 100%;
  }

  *:focus,
  *:active {
    outline: none;
  }
`;

export default base;
