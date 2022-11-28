import { Route, Routes } from "react-router-dom";
import Home from "../pages";

export const NxRoutes: React.FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);
