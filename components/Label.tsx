import Image from "next/image";
import React from "react";

interface LabelProps {
  children: React.ReactNode;
  text: string;
}

const Label = ({ children, text }: LabelProps) => {
  return (
    <label className="flex items-center gap-2">
      {children}
      <p className="font-medium text-xs text-light-100">{text}</p>
    </label>
  );
};

export default Label;
