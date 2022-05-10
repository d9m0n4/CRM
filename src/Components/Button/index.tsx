import React, { FC } from 'react';

interface IButton {
  name: string;
}

const Button: FC<IButton> = ({ name }) => {
  return (
    <button
      type="button"
      className="text-white bg-accent focus:outline-none  font-medium rounded-lg px-4 py-2 drop-shadow-md text-center mr-2">
      {name}
    </button>
  );
};

export default Button;
