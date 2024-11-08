import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import React, { useState } from "react";

import { Fade } from "react-awesome-reveal";
import { useLocation, useNavigate } from "react-router";
import Sidebar from "./sidebarItems/Sidebar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div className="fixed h-28 bg-opacity-5 bg-orange-500 z-10 w-full">
        <div className="flex justify-between items-center w-full px-5 sm:px-12 mt-5 sm:mt-8">
          <Fade delay={300} duration={200}>
            <h1
              className="head-name border-4 border-orange-300 hover:border-orange-200 shadow-[0px_0px_5px_2px_#f6ad55] hover:shadow-[0px_0px_30px_10px_#f6ad55] duration-300 p-2 rounded-md hover:cursor-pointer text-orange-300 hover:text-orange-100 "
              onClick={() => {
                location.pathname === "/"
                  ? window.scrollTo({ top: 0, behavior: "smooth" })
                  : navigate("/");
              }}
            >
              Dipen Shrestha
            </h1>
          </Fade>

          <button className="hover:text-orange-500 duration-30">
            <MenuSharpIcon fontSize="large" onClick={handleOpen} />
          </button>
        </div>
      </div>
      <Sidebar open={open} handleClose={handleClose} />
    </div>
  );
};

export default Navbar;
