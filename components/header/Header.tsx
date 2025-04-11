import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import cl from "./header.module.scss";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface IPage {
  href: string;
  title: string;
}

const Header = () => {
  const pages: IPage[] = [
    {
      href: "/coffee-machine",
      title: "Кавомашини",
    },
    {
      href: "/tv",
      title: "Телевізори",
    },
    {
      href: "/laptop-pc",
      title: "Ноутбуки/ПК",
    },
    {
      href: "/gaming-console",
      title: "Ігрові приставки",
    },
    {
      href: "/smartphone-tablet",
      title: "Телефони/Планшети",
    },
  ];
  return (
    <header className={cn(cl.header, "bg-primary")}>
      <div className={cl.logoWrapper}>
        <img
          className={cl.logo}
          src="/USLogo.png"
          alt="Universal Service"
          loading="lazy"
        />
      </div>
      <NavigationMenu className={cl.navMenu}>
        <NavigationMenuList>
          <NavigationMenuItem className={cl.navMenuItem}>
            <NavigationMenuTrigger
              className={cn(
                "group inline-flex h-9 w-max items-center justify-center rounded-md text-background px-4 py-2 text-lg font-bold transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent group",
                cl.menuTrigger
              )}
            >
              Ремонт{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </NavigationMenuTrigger>
            <NavigationMenuContent className={cl.menuContent}>
              {pages.map(({ href, title }, i) => (
                <NavigationMenuLink asChild key={i}>
                  <Link
                    href={href}
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-base",
                      cl.pageLink
                    )}
                  >
                    {title}
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className={cn(cl.navMenuItem)}>
            <NavigationMenuLink
              asChild
              className={cn("font-bold text-lg text-background ", cl.menuLink)}
            >
              <Link href={"/contacts"}>Команда</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className={cn(cl.navMenuItem)}>
            <NavigationMenuLink
              asChild
              className={cn("font-bold text-lg text-background ", cl.menuLink)}
            >
              <Link href={"/contacts"}>Контакти</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
