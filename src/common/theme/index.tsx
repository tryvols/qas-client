import React, { FC } from "react";
import { createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { ThemeProvider } from '@material-ui/styles';

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

export const AppThemeProvider: FC = (props) => {
  return (
    <ThemeProvider theme={appTheme}>
      {props.children}
    </ThemeProvider>
  );
}
