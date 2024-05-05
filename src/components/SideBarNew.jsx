"use client";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import Link from "next/link";
import { nextLocalStorage } from "@/utils/nextLocalStorage";

const SidebarContext = createContext();

export default function Sidebar({ children, setExpandedMain }) {
  const [expanded, setExpanded] = useState(true);
  const name = nextLocalStorage()?.getItem("name") ?? "name";
  const email = nextLocalStorage()?.getItem("email") ?? "";
  return (
    <div>
      {/* Sidebar for large devices */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0  hidden sm:block left-0 z-40 w-64 pt-0 h-screen sm:translate-x-0 transition-all bg-orange-900 ${
          expanded ? "w-[18%]  hidden sm:block" : "w-[5%] hidden sm:block"
        }`}
      >
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img // eslint-disable-line
              src="https://img.logoipsum.com/243.svg"
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
              alt=""
            />
            <button
              onClick={() => {
                setExpandedMain((curr) => !curr);
                setExpanded((curr) => !curr);
              }}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? (
                <ChevronFirst color="#000" />
              ) : (
                <ChevronLast color="#000" />
              )}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3">
            <img // eslint-disable-line
              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
              alt=""
              className="w-10 h-10 rounded-md"
            />
            <div
              className={`
                flex justify-between items-center
                overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
              `}
            >
              <div className="leading-4 text-black">
                <p> {name != "" ? name : ""}</p>
                <span className="text-xs text-gray-600">
                  <p className="text-black font-poppins font-normal text-sm">
                    {email != "" ? email : ""}
                  </p>
                </span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
}

export function SidebarItem({ icon, text, active, alert, href }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <Link href={href}>
      <li
        className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
      `}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
}
