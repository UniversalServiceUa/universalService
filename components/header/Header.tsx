import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import clsx from "clsx";
import cl from "./header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logo-wrapper">
          <img
            className="logo"
            src="/USLogo.png"
            alt="Universal Service"
            loading="lazy"
          />
        </div>
        {/* <nav>
          <ul className="nav-links">
            <li className="dropdown">
              <a href="#">Послуги▾</a>
              <ul className="dropdown-menu">
                <li><a className="scroll-link" href="#coffe">Кавові машини</a></li>
                <li><a className="scroll-link" href="#tv">Телевізори</a></li>
                <li><a className="scroll-link" href="#laptop">Ноутбуки \ комп'ютери</a></li>
                <li><a className="scroll-link" href="#mobile">Смартфони \ планшети</a></li>
              </ul>
            </li>
            <li>
              <a className="scroll-link" href="#map-block">Локації</a>
            </li>
            <li>
              <a className="scroll-link" href="#footer">Контакти</a>
            </li>
          </ul>
        </nav> */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Послуги</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href={"/coffee-machines"}>Кавомашини</Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
