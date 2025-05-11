import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoute/AppRoute";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
