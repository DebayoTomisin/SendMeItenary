import React from "react";

const BackArrowIcon = ({ onClick }: any) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M7.08333 20.4572L32.0833 20.4572"
        stroke="#200E32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1663 30.4978L7.083 20.4578L17.1663 10.4162"
        stroke="#200E32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BackArrowIcon;
