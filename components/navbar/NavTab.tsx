import { MenuModel } from "@/data/model/menu/types";
import Link from "next/link";

type NavTabProps = {
  menu: MenuModel;
  className?: string;
};

const NavTab = ({ menu, className }: NavTabProps) => {
  return (
    <Link
      href={menu.path}
      className={
        className ??
        "text-sm tracking-widest-xl font-light uppercase transition-colors duration-300 hover:opacity-70"
      }
      onClick={(e) => {
        e.preventDefault();
        window.location.href = menu.path;
      }}
    >
      {menu.title}
    </Link>
  );
};

export default NavTab;
