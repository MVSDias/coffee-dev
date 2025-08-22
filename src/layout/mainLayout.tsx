import { Outlet } from "react-router";
import Header from "../components/Header";
import { FooterPage } from "../components/Footer";

export function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <FooterPage />
    </>
  );
}
