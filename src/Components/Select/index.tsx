import React from 'react';

type OptionValue = string | number;

type Props<Value extends OptionValue> = {
  value: Value;
  onChange: (newValue: Value) => void;
  options: readonly Value[];
};

function Select<Value extends OptionValue>({
  value,
  onChange,
  options,
}: Props<Value>): JSX.Element {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(options[e.currentTarget.selectedIndex]);
  };
  return (
    <div className="relative mx-auto mt-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray right-2.5"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <select
        value={value}
        onChange={handleChange}
        className="w-full p-2 text-gray bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-accent">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
