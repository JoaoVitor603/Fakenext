import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { NxRoutes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <NxRoutes />
    </BrowserRouter>
  );
}

export default App;
