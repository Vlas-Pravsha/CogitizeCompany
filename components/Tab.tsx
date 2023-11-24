import { cn } from "@/utils/cn";
import React from "react";

interface TabProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}

const Tab = ({ children, onClick, active, ...rest }: TabProps) => {
  const activeClasses =
    "text-primary border-b-0 border-light-100/[.08] shadow-4xl shadow-primary/[.16]";
  return (
    <div
      className={cn(
        "border-2 border-light-100/[.08] rounded-t-lg bg-dark-400 w-full  p-4 hover:cursor-pointer child ",
        active && activeClasses
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Tab;
