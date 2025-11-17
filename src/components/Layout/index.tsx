import { lazy, ReactNode } from "react";

const Header = lazy(() => import("../Header"));
const Footer = lazy(() => import("../Footer"));

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
