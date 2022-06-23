import { API } from 'api/axios';
import Table from 'Components/Shared/EditableTable';
import EditModal from 'Components/Shared/EditModal';
import { useAppSelector } from 'hooks/redux';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ObjectsElement = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [currentHouse, setCurrentHouse] = useState();

  const { id } = useParams();

  useEffect(() => {
    API.get(`house/${id}`).then(({ data }) => setCurrentHouse(data));
    console.log(currentHouse);
  }, []);

  const a = ['Регион', 'Район', 'Город', 'Улица', '№ дома', 'Индекс', 'Год постройки', ' Площадь'];
  const b = [
    'Кировская обл.',
    'Яранский',
    'Яранск',
    'Строительная',
    '9',
    '612260',
    '1991',
    '4578,23',
  ];

  return (
    <EditModal
      isEditable={isEditable}
      setIsEditable={setIsEditable}
      buttonName={'Сохранить'}
      modalTitle={'Объект управления'}>
      <div className="flex flex-col mb-4">
        <div className="relative p-2 flex-auto flex flex-wrap">
          {a.map((e, i) => (
            <div key={b[i]} className="mb-4 w-1/3 px-2">
              <label className="block text-gray text-sm font-bold mb-2">{e}</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={b[i]}
                key={b[i]}
                disabled={!isEditable}
              />
            </div>
          ))}
        </div>
        <div className="flex shadow-sm rounded-md">
          <Table isEditable={isEditable} />
        </div>
      </div>
    </EditModal>
  );
};

export default ObjectsElement;
