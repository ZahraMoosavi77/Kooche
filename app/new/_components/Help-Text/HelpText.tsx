import React from "react";
import { HelpTextProps } from "./HelperText.type";

const HelpText: React.FC<HelpTextProps> = ({ text, className }) => {
  return (
    <div
      className={`text-scales-caption font-peyda-regular leading-leading-3 text-gray-700 ${className}`}
    >
      {text}
    </div>
  );
};
export default HelpText;
