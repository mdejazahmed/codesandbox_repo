import { useContext } from "react";
import { Billing } from "./components/Billing/Billing.jsx";
import { SeatBook } from "./components/SeatBook/seatBook.jsx";
import { TopBar } from "./components/TopBar/topbar.jsx";
import "./styles.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <TopBar />
        <SeatBook />
        <Billing />
      </div>
    </ThemeProvider>
  );
}
