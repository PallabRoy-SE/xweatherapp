const { createTheme } = require("@mui/material");

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#204c22",
    },
    background: {
      default: "#f0f8ff",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          backgroundColor: "#4caf50",
          color: "white",
          "&:hover": {
            backgroundColor: "#357a38",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          border: "none",
          outline: "none",
        },
      },
    },
  },
});

export default theme;
