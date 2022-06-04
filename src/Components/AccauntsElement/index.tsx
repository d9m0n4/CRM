import Table from 'Components/EditableTable';
import EditModal from 'Components/EditModal';
import React, { useState } from 'react';

const AccauntsElement = () => {
  const [isEditable, setIsEditable] = useState(false);

  const a = [
    { name: 'Регион' },
    { name: 'Адрес' },
    { name: 'Собственник' },
    { name: 'Площадь' },
    { name: 'Email' },
    { name: 'Телефон' },
    { name: 'Текущая задолженность' },
    { name: 'Последняя оплата' },
  ];
  const b = [
    { value: 15863 },
    { value: 'Яранск г, Фурманова ул, дом № 12' },
    { value: 'Иванов Иван Иванович' },
    { value: 45.8 },
    { value: 'admin@mail.ru' },
    { value: '7(999)7773443' },
    { value: 3678.33 },
    { value: 500 },
  ];

  return (
    <EditModal
      isEditable={isEditable}
      setIsEditable={setIsEditable}
      buttonName={'Сохранить'}
      modalTitle={'Лицевой счет'}>
      <div className="flex flex-col mb-4">
        <div className="relative p-2 flex-auto flex flex-wrap">
          {a.map((e, i) => (
            <div className="mb-4 w-1/3 px-2">
              <label className="block text-gray text-sm font-bold mb-2">{e.name}</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={b[i].value}
                disabled={!isEditable}
              />
            </div>
          ))}
        </div>
      </div>
    </EditModal>
  );
};

export default AccauntsElement;
