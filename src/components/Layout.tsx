import { Outlet } from "react-router-dom";
import { Navbar, Contact } from "../components";

export const Layout = () => {
  return (
    <div className="bg-bg min-h-screen selection:bg-accent selection:text-bg">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Contact />
    </div>
  );
};
