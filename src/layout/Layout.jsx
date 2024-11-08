import { Outlet } from "react-router";
import Navbar from "../components/Navbar.jsx";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
