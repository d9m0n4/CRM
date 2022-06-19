import React, { FC } from 'react';

interface IButton {
  name: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<IButton> = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white bg-accent focus:outline-none  font-medium rounded-lg px-4 py-2 drop-shadow-md text-center mr-2">
      {name}
    </button>
  );
};

export default Button;
