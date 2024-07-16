import { MenuModel } from "@/data/model/menu/types";
import Link from "next/link";

type DrawerMenuProps = {
  menuList: MenuModel[];
};

const DrawerMenu = ({ menuList }: DrawerMenuProps) => {
  return (
    <div className="sm:hidden bg-white">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {menuList.map((item) => {
          return (
            <Link
              href={item.path}
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DrawerMenu;
