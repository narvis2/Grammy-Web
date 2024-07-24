import Link from "next/link";

import { MenuModel } from "@/data/model/menu/types";

type SubMenuProps = {
  menuList: MenuModel[];
};

const SubMenu = ({ menuList }: SubMenuProps) => {
  return (
    <div className="fixed top-20 left-0 right-0 z-30 bg-white shadow-md py-1">
      {menuList.map((item) => {
        return (
          <Link
            key={item.title}
            href={item.path + `?type=${item.title}`}
            className="block px-4 py-2 text-lg hover:bg-gray-100"
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default SubMenu;
