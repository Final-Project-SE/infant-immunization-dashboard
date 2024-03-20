"use client";
import { displaySidebarSelector } from "@/features/sidebarSlice";
import { Link } from "react-router-dom";
import { ReactElement } from "react";
import { AiOutlineHome } from "react-icons/ai";

import { GrUserAdmin } from "react-icons/gr";

import { TbReport } from "react-icons/tb";

import { BsHospital } from "react-icons/bs";

import { useSelector } from "react-redux";
import { useTheme } from "../theme-provider/theme-provider";
import { RiSpeakLine } from "react-icons/ri";

const Logo = () => {
  const { setTheme, theme } = useTheme();
  const logo = theme == "light" ? "logo-light.png" : "logo-dark.png";

  return (
    <div className="w-[90px] mx-auto mt-8 ">
      <img src={logo} />
    </div>
  );
};
