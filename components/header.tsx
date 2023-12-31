"use client";

import { useThemeContext } from "@/lib/hooks";
import ToggleSwitch from "./toggle-switch";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <header className='relative bg-violet w-full h-[160px] rounded-bl-[100px] p-10 flex items-center'>
      <div className='flex w-full justify-between'>
        <Link
          className='text-3xl font-medium text-[#fff] hover:text-opacity-70'
          href='/'
        >
          devjobs
        </Link>
        <ToggleSwitch
          onToggleChange={toggleTheme}
          setDefaultToggle={theme === "light" ? false : true}
        />
      </div>
    </header>
  );
}
