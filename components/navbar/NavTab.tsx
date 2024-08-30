import { MenuModel } from "@/data/model/menu/types";
import Link from "next/link";

type NavTabProps = {
  menu: MenuModel;
};

const NavTab = ({ menu }: NavTabProps) => {
  return (
    <Link
      href={menu.path}
      className="md:text-xl sm:text-base hover:text-gray-300 transition-colors hover:border-b"
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
