import { ReactElement, useEffect } from "react";
import { IoTriangleSharp } from "react-icons/io5";

// import userImage from "../../assets/images/user.png";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { RiMessage2Line } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { Card } from "../ui/card";

const UserMenuCard = ({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: Function;
}) => {
  const hideUserMenu = () => {
    setShowMenu(false);
  };

  const handleLogout = () => {
    hideUserMenu();
  };

  useEffect(() => {
    window.addEventListener("click", hideUserMenu);
    return () => window.removeEventListener("click", hideUserMenu);
  }, [hideUserMenu]);
  return (
    <Card
      className={`absolute origin-top-right right-[0%] top-[140%] z-[4]  w-fit rounded-sm border-none  py-8 shadow-lg  ${
        showMenu ? "scale-x-1 scale-y-1" : "scale-x-0 scale-y-1"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <IoTriangleSharp className="absolute bottom-[99%] right-[1%] text-card  shadow-xl" />
      <ul className=" flex flex-col gap-2 border-b pb-4">
        <div className="_user_info mb-2 flex items-center  gap-3  px-6 ">
          <div className="_image bg-red-900 aspect-[1/1] w-12 rounded relative">
            <img
              src={
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="admin photo"
              className=" top-0 left-0 w-full h-full rounded object-cover"
            />
          </div>
          <div className="">
            <p className="text-nowrap font-semibold capitalize">
              {"natnael"} {"deyas"}
            </p>
            <p className="text-sm text-foreground/80  text-left"> {"Admin"} </p>
          </div>
        </div>

        <UserMenuAction text="profile" link={"#profile"} handler={hideUserMenu}>
          <BiUser className="text-xl" />
        </UserMenuAction>

        <UserMenuAction text="messages" link={"#chat"} handler={hideUserMenu}>
          <RiMessage2Line className="text-xl " />
        </UserMenuAction>
      </ul>
      <UserMenuAction text="logout" isButton handler={handleLogout}>
        <CiLogout className="text-xl " />
      </UserMenuAction>
    </Card>
  );
};

export default UserMenuCard;

const UserMenuAction = ({
  children,
  link = "",
  handler,
  isButton,
  text,
}: {
  text: string;
  children: ReactElement;
  isButton?: boolean;
  link?: any;
  handler: Function;
}) => {
  const butonHandler = (e: any) => {
    if (isButton) e.preventDefault();
    if (handler) handler(e);
  };
  if (!isButton)
    return (
      <Link
        to={link}
        className="mt-2 flex items-center gap-2 hover:bg-secondary px-3 py-1 w-full text-foreground/80 "
        onClick={butonHandler}
      >
        {children}
        <p className="capitalize tracking-wide  ">{text}</p>
      </Link>
    );

  return (
    <button
      className="mt-2 flex items-center gap-2 hover:bg-secondary  px-3 py-1 w-full text-foreground/80 "
      onClick={butonHandler}
    >
      {children}
      <p className="ccapitalize tracking-wide ">{text}</p>
    </button>
  );
};
