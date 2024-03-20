import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";

import ImageContainer from "../container/image-container";
import { formatTime } from "@/utils/constants/date";

const NotificationMessageCard = ({
  setShowNotificaionCard,
  notificationMessage: { senderImage, senderName, notificationHighlight, time },
}: any) => {
  const clickHandler = (e: any) => {
    e.stopPropagation();
    setShowNotificaionCard(false);
  };
  return (
    <Link
      to={"#notifcaions"}
      onClick={clickHandler}
      className="flex gap-2 mb-2  p-2  z-[5]  bg-accent/40"
    >
      <ImageContainer
        img={senderImage}
        alt="notification-image"
        className=" aspect-square w-8 h-8 rounded-full relative shrink-0"
      />

      <div className="_text  px-2 text-accent-foreground/90">
        <p className="text-left font-[500] text-sm text-accent-foreground ">
          {senderName}
        </p>
        <p className="text-sm text-left mt-1">{notificationHighlight}</p>
        <div className="flex gap-1 items-center mt-1 text-accent-foreground/70">
          <IoTimeOutline className="text-xs " />
          <p className="text-xs ">{formatTime(time)} </p>
        </div>
      </div>
    </Link>
  );
};

export default NotificationMessageCard;
