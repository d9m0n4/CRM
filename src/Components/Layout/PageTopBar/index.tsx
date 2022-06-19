import React, { ReactElement } from 'react';

interface AuxProps {
  children?: ReactElement | ReactElement[];
}

const PageTopBar: React.FC<AuxProps> = ({ children }) => {
  return (
    <div className="flex justify-between items-center w-full mb-2">
      {children}

      <input
        type="email"
        id="helper-text"
        aria-describedby="helper-text-explanation"
        className=" bg-white text-gray rounded-lg focus:border-none outline-none drop-shadow-md w-60 py-2 px-4 ml-auto"
        placeholder="Поиск"
      />
    </div>
  );
};

export default PageTopBar;
