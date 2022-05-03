import React from 'react';
import Button from '../../Components/Button';

import './index.scss';

const MainPage = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-between items-center w-full">
        <div>
          <Button name="Добавить дом" />
          <Button name="Добавить помещение" />
        </div>
        <div>
          <input
            type="email"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className=" bg-white  text-gray-900 text-sm rounded-lg focus:border-none outline-none drop-shadow-md block w-60 py-2 px-4 "
            placeholder="Поиск"
          />
        </div>
      </div>
      <div className="mt-8 ">
        <div className="relative overflow-x-auto overflow-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  № п/п
                </th>
                <th scope="col" className="px-6 py-3">
                  Адрес
                </th>
                <th scope="col" className="px-6 py-3">
                  Площадь
                </th>
                <th scope="col" className="px-6 py-3">
                  Год постройки
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b-2 border-bg hover:bg-bg ">
                <td className="px-6 py-4">1</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                  612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
                </th>
                <td className="px-6 py-4">4589,56</td>
                <td className="px-6 py-4">1985</td>
              </tr>
              <tr className="bg-white border-b-2 border-bg hover:bg-bg ">
                <td className="px-6 py-4">1</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                  612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
                </th>
                <td className="px-6 py-4">4589,56</td>
                <td className="px-6 py-4">1985</td>
              </tr>
              <tr className="bg-white border-b-2 border-bg hover:bg-bg ">
                <td className="px-6 py-4">1</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                  612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
                </th>
                <td className="px-6 py-4">4589,56</td>
                <td className="px-6 py-4">1985</td>
              </tr>
              <tr className="bg-white border-b-2 border-bg hover:bg-bg ">
                <td className="px-6 py-4">1</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                  612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
                </th>
                <td className="px-6 py-4">4589,56</td>
                <td className="px-6 py-4">1985</td>
              </tr>
              <tr className="bg-white border-b-2 border-bg hover:bg-bg ">
                <td className="px-6 py-4">1</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                  612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
                </th>
                <td className="px-6 py-4">4589,56</td>
                <td className="px-6 py-4">1985</td>
              </tr>
              <tr className="bg-white border-b-2 border-bg hover:bg-bg ">
                <td className="px-6 py-4">1</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                  612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
                </th>
                <td className="px-6 py-4">4589,56</td>
                <td className="px-6 py-4">1985</td>
              </tr>
              <tr className="bg-white border-b-2 border-bg hover:bg-bg ">
                <td className="px-6 py-4">1</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                  612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
                </th>
                <td className="px-6 py-4">4589,56</td>
                <td className="px-6 py-4">1985</td>
              </tr>
              <tr className="bg-white border-b-2 border-bg hover:bg-bg ">
                <td className="px-6 py-4">1</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                  612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
                </th>
                <td className="px-6 py-4">4589,56</td>
                <td className="px-6 py-4">1985</td>
              </tr>
              <tr className="bg-white border-b-2 border-bg hover:bg-bg ">
                <td className="px-6 py-4">1</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                  612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
                </th>
                <td className="px-6 py-4">4589,56</td>
                <td className="px-6 py-4">1985</td>
              </tr>
              <tr className="bg-white border-b-2 border-bg hover:bg-bg ">
                <td className="px-6 py-4">1</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                  612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
                </th>
                <td className="px-6 py-4">4589,56</td>
                <td className="px-6 py-4">1985</td>
              </tr>
              <tr className="bg-white border-b-2 border-bg hover:bg-bg ">
                <td className="px-6 py-4">1</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                  612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
                </th>
                <td className="px-6 py-4">4589,56</td>
                <td className="px-6 py-4">1985</td>
              </tr>
              <tr className="bg-white border-b-2 border-bg hover:bg-bg ">
                <td className="px-6 py-4">1</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                  612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
                </th>
                <td className="px-6 py-4">4589,56</td>
                <td className="px-6 py-4">1985</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
