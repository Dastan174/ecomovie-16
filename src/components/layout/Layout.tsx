import type React from "react";
import Header from "./header/Header";
import scss from "./layout.module.scss";
import Footer from "./footer/Footer";

type ChildrenProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
