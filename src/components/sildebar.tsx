import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

interface MenuItem {
  id: string;
  title: string;
  icon: string;
  icon_active: string;
  submenu: boolean;
  submenuItems: MenuItem[] | null;
  to: string | null;
  gap: string;
}

interface SildebarProps {
  Menus: MenuItem[];
  urlparth: string;
}

const Sildebar: React.FC<SildebarProps> = ({ Menus, urlparth }) => {
  const [submenuOpen, setsubmenuOpen] = useState<{ [key: string]: boolean }>({});

  const toggleSubmenu = (id: string) => {
    setsubmenuOpen(prev => ({
      ...prev,
      [id]: !prev[id], // Toggle submenu ของเมนูที่ถูกกด
    }));
  };

  return (
    <div className="w-60 bg-navbar-color min-h-screen pt-8 duration-300 flex flex-col justify-between">
      <div>
        <div className="flex gap-x-4 items-center">
          <img
            src={'./Vendor-logo.png'}
            className="cursor-pointer duration-500 w-36 ps-5 pe-5"
          />
        </div>
        <ul className="pt-6 p-2">
          {Menus.map((Menu) => (
            <li
              key={Menu.id}
              className={`flex flex-col rounded-md p-3 cursor-pointer hover:bg-hover-color text-gray-300 text-sm gap-x-4 
                ${Menu?.gap ? "mt-9" : "mt-2"} 
                ${Menu.to === urlparth && "bg-brown-sugar"} 
              `}
            >
              <div className="flex items-center">
                <Link to={`/${Menu.to}`} className="flex items-center gap-x-4 flex-1">
                  <img 
                    src={`./${Menu.to === urlparth ? Menu.icon_active : Menu.icon}`} 
                    alt={Menu.title}
                    className="w-6 h-6"
                  />
                  <span className={`font-bold text-base ${Menu.to === urlparth ? "text-white" : "text-brown-sugar"} origin-left duration-200`}>
                    {Menu.title}
                  </span>
                </Link>

                {Menu.submenu && (
                  <FaChevronDown 
                    className={`text-brown-sugar fw-bold cursor-pointer ${submenuOpen[Menu.id] && "rotate-180"}`} 
                    onClick={() => toggleSubmenu(Menu.id)}
                  />
                )}
              </div>

              {Menu.submenu && submenuOpen[Menu.id] && (
                <ul>
                  {Menu.submenuItems?.map((submenuItem, index) => (
                    <Link to={`/${submenuItem.to}`} key={submenuItem.id}>
                      <li key={index} className={`flex rounded-md p-3 px-5 cursor-pointer hover:bg-hover-submenu-color text-gray-300 text-sm items-center gap-x-4 ${submenuItem.to === urlparth && "bg-brown-sugar"} mt-4`}>
                        <img 
                          src={`./${submenuItem.to === urlparth ? submenuItem.icon_active : submenuItem.icon}`} 
                          alt={submenuItem.title}
                          className="w-6 h-6"
                        />
                        <span className={`font-bold text-base ${submenuItem.to === urlparth ? "text-white" : "text-brown-sugar"} origin-left duration-200 flex-1`}>
                          {submenuItem.title}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sildebar;