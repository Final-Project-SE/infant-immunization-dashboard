import { useTheme } from "@/utils/providers/theme-provider";
import React from "react";

function Logo() {
  const theme = useTheme();
  console.log(theme);
  const logoImg = theme.theme == "dark" ? "/logo-dark.png" : "/logo-light.png";

  return (
    <div className="text-center">
      <img className="h-[5rem] w-auto" src={logoImg} />
    </div>
  );
}

export default Logo;
