import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", 
    },
    secondary: {
      main: "#f57c00", 
    },
  },
  typography:
   {
    fontFamily: "Inter, Arial, sans-serif",
  },
});

export default theme;
