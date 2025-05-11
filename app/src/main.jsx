import { StrictMode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "./components/store/index.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </StrictMode>
);
