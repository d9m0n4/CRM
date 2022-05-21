import React from 'react';

interface IInput {
  placeholder: string;
}

const ModalInput: React.FC<IInput> = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full outline-none py-1 px-4 border-b border-gray focus:border-accent transition-all"
    />
  );
};

export default ModalInput;
