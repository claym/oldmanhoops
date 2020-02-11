// import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1F438B',
    },
    secondary: {
      main: '#00788c',
    },
    disabled: {
      main: '#d3d3d3',
    },
    error: {
      main: '#FF0000',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
