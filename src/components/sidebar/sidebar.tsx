"use client";
import { displaySidebarSelector } from "@/features/sidebarSlice";
import { Link } from "react-router-dom";
import { ReactElement } from "react";
import { AiOutlineHome } from "react-icons/ai";

import { GrUserAdmin, GrUserFemale } from "react-icons/gr";

import { TbReport } from "react-icons/tb";

import { BsHospital } from "react-icons/bs";

import { useSelector } from "react-redux";
import { useTheme } from "../theme-provider/theme-provider";
import { RiSpeakLine } from "react-icons/ri";

import { FaChildren } from "react-icons/fa6";
import { WiTime7 } from "react-icons/wi";

const Logo = () => {
  const { theme } = useTheme();
  const logo = theme == "light" ? "logo-light.png" : "logo-dark.png";

  return (
    <div className="w-[90px] mx-auto mt-8 ">
      <img src={logo} />
    </div>
  );
};

type MenuItem = {
  icon: ReactElement;
  title: string;
  href: string;
};

const Menu = () => {
  const showSidebar: any = useSelector(displaySidebarSelector);

  const menuItems: MenuItem[] = [
    {
      icon: <AiOutlineHome />,
      title: "Dashboard",
      href: "/dashboard",
    },
    // {
    //   icon: <FaUserDoctor />,
    //   title: "Professtionals",

    //   href: "/health-professionals",
    // },
    {
      icon: <BsHospital />,
      title: "Health stations",
      href: "/health-stations",
    },
    {
      // icon: <TbDeviceAnalytics />,
      //   icon: <TbReportAnalytics />,
      icon: <TbReport />,
      title: "Reports",
      href: "/reports",
    },
    {
      icon: <WiTime7 />,
      title: "Appointments",
      href: "/appointments",
    },
    {
      icon: <GrUserFemale />,
      title: "Mothers",
      href: "/mothers",
    },
    {
      icon: <FaChildren />,
      title: "Children",
      href: "/children",
    },
    {
      icon: <RiSpeakLine />,
      title: "Vaccines",
      href: "/vaccines",
    },
    {
      icon: <GrUserAdmin />,
      title: "Admins",
      href: "/admins",
    },
    {
      icon: <RiSpeakLine />,
      title: "News",
      href: "/news",
    },
  ];
  return (
    <ul
      className={`${
        showSidebar ? "mt-14" : "mt-24"
      } flex flex-col gap-3 px-8 text-foreground/80 `}
    >
      {menuItems.map((menuItem: MenuItem, index: number) => (
        <MenuItem item={menuItem} key={index} />
      ))}
    </ul>
  );
};

const MenuItem = ({ item }: { item: MenuItem }) => {
  const showSidebar: any = useSelector(displaySidebarSelector);

  return (
    <Link to={item.href}>
      <div
        className={`flex items-center gap-3  transition-all duration-200    ${
          showSidebar ? "px-3 py-2 hover:bg-[#007aff]" : "justify-center"
        }  rounded-sm`}
      >
        <div className={`${!showSidebar && "mb-4"}`}>{item.icon}</div>
        <h2 className={` ${!showSidebar ? "hidden" : "block text-sm"}`}>
          {item.title}
        </h2>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const showSidebar: any = useSelector(displaySidebarSelector);

  return (
    <section className={`w-[20vw] bg-card/50  ${!showSidebar && "w-[5vw]"}   `}>
      {showSidebar && <Logo />}
      <Menu />
    </section>
  );
};

export default Sidebar;
