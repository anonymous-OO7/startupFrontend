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
import { Add } from "@/assets/Add";
import Image from "next/image";
import BellIcon from "../../../assets/bell.svg";
import { useRouter } from "next/navigation";
import { nextLocalStorage } from "@/utils/nextLocalStorage";
import { Search } from "lucide-react";

interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  college: string;
  company: string;
  phoneNo: string;
  gender: string;
  course: string;
  createdAt: string; // Assuming createdAt is always a string in ISO 8601 format
}

export default function DashHeader() {
  const router = useRouter();

  // const userData = JSON.parse(nextLocalStorage()?.getItem("user_data") ?? "");

  const handleLogout = React.useCallback(() => {
    localStorage.clear();
    router.replace("/info");
  }, [router]);

  const [data, setData] = React.useState<UserData>();

  React.useEffect(() => {
    const storedData = nextLocalStorage()?.getItem("user_data");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setData(parsedData);
      } catch (error) {
        console.log("USER DATA NOT PARSED");
      }
    }
  }, []);

  return (
    <Navbar isBordered className=" ">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Logo />
          <p className=" text-black font-semibold font-poppins sm:block  ">
            {data?.college != "" ? data?.college : "---"}
          </p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[20rem] h-10 rounded-lg",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search here..."
            size="sm"
            startContent={<Search />}
            type="search"
          />
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
              <Button
                className="bg-stone-200 hover:bg-stone-300 p-2 shadow-md text-black rounded-md font-poppins font-normal"
                color="primary"
                endContent={<Add />}
              >
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
          className="h-8"
        >
          <Image height={18} src={BellIcon} alt="File" />
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
              src="https://cdn1.vectorstock.com/i/1000x1000/77/10/men-faceless-profile-vector-13567710.jpg"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold text-black font-poppins">
                Signed in as
              </p>
              <p className="font-semibold text-black font-poppins">
                {data?.name != "" ? data?.name : "---"}
              </p>
            </DropdownItem>

            <DropdownItem key="help_and_feedback">
              <p className="font-semibold text-black font-poppins">
                Help & Feedback
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
