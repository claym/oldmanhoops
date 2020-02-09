// import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1F438B',
    },
    secondary: {
      main: '#D3D3D3',
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
