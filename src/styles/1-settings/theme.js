// @flow
import { rgba } from 'polished';

const BASE_BORDER_RADIUS = '2px';
const BASE_PADDING = '20px';

const GREEN = '#0CCD8E';
const LIGHT_GREEN = rgba(12, 205, 142, 0.2);
const BLUE = '#70CBED';
const YELLOW = '#FFBD29';
const ORANGE = '#FF7729';
const ORANGE_MEDIUM = '#FFAA00';
const RED = '#FF4229';
const RED_50 = rgba(255, 66, 41, 0.5);
const GREY = '#333333';
const LIGHT_GREY = '#E7E2DE';
const LIGHTER_GREY = '#F2EFED';
const GREY_50 = rgba(51, 51, 51, 0.5);
const GREY_30 = rgba(51, 51, 51, 0.3);
const GREY_10 = '#DEDBD9';
const WHITE = '#FFFFFF';

const flexboxgrid = {
  // Defaults
  gridSize: 12, // columns
  gutterWidth: 0.63, // rem
  outerMargin: 2, // rem
  mediaQuery: 'only screen',
  container: {
    sm: 46, // rem
    md: 61, // rem
    lg: 76, // rem
  },
  breakpoints: {
    xs: 0, // em
    sm: 48, // em
    md: 64, // em
    lg: 75, // em
  },
};

const theme = {
  baseBorderRadius: BASE_BORDER_RADIUS,
  basePadding: BASE_PADDING,
  colors: {
    GREEN,
    LIGHT_GREEN,
    BLUE,
    YELLOW,
    ORANGE,
    ORANGE_MEDIUM,
    RED,
    RED_50,
    GREY,
    LIGHT_GREY,
    LIGHTER_GREY,
    GREY_50,
    GREY_30,
    GREY_10,
    WHITE,
  },
  buttonBorderRadius: BASE_BORDER_RADIUS,
  buttonPaddingLarge: '15px 20px',
  buttonPaddingMedium: '10px 20px',
  buttonPaddingSmall: '2px 15px',
  flexboxgrid,
};

export default theme;

export type ThemeProps = { theme: typeof theme };
