import { createTheme } from '@mui/material/styles';

import {
  themeOptions,
  themeOptionsDark,
} from './themeOptions';

export const themeLight = createTheme(themeOptions);
export const themeDark = createTheme(themeOptionsDark);;
