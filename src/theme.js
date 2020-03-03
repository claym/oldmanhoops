// import { red } from '@material-ui/core/colors';
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#1F438B"
        },
        secondary: {
            main: "#00788c"
        },
        disabled: {
            main: "#d3d3d3"
        },
        error: {
            main: "#FF0000"
        },
        background: {
            default: "#fff"
        }
    },
    typography: {
        h3: {
            fontSize: "1.9rem",
            "@media (min-width:600px)": {
                fontSize: "3rem"
            },
            fontWeight: "bold",
        },
        subtitle1: {
          fontSize: "1rem",
          "@media (min-width:600px)": {
              fontSize: "1.5rem"
          },
          //fontWeight: "bold",
      }        
    }
});

export default theme;
