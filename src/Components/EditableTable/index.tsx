import React, { useEffect, useState } from 'react';

interface IDataElement {
  id: number;
  value: string;
}

interface IData {
  id: number;
  object: Array<IDataElement>;
}

interface ITableProps {
  isEditable: boolean;
}

const Table: React.FC<ITableProps> = ({ isEditable }) => {
  const da = [
    {
      id: 1,
      object: [
        {
          id: 23,

          value: '1',
        },
        {
          id: 33,

          value: 'Иванов Иван Иванович',
        },
        {
          id: 43,

          value: '32,2',
        },
        {
          id: 53,

          value: '32455',
        },
      ],
    },
    {
      id: 2,
      object: [
        {
          id: 2,

          value: '3',
        },
        {
          id: 3,

          value: 'Иванов C C',
        },
        {
          id: 4,

          value: '33,2',
        },
        {
          id: 5,

          value: '87997',
        },
      ],
    },
  ];

  const [data, setData] = useState<IData[]>(da);
  const [editingItem, setEditingItem] = useState<IDataElement>();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, item: IDataElement) => {
    const { value } = e.target;
    setEditingItem({ ...item, value });
  };
  const handleOnFocus = (item: IDataElement) => {
    setEditingItem(item);
  };
  const handleOnBlur = () => {
    const newData = data.map((item) => {
      item.object = item.object.map((obj) => (obj.id === editingItem?.id ? editingItem : obj));
      return { ...item };
    });
    setData(newData);
  };

  return (
    <div className="flex w-full ">
      <div className="relative overflow-x-auto overflow-auto shadow-md sm:rounded-lg w-full m-2">
        <table className="w-full text-sm text-left text-gray-500 shadow-md ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                № Помещения
              </th>
              <th scope="col" className="px-6 py-3">
                Собственник
              </th>
              <th scope="col" className="px-6 py-3">
                Площадь
              </th>
              <th scope="col" className="px-6 py-3">
                Лицевой счет
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr className="bg-white border-b-2 border-bg hover:bg-bg " key={item.id}>
                  {item.object.map((obj) => (
                    <td className="px-1 py-1" key={obj.id}>
                      <input
                        disabled={!isEditable}
                        className="w-full px-2 py-1 outline-none"
                        type="text"
                        placeholder={obj.value}
                        value={obj.id === editingItem?.id ? editingItem.value : obj.value}
                        onChange={(e) => handleOnChange(e, obj)}
                        onFocus={(e) => handleOnFocus(obj)}
                        onBlur={handleOnBlur}
                      />
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
