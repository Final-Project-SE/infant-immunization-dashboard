import { cn } from "@/lib/utils";

const ImageContainer = ({ img, className, alt }: any) => {
  return (
    <div className={cn("image  relative", className)}>
      <img
        src={img}
        alt={alt}
        className=" top-0 left-0 w-full h-full rounded-full object-cover"
      />
    </div>
  );
};

export default ImageContainer;
