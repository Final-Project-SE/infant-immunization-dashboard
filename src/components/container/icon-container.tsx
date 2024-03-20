import { cn } from "@/lib/utils";

const IconContainer = ({
  children,
  hasLabel,
  labelValue,
  handler,
  Icon,
  noBg,
  iconsClassName,
}: any) => {
  return (
    <button
      className={`text-center p-2  relative  max-h-8 aspect-[1/1] ${
        noBg ? "" : "bg-muted"
      } `}
      onClick={handler}
    >
      {hasLabel && (
        <p className="absolute aspect-square rounded-full text-center bg-destructive text-destructive-foreground top-0 right-0 text-xs px-1 ">
          {labelValue}
        </p>
      )}
      <Icon className={cn("text-xl", iconsClassName)} />
      {children && children}
    </button>
  );
};

export default IconContainer;
