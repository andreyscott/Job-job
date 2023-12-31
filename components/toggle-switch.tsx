"use client";

import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

interface ToggleSwitchProps {
  onToggleChange: () => void;
  setDefaultToggle?: boolean;
}

export default function ToggleSwitch(props: ToggleSwitchProps) {
  const { onToggleChange, setDefaultToggle = false } = props;
  const [isChecked, setIsChecked] = useState<boolean>(setDefaultToggle);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onToggleChange();
  };

  useEffect(() => {
    setIsChecked(setDefaultToggle);
  }, [setDefaultToggle]);

  return (
    <>
      <label className='relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <span className='sm:text-xl text-2xl text-[#fff]'>
          <BsSun />
        </span>
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 bg-[#fff]`}
        >
          <span
            className={`dot h-6 w-6 rounded-full ${
              isChecked ? "bg-light-violet" : "bg-violet"
            } duration-200 ${isChecked ? "translate-x-[28px]" : ""}`}
          ></span>
        </span>
        <span className='sm:text-xl text-2xl text-[#fff]'>
          <BsMoon />
        </span>
      </label>
    </>
  );
}
