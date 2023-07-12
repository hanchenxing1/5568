"use client";

import { useEffect, useState } from "react";
import { useDarkMode, useIsMounted } from "usehooks-ts";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export const SwitchTheme2 = ({ className }: { className?: string }) => {
  // const { isDarkMode, toggle } = useDarkMode();
  // const [isDarkMode, setDarkMode] = useState<boolean | undefined>(undefined);
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);
  const isMounted = useIsMounted();
  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
      setDarkMode(localStorage.getItem("darkMode") === "true");
    } else {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.add("light");
      setDarkMode(localStorage.getItem("darkMode") === "true");
    }
  }, [darkMode]);

  // useEffect(() => {
  //   if (isDarkMode) {
  //     localStorage.setItem("darkMode", "true");
  //     window.document.documentElement.classList.add("dark");
  //   } else {
  //     setDarkMode(localStorage.getItem("darkMode") === "true");
  //   }
  // }, [isDarkMode]);

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", darkMode ? "scaffoldEthDark" : "scaffoldEth");
  }, [darkMode]);

  return (
    <div className={`flex space-x-2 text-sm ${className}`}>
      <input
        id="theme-toggle"
        type="checkbox"
        className="toggle toggle-primary bg-primary"
        onChange={toggle}
        checked={darkMode}
      />
      {isMounted() && (
        <label htmlFor="theme-toggle" className={`swap swap-rotate ${!darkMode ? "swap-active" : ""}`}>
          <SunIcon className="swap-on h-5 w-5" />
          <MoonIcon className="swap-off h-5 w-5" />
        </label>
      )}
    </div>
  );
};
