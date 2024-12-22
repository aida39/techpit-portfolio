import React from "react";

type NameTextProps = {
  name: string;
};

export const NameText = ({name}:NameTextProps) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};
