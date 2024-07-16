import { MenuModel } from "@/data/model/menu/types";
import Link from "next/link";

type NavTabProps = {
  menu: MenuModel;
};

const NavTab = ({ menu }: NavTabProps) => {
  return (
    <Link
      href={menu.path}
      className="text-lg sm:text-xl hover:text-gray-300 transition-colors hover:underline"
    >
      {menu.title}
    </Link>
  );
};

export default NavTab;
