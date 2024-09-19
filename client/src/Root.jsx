import Header from "./components/Header";
import {
  createBrowserRouter,
  Outlet,
  Router,
  RouterProvider,
} from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
