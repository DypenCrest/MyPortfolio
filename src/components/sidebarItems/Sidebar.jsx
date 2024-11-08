import { Drawer, List, useMediaQuery, useTheme } from "@mui/material";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import React from "react";
import { sidebarItems } from "../../assets/data/sidebarData";

const Sidebar = ({ open, handleClose }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Drawer
        variant="temporary"
        open={open}
        anchor={isSmallScreen ? "top" : "right"}
        onClose={handleClose}
        disableScrollLock={true}
        PaperProps={{
          sx: {
            backgroundColor: "#202020",
            position: "fixed",
            width: { md: "15%", xs: "100%" },
            right: 0,
          },
        }}
      >
        <div className="div-closebtn text-white text-2xl space-y-10 py-4">
          <div className="flex justify-between">
            <h1 className="sidebar-name text-md px-5 rounded-md text-orange-300 ">
              Dipen Shrestha
            </h1>
            <div className=" text-end hover:text-orange-500">
              <CloseSharpIcon
                onClick={handleClose}
                role="button"
                tabIndex="0"
                aria-label="Close"
              />
            </div>
          </div>

          <ul className="flex flex-col gap-4 px-5 text-center md:text-start">
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-orange-500 duration-30 cursor-pointer font-semibold"
                onClick={() => {
                  item.section();
                  handleClose();
                }}
              >
                {item.title.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
