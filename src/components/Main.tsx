"use client";
import * as React from "react";
import Body from "./Body";
import { ToastContainer } from "react-toastify";
import { LocationProps } from "./Breadcrumb";
import DashHeader from "./pages/dashboard/DashHeader";
import Sidebar, { SidebarItem } from "./SideBarNew";
import { Home, Search, CircleUserIcon, BadgeInfo, Wrench } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Bottombar from "./pages/dashboard/Bottombar";

interface Props {
  children: React.ReactNode;
  locations?: LocationProps[];
}

export default function Main({ children }: Props) {
  const [expandedMain, setExpandedMain] = React.useState(true);

  return (
    <>
      <ToastContainer />

      <div
        className={`fixed top-0 left-0 right-0 transition-all ${
          expandedMain ? "sm:ml-64" : "sm:ml-18"
        }`}
      >
        <DashHeader />
      </div>
      <Body sideView={<SidebarNew setExpandedMain={setExpandedMain} />}>
        <div className="p-4 bg-white">
          <div
            className={`mt-14 transition-all ${
              expandedMain ? "sm:ml-60" : "sm:ml-24"
            }`}
          >
            {children}
          </div>
        </div>
      </Body>
      <Bottombar />
    </>
  );
}

function SidebarNew({
  setExpandedMain,
}: {
  setExpandedMain: (expanded: boolean) => void;
}) {
  const router = useRouter(); // eslint-disable-line
  const pathname = usePathname();

  return (
    <Sidebar setExpandedMain={setExpandedMain}>
      <SidebarItem
        icon={<Home />}
        text={"Home"}
        alert={pathname === "/"}
        active={pathname === "/"}
        href="/"
      />
      <SidebarItem
        icon={<Search />}
        text={"Explore"}
        alert={pathname === "/explore"}
        active={pathname === "/explore"}
        href="/explore"
      />
      <SidebarItem
        icon={<CircleUserIcon />}
        text={"Profile"}
        alert={pathname === "/profile"}
        active={pathname === "/profile"}
        href="/profile"
      />
      <SidebarItem
        icon={<BadgeInfo />}
        text={"About"}
        alert={pathname === "/about"}
        active={pathname === "/about"}
        href="/about"
      />
      <SidebarItem
        icon={<Wrench />}
        text={"Settings"}
        alert={pathname === "/settings"}
        active={pathname === "/settings"}
        href="/settings"
      />
    </Sidebar>
  );
}
