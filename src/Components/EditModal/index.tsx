import Button from 'Components/Button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../EditableTable';

const EditModal = () => {
  const [isEditable, setIsEditable] = useState(false);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative max-w-4xl my-6 mx-auto translate-x-32">
          {/*content*/}
          <div className="p-4 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-between px-4 mb-4 rounded-t">
              <div className="flex">
                <h3 className="text-2xl font-semibold">Объект управления</h3>
                {!isEditable && (
                  <button
                    onClick={() => setIsEditable(true)}
                    className="group ml-4 border-0 leading-none outline-none ">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_415_95)">
                        <path
                          d="M19.3822 13.4569C19.0933 13.4569 18.8592 13.6822 18.8592 13.9603V18.4296C18.8581 19.2633 18.1564 19.9389 17.2901 19.9397H2.61504C1.74881 19.9389 1.04704 19.2633 1.04602 18.4296V5.31246C1.04704 4.47897 1.74881 3.80336 2.61504 3.80238H7.25879C7.54767 3.80238 7.7818 3.57705 7.7818 3.29902C7.7818 3.02118 7.54767 2.79565 7.25879 2.79565H2.61504C1.17146 2.79723 0.0016344 3.92311 0 5.31246V18.4298C0.0016344 19.8191 1.17146 20.945 2.61504 20.9466H17.2901C18.7337 20.945 19.9035 19.8191 19.9052 18.4298V13.9603C19.9052 13.6822 19.6711 13.4569 19.3822 13.4569Z"
                          fill="#000"
                          className="group-hover:fill-accent transition-colors"
                        />
                        <path
                          d="M19.698 1.50172C18.7788 0.617102 17.2887 0.617102 16.3695 1.50172L7.03872 10.482C6.97478 10.5436 6.92861 10.6198 6.9045 10.7036L5.67747 14.967C5.62701 15.1418 5.67829 15.329 5.81149 15.4574C5.9449 15.5856 6.13939 15.635 6.32102 15.5866L10.7509 14.4055C10.8379 14.3823 10.9172 14.3378 10.9811 14.2763L20.3117 5.29581C21.2294 4.4106 21.2294 2.97759 20.3117 2.09238L19.698 1.50172ZM8.17831 10.8092L15.8149 3.45933L18.2777 5.82965L10.6409 13.1795L8.17831 10.8092ZM7.68636 11.7593L9.65397 13.6532L6.93228 14.3789L7.68636 11.7593ZM19.5721 4.58403L19.0175 5.11787L16.5544 2.74735L17.1093 2.21351C17.6198 1.72214 18.4477 1.72214 18.9582 2.21351L19.5721 2.80417C20.0819 3.29613 20.0819 4.09227 19.5721 4.58403Z"
                          fill="#000"
                          className="group-hover:fill-accent transition-colors"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_415_95">
                          <rect
                            width="21"
                            height="20.2111"
                            fill="white"
                            transform="translate(0 0.760376)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                )}
              </div>
              <Link to="/objects">
                <button className="group p-1 ml-auto  border-0 text-accentDark leading-none font-semibold outline-none focus:outline-none hover:text-accent">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 0C3.58171 0 0 3.58171 0 8C0 12.4183 3.58171 16 8 16C12.4183 16 16 12.4183 16 8C15.9949 3.58384 12.4162 0.00512903 8 0ZM8 15.4839C3.86677 15.4839 0.516129 12.1332 0.516129 8C0.516129 3.86677 3.86677 0.516129 8 0.516129C12.1332 0.516129 15.4839 3.86677 15.4839 8C15.4793 12.1314 12.1314 15.4793 8 15.4839Z"
                      fill="#000"
                      className="group-hover:fill-accent transition-colors"
                    />
                    <path
                      d="M11.6495 4.35051C11.5487 4.24977 11.3854 4.24977 11.2846 4.35051L7.99994 7.63516L4.71529 4.35051C4.61629 4.248 4.45291 4.24516 4.35039 4.34416C4.24788 4.44316 4.24504 4.60655 4.34404 4.70906C4.3461 4.71122 4.34823 4.71332 4.35039 4.71542L7.63504 8.00006L4.35039 11.2847C4.24788 11.3837 4.24504 11.5471 4.34407 11.6496C4.4431 11.7521 4.60646 11.755 4.70897 11.6559C4.71113 11.6539 4.71323 11.6517 4.71529 11.6496L7.99994 8.36497L11.2846 11.6496C11.3871 11.7486 11.5505 11.7458 11.6495 11.6433C11.7461 11.5433 11.7461 11.3847 11.6495 11.2847L8.36484 8.00006L11.6495 4.71542C11.7502 4.61464 11.7502 4.45129 11.6495 4.35051Z"
                      fill="#000"
                      className="group-hover:fill-accent transition-colors"
                    />
                  </svg>
                </button>
              </Link>
            </div>
            {/*body*/}
            <div className="flex flex-col mb-4">
              <div className="relative p-2 flex-auto flex flex-wrap justify-center">
                <div className="mb-4 mx-4">
                  <label className="block text-gray text-sm font-bold mb-2">Регион</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Кировская обл."
                  />
                </div>
                <div className="mb-4 mx-4">
                  <label className="block text-gray text-sm font-bold mb-2">Район</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Яранский"
                  />
                </div>
                <div className="mb-4 mx-4">
                  <label className="block text-gray text-sm font-bold mb-2">Город</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Яранск"
                  />
                </div>
                <div className="mb-4 mx-4">
                  <label className="block text-gray text-sm font-bold mb-2">Улица</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Строительная"
                  />
                </div>
                <div className="mb-4 mx-4">
                  <label className="block text-gray text-sm font-bold mb-2">№ дома</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="9"
                  />
                </div>
                <div className="mb-4 mx-4">
                  <label className="block text-gray text-sm font-bold mb-2">Индекс</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="612260"
                  />
                </div>
                <div className="mb-4 mx-4">
                  <label className="block text-gray text-sm font-bold mb-2">Год постройки</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="1985"
                  />
                </div>

                <div className="mb-4 mx-4">
                  <label className="block text-gray text-sm font-bold mb-2">Площадь</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="4350,73"
                  />
                </div>
              </div>
              <div className="flex shadow-sm rounded-md">
                <Table isEditable={isEditable} />
              </div>
            </div>
            {/*footer*/}
            {isEditable && (
              <div className="flex items-center justify-end p-2">
                <button
                  onClick={() => setIsEditable(false)}
                  className="text-accentDark background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button">
                  Отмена
                </button>
                <Button name="Добавить" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="opacity-75 fixed inset-0 z-40 bg-accentDark"></div>
    </>
  );
};

export default EditModal;
