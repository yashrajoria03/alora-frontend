import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { CartContextProvider } from "./context/cartContext";
import { SearchContextProvider } from "./context/searchContext";
import { ProductContextProvider } from "./context/productContext";
import { AllProductContextProvider } from "./context/AllProductContext";
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AllProductContextProvider>
      <AuthContextProvider>
        <SearchContextProvider>
          <CartContextProvider>
            <ProductContextProvider>
              <ThemeProvider>
                <App />
              </ThemeProvider>
            </ProductContextProvider>
          </CartContextProvider>
        </SearchContextProvider>
      </AuthContextProvider>
    </AllProductContextProvider>
  </React.StrictMode>
);
