// components/Header.js
"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import { Logo } from "../../../assets/Logo";
import { SearchIcon } from "../../../assets/Search";
import { Add } from "@/assets/Add";
import Image from "next/image";
import BellIcon from "../../../assets/bell.svg";
import { useRouter } from "next/navigation";

export default function DashHeader() {
  const router = useRouter();

  const handleLogout = React.useCallback(() => {
    localStorage.clear();
    router.replace("/info");
  }, [router]);

  return (
    <Navbar isBordered className=" ">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Logo />
          <p className="hidden text-black font-semibold font-poppins sm:block  ">
            ACME
          </p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3 ">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon />}
            type="search"
          />
          {/* <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem> */}
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        {/* <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon />}
          type="search"
        /> */}
        <NavbarItem>
          <div className="w-[50%]">
            <Link href="/submit">
              <Button color="primary" endContent={<Add />}>
                Create Post
              </Button>
            </Link>
          </div>
        </NavbarItem>

        <Button
          isIconOnly
          color="warning"
          variant="faded"
          aria-label="Take a photo"
        >
          <Image src={BellIcon} alt="File" />
        </Button>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold text-black font-poppins">
                Signed in as
              </p>
              <p className="font-semibold text-black font-poppins">
                zoey@example.com
              </p>
            </DropdownItem>
            <DropdownItem key="settings">
              <p className="font-semibold text-black font-poppins">
                My Settings
              </p>
            </DropdownItem>
            <DropdownItem key="team_settings">
              <p className="font-semibold text-black font-poppins">
                Team Settings
              </p>
            </DropdownItem>
            <DropdownItem key="analytics">
              <p className="font-semibold text-black font-poppins">Analytics</p>
            </DropdownItem>
            <DropdownItem key="system">
              <p className="font-semibold text-black font-poppins">System</p>
            </DropdownItem>
            <DropdownItem key="configurations">
              <p className="font-semibold text-black font-poppins">
                Configrations
              </p>
            </DropdownItem>
            <DropdownItem key="help_and_feedback">
              {" "}
              <p className="font-semibold text-black font-poppins">
                Help & Feedback{" "}
              </p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={handleLogout}>
              <p className="font-semibold text-black font-poppins">Log Out</p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
