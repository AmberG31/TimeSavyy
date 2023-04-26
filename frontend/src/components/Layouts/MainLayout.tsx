import React, { PropsWithChildren } from "react";
import NavBar from "../NavBar/NavBar";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default MainLayout;
