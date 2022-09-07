import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { SearchPage } from "./page/serach";
import { theme } from "./assets/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RoutsList = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
      <ToastContainer />
    </ThemeProvider>
  );
};
