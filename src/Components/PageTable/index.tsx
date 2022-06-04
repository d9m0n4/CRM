import React, { Key, ReactElement } from 'react';

type TCol = {
  key: Key;
  name: string;
};

interface ITable {
  thead?: TCol[];
  children?: ReactElement | ReactElement[];
}

const PageTable: React.FC<ITable> = ({ thead, children }) => {
  return (
    <div className="relative overflow-x-auto overflow-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className=" text-gray uppercase">
          <tr>
            {thead?.map((head) => (
              <th key={head.key} scope="col" className="px-6 py-3">
                {head.name}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default PageTable;
