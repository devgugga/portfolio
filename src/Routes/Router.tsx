import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../Layouts/DefaultLayout.tsx";
import { Home } from "../Pages/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};
