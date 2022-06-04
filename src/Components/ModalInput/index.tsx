import React from 'react';

interface IInput {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalInput: React.FC<IInput> = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="w-full outline-none py-1 px-4 border-b border-gray focus:border-accent transition-all"
    />
  );
};

export default ModalInput;
