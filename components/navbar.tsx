/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
'use client';
/* eslint-disable import/order */
import React, { useMemo, useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Avatar, Chip, Input, Button, Dropdown, Select, SelectItem } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { SearchIcon } from "lucide-react";

export const languages = [
  { key: "en", label: "EN" },
  { key: "es", label: "ES" },
  { key: "fr", label: "FR" },
  { key: "de", label: "DE" },
  { key: "it", label: "IT" },
  { key: "pt", label: "PT" },
  { key: "zh", label: "ZH" },
  { key: "ja", label: "JA" },
  { key: "hi", label: "HI" },
];

export const Navbar = () => {
  const searchInput = (
    <Input
      radius="sm"
      className="flex"
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      placeholder="Rechercher un produit"
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="2xl" position="sticky" className="mt-4 flex flex-wrap">
      {/* Desktop Navbar */}
      <NavbarContent className="hidden lg:flex w-full justify-between items-center">
        {/* Logo */}
        <NavbarBrand as="li" className="min-w-32">
          <NextLink href="/" className="flex items-center gap-2">
            <Image alt="logo" src={Logo} height={65} width={133} />
          </NextLink>
        </NavbarBrand>

        {/* Search Bar */}
        <NavbarItem className="w-full max-w-[700px] mr-20">{searchInput}</NavbarItem>

        {/* Menu Items */}
        <NavbarItem className="flex items-center gap-4 ">
          <Button
            as={Link}
            className="text-sm font-normal text-default-600 "
            href="/"
            startContent={<LightbulbOutlinedIcon />}
            variant="light"
          >
            Inspirations
          </Button>
          <Button
            as={Link}
            className="text-sm font-normal text-default-600"
            href="/"
            startContent={<FavoriteBorderOutlinedIcon />}
            endContent={<Chip size="sm" variant="flat">24</Chip>}
            variant="light"
          >
            Mes favoris
          </Button>
          <Button
            as={Link}
            className="text-sm font-normal text-white"
            href="/"
            startContent={<ShoppingCartOutlinedIcon className="text-white" />}
            color="primary"
            variant="solid"
            radius="sm"
          >
            Panier
          </Button>
          <Avatar size="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Select className="w-20" defaultSelectedKeys={["fr"]}>
            {languages.map((language) => (
              <SelectItem key={language.key}>{language.label}</SelectItem>
            ))}
          </Select>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Navbar */}
      <NavbarContent className="flex lg:hidden w-full justify-between items-center">
        {/* Logo */}
        <NavbarBrand as="li">
          <NextLink href="/" className="flex items-center gap-2">
            <Image alt="logo" src={Logo} height={40} width={100} />
          </NextLink>
        </NavbarBrand>


        <Avatar size="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />

        <NavbarMenuToggle aria-label="Toggle navigation menu" />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <div className="mt-4 px-4">{searchInput}</div>
        <div className="flex flex-col px-4 gap-4">
          <Button
            as={Link}
            aria-label="View inspirations"

            className="text-sm font-normal text-default-600 "
            href="/"
            startContent={<LightbulbOutlinedIcon />}
            variant="light"
          >
            Inspirations
          </Button>
          <Button
            as={Link}
            aria-label="View inspirations"

            className="text-sm font-normal text-default-600 "
            href="/"
            startContent={<FavoriteBorderOutlinedIcon />}
            endContent={<Chip size="sm" variant="flat">24</Chip>}
            variant="light"
          >
            Mes favoris
          </Button>
          <Button
            as={Link}
            aria-label="View inspirations"

            className="text-sm font-normal text-white"
            href="/"
            startContent={<ShoppingCartOutlinedIcon className="text-white" />}
            color="primary"
            variant="solid"
            radius="sm"
          >
            Panier
          </Button>

          <Select className="w-20" defaultSelectedKeys={["fr"]} aria-label="Select language"
          >
            {languages.map((language) => (
              <SelectItem key={language.key}>{language.label}</SelectItem>
            ))}
          </Select>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
