"use client";
import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { MdNightlight } from "react-icons/md";

import { useTheme } from "@/components/theme-provider/theme-provider";

// import userImage from "../../assets/images/user.png";
import { useDispatch, useSelector } from "react-redux";
import {
  displaySidebarSelector,
  hideSidebar,
  showSidebar,
} from "@/features/sidebarSlice.ts";

import NotificaionCard from "../card/notification-card.tsx";
import IconContainer from "../container/icon-container";
import UserMenuCard from "../card/user-menu-card";
import ImageContainer from "../container/image-container";
const Header = () => {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    if (theme == "light") setTheme("dark");
    if (theme == "dark") setTheme("light");
  };
  const [showNotificaionCard, setShowNotificaionCard] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const isSidebarVisible: any = useSelector(displaySidebarSelector);
  const dispatch = useDispatch();

  const handleDisplaySidebar = () => {
    if (!isSidebarVisible) dispatch(showSidebar());
    else dispatch(hideSidebar());
  };
  return (
    <header className="sticky top-0 w-full bg-card/50 shadow-xs  py-2 flex justify-between px-4 z-[1]">
      <div className="right-bar flex gap-2 items-center">
        <IconContainer
          Icon={LuMenu}
          noBg
          handler={() => {
            handleDisplaySidebar();
          }}
        />
        <div className="font-bold uppercase tracking-wide ">page name</div>
      </div>
      <div className="right-bar flex gap-3 px-2">
        <IconContainer
          Icon={IoMdNotificationsOutline}
          hasLabel
          labelValue={5}
          handler={(e: any) => {
            e.stopPropagation();
            setShowMenu(false);
            setShowNotificaionCard(!showNotificaionCard);
          }}
        >
          <NotificaionCard
            showNotificaionCard={showNotificaionCard}
            setShowNotificaionCard={setShowNotificaionCard}
          />
        </IconContainer>

        <IconContainer handler={toggleTheme} Icon={MdNightlight} />

        <div
          className="flex gap-2 items-center relative  px-1  "
          onClick={(e) => {
            e.stopPropagation();
            setShowNotificaionCard(false);
            setShowMenu(!showMenu);
          }}
        >
          <UserMenuCard setShowMenu={setShowMenu} showMenu={showMenu} />

          <ImageContainer
            img={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="admin image"
            className="aspect-[1/1] w-8 rounded-full "
          />
          <p className="font-semibold capitalize text-foreground/80">Natnael</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
