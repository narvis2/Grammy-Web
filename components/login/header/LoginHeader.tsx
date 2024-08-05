import React from "react";

type LoginHeaderProps = {
  title: string;
  subTitle: string;
  onTitleClick: () => void;
};

const LoginHeader = ({ title, subTitle, onTitleClick }: LoginHeaderProps) => {
  return (
    <div>
      <h1
        className="text-2xl font-semibold hover:text-gray-500 cursor-pointer"
        onClick={() => {
          onTitleClick();
        }}
      >
        {title}
      </h1>
      <h3 className="text-xl font-semibold">{subTitle}</h3>
    </div>
  );
};

export default React.memo(LoginHeader);
