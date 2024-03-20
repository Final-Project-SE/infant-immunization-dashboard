import { Link } from "react-router-dom";
import { IoTriangleSharp } from "react-icons/io5";
import { useEffect } from "react";
import NotificationMessageCard from "./notification-message-card";
// import userImage from "../../assets/images/user.png";
const NotificaionCard = ({
  showNotificaionCard,
  setShowNotificaionCard,
}: any) => {
  const hideNotificaionCard = () => {
    setShowNotificaionCard(false);
  };

  useEffect(() => {
    window.addEventListener("click", hideNotificaionCard);
    return () => window.removeEventListener("click", hideNotificaionCard);
  }, [hideNotificaionCard]);
  return (
    <div
      className={`absolute origin-top-right right-[0%] top-[150%] z-[55]  w-[20vw] rounded-sm bg-card px-6 py-4 shadow-lg   ${
        showNotificaionCard ? "scale-x-1 scale-y-1" : "scale-x-0 scale-y-1"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <IoTriangleSharp className="absolute bottom-[99%] right-[1%] text-card  shadow-xl" />

      <div className="header flex justify-between items-center mb-4  sticky top-0  ">
        <p className="capitalize  font-bold">notificaions</p>
        <Link
          to={"#notifcaions"}
          onClick={hideNotificaionCard}
          className="text-sm text-primary  hover:underline"
        >
          view all{" "}
        </Link>
      </div>
      <div className="h-64 overflow-y-scroll  thin_scrollbar py-4  ">
        {notifications.map((notification, index) => (
          <NotificationMessageCard
            key={index}
            notificationMessage={notification}
            setShowNotificaionCard={setShowNotificaionCard}
          />
        ))}
      </div>
    </div>
  );
};

const notifications: any[] = new Array(5).fill({
  senderImage:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  senderName: "Natnael",
  time: new Date(),
  notificationHighlight: "this is trimmed notifcation boy",
});

export default NotificaionCard;
