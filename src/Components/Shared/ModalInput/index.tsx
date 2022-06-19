import React from 'react';

interface IInput {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const ModalInput: React.FC<IInput> = ({ placeholder, value, onChange, disabled }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      disabled={disabled}
      className="w-full outline-none py-1 px-4 border-b border-gray focus:border-accent transition-all"
    />
  );
};

export default ModalInput;
