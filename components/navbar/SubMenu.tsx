import Link from "next/link";
import { MenuModel } from "@/data/model/menu/types";

type SubMenuProps = {
  menuList: MenuModel[];
};

const SubMenu = ({ menuList }: SubMenuProps) => {
  return (
    <div className="fixed top-20 left-0 right-0 z-20 bg-white/95 backdrop-blur-md border-t border-warm-dark/20 shadow-sm py-3">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2 px-6">
        {menuList.map((item) => (
          <Link
            key={item.title}
            href={item.path + `?type=${item.title}`}
            className="text-sm text-body-text hover:text-brand tracking-wider transition-colors duration-200 py-1"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
