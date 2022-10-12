import { AppBar, Toolbar, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import { Component } from "react";
import styles from "../../styles/bar.module.css";
import { NavLink } from "./reuse";


function Navbar() {
  return (
    <div className="top-0 w-full h-12 bg-black flex justify-center">
        <NavLink href="/">/home</NavLink>
        &nbsp;&nbsp;
        {/* <NavLink href="/about">/about</NavLink>
        &nbsp;&nbsp; */}
        <NavLink href="/about">/about</NavLink>
        {/* &nbsp;&nbsp;
        <NavLink href="/tools">/tools</NavLink> */}
        {/* <div className="md:ml-80 sm:ml-60 ml-16 float-right">
          <Menu />
        </div> */}
    </div>
  );
}

export default Navbar;