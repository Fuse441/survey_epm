import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon, Logo, Logout } from "@/components/icons";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Survey</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className=" sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className=" sm:flex gap-2">
          <ThemeSwitch />
          <Link anchorIcon={<Logout />} href="/login">
            Logout
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu />
    </HeroUINavbar>
  );
};
