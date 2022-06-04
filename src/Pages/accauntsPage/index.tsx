import React, { useState } from 'react';

import Button from 'Components/Button';
import PageTable from 'Components/PageTable';
import PageTopBar from 'Components/PageTopBar';
import AddModal from 'Components/AddModal';
import { Link, Outlet } from 'react-router-dom';
import ModalInput from 'Components/ModalInput';
import Select from 'Components/Select';

const Accaunts = () => {
  const options = ['кв 1', 'кв 2'];
  const houses = ['г. Яранск, ул. Пролетарская, д. 3', 'г. Яранск, ул. Производственная, д. 11'];

  const [showModal, setShowModal] = useState(false);
  const [opt, setOpt] = useState<typeof options[number]>(options[0]);

  const thead = [
    { key: 'num', name: '№ п/п' },
    { key: 'name', name: 'Наименование' },
    { key: 'house', name: 'Здание' },
    { key: 'flat', name: 'Помещение' },
    { key: 'owner', name: 'Собственник' },
  ];
  const tbody = [
    {
      id: '123123243425253',
      num: 1,
      name: '12323',
      house: '612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9',
      flat: 'кв. 1',
      owner: 'Иванов Иван Иванович',
    },
    {
      id: '123123243425253',
      num: 2,
      name: '12323',
      house: '612260, обл Кировская, р-н Яранский, г Яранск, ул Производственная, д. 13',
      flat: 'кв. 1',
      owner: 'Иванов Иван Иванович',
    },
  ];

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex w-full flex-col">
      <PageTopBar>
        <Button name="Добавить лицевой счет" onClick={toggleModal} />
      </PageTopBar>
      <div className="mt-8">
        <PageTable thead={thead}>
          {tbody.map((body) => (
            <tr key={body.id} className="bg-white border-b-2 border-bg hover:bg-bg ">
              <td className="px-6 py-4">{body.num}</td>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                {body.name}
              </th>
              <td className="px-6 py-4">{body.house}</td>
              <td className="px-6 py-4">{body.flat}</td>
              <td className="px-6 py-4">{body.owner}</td>
              <td className="px-6 py-4 ">
                <Link to={body.id}>
                  <svg
                    className="cursor-pointer"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_395_273)">
                      <path
                        d="M16.6133 11.3075C16.3657 11.3075 16.165 11.5082 16.165 11.7558V15.7361C16.1641 16.4786 15.5626 17.0803 14.8201 17.081H2.24147C1.49898 17.0803 0.897462 16.4786 0.896586 15.7361V4.05406C0.897462 3.31175 1.49898 2.71005 2.24147 2.70918H6.22182C6.46943 2.70918 6.67011 2.5085 6.67011 2.26088C6.67011 2.01345 6.46943 1.81259 6.22182 1.81259H2.24147C1.00411 1.81399 0.00140092 2.8167 0 4.05406V15.7363C0.00140092 16.9737 1.00411 17.9764 2.24147 17.9778H14.8201C16.0575 17.9764 17.0602 16.9737 17.0616 15.7363V11.7558C17.0616 11.5082 16.8609 11.3075 16.6133 11.3075Z"
                        fill="#8613CD"
                      />
                      <path
                        d="M16.884 0.659118C16.0962 -0.128723 14.8189 -0.128723 14.0311 0.659118L6.03324 8.65695C5.97843 8.71176 5.93886 8.7797 5.91819 8.8543L4.86646 12.6513C4.8232 12.807 4.86716 12.9737 4.98133 13.088C5.09568 13.2022 5.26239 13.2462 5.41807 13.2031L9.21508 12.1512C9.28967 12.1305 9.35762 12.0909 9.41243 12.0361L17.4101 4.03813C18.1967 3.24976 18.1967 1.97353 17.4101 1.18516L16.884 0.659118ZM7.01003 8.94834L13.5556 2.40256L15.6666 4.51356L9.12086 11.0593L7.01003 8.94834ZM6.58836 9.79449L8.27489 11.4812L5.94201 12.1275L6.58836 9.79449ZM16.7762 3.40421L16.3007 3.87965L14.1896 1.76847L14.6652 1.29303C15.1028 0.855421 15.8123 0.855421 16.25 1.29303L16.7762 1.81908C17.2131 2.25721 17.2131 2.96625 16.7762 3.40421Z"
                        fill="#8613CD"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_395_273">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </td>
            </tr>
          ))}
        </PageTable>
        <Outlet />
        {showModal && (
          <AddModal
            closeModal={toggleModal}
            header_name="Добавление лицевого счета"
            button_name="Добавить">
            <div className="w-full">
              <div className="flex mb-4">
                <div className="mx-2 w-80">
                  <span className="mb-1 block">Управляемый объект</span>
                  <Select value={opt} onChange={setOpt} options={houses} />
                </div>
                <div className="mx-2 w-80">
                  <span className="mb-1 block">Квартира</span>
                  <Select value={opt} onChange={setOpt} options={options} />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="mx-2 w-80">
                  <span className="mb-1 block">ФИО собственника</span>
                  <ModalInput placeholder="ФИО" />
                </div>
                <div className="mx-2 w-80">
                  <span className="mb-1 block">Наименование ЛС</span>
                  <ModalInput placeholder="Телефон" />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="mx-2 w-80">
                  <span className="mb-1 block">Email</span>
                  <ModalInput placeholder="email" />
                </div>
                <div className="mx-2 w-80">
                  <span className="mb-1 block">Номер телефона</span>
                  <ModalInput placeholder="Срок" />
                </div>
              </div>
            </div>
          </AddModal>
        )}
      </div>
    </div>
  );
};

export default Accaunts;
