import React, { useEffect, useState } from 'react';

import Button from 'Components/Shared/Button';
import PageTable from 'Components/Shared/PageTable';
import PageTopBar from 'Components/Layout/PageTopBar';
import { Link, Outlet } from 'react-router-dom';
import AddModal from 'Components/Shared/AddModal';

import { AddressSuggestions } from 'react-dadata';
import { DADAT_API_KEY } from 'Constants';
import 'react-dadata/dist/react-dadata.css';
import ModalInput from 'Components/Shared/ModalInput';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { createHouse, fetchHouses } from 'store/reducers/actionCreators';
import Loader from 'Components/Shared/Loader';
import { toYear } from 'helpers/toDate';

const Objects = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<any>();

  const dispatch = useAppDispatch();

  const { items, isLoading, error } = useAppSelector((state) => state.HouseReducer);

  const thead = [
    { key: 'num', name: '№ п/п' },
    { key: 'adr', name: 'Адрес' },
    { key: 'sq', name: 'Площадь' },
    { key: 'year', name: 'Год постройки' },
  ];

  const tbody = items.map((item) => ({
    id: item.id,
    num: item.id,
    adr: `${item.region}, ${item.city}, ${item.street}, д. ${item.houseNum}`,
    sq: item.square,
    year: item.year,
  }));

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const submit = () => {
    dispatch(
      createHouse({
        region: data.region_with_type,
        city: data.city_with_type,
        street: data.street_with_type,
        houseNum: data.house,
        square: data.square,
        year: data.year,
      }),
    );
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(fetchHouses());
  }, []);

  return (
    <div className="flex w-full flex-col">
      <PageTopBar>
        <Button onClick={toggleModal} name="Добавить объект" />
      </PageTopBar>
      <div className="mt-8 relative h-screen">
        {error}
        {isLoading ? (
          <Loader />
        ) : (
          <PageTable thead={thead}>
            {tbody.map((body) => (
              <tr key={body.id} className="bg-white border-b-2 border-bg hover:bg-bg ">
                <td className="px-6 py-4">{body.num}</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                  {body.adr}
                </th>
                <td className="px-6 py-4">{`${body.sq} кв.м`}</td>
                <td className="px-6 py-4">{`${toYear(body.year)} г.`}</td>
                <td className="px-6 py-4 ">
                  <Link to={`${body.id}`}>
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
        )}

        <Outlet />

        {showModal && (
          <AddModal
            header_name="Добавление объекта управления"
            button_name="Добавить"
            closeModal={toggleModal}
            onClick={submit}>
            <table>
              <tbody>
                <tr className="flex justify-between py-2">
                  <td>Регион/ район</td>
                  <td className="w-80 ml-16">
                    <AddressSuggestions
                      token={DADAT_API_KEY}
                      onChange={(s) => setData(s?.data)}
                      count={5}
                      delay={200}
                      filterFromBound="region"
                      filterToBound="area"
                      value={{
                        value: data ? data.region : '',
                        unrestricted_value: data?.region,
                        data: data,
                      }}
                      inputProps={{
                        placeholder: 'Начните вводить',
                        className:
                          'outline-none py-1 px-4 border-b border-gray focus:border-accent transition-all w-full',
                      }}
                      renderOption={(s, v) => <div>{`${s.value}`}</div>}
                    />
                  </td>
                </tr>
                <tr className="flex justify-between py-2">
                  <td>Город/ н.п.</td>
                  <td className="w-80 ml-16">
                    <AddressSuggestions
                      token={DADAT_API_KEY}
                      onChange={(s) => setData(s?.data)}
                      count={5}
                      delay={200}
                      value={{
                        value: data?.city || data?.settlement || '',
                        unrestricted_value: data?.city,
                        data: data,
                      }}
                      filterFromBound="city"
                      filterToBound="settlement"
                      filterLocations={[{ region_fias_id: data?.region_fias_id }]}
                      inputProps={{
                        placeholder: 'Начните вводить',
                        className:
                          'outline-none py-1 px-4 border-b border-gray focus:border-accent transition-all w-full',
                      }}
                      renderOption={(s, v) => <div>{`${s.value}`}</div>}
                    />
                  </td>
                </tr>
                <tr className="flex justify-between py-2">
                  <td>Улица</td>
                  <td className="w-80 ml-16">
                    <AddressSuggestions
                      token={DADAT_API_KEY}
                      onChange={(s) => setData(s?.data)}
                      count={5}
                      delay={200}
                      autoload
                      value={{
                        value: data?.street || '',
                        unrestricted_value: data?.street,
                        data: data,
                      }}
                      filterFromBound="street"
                      filterToBound="street"
                      filterLocations={[{ city_fias_id: data?.city_fias_id }]}
                      inputProps={{
                        placeholder: 'Начните вводить',
                        className:
                          'outline-none py-1 px-4 border-b border-gray focus:border-accent transition-all w-full',
                      }}
                      renderOption={(s, v) => <div>{`${s.value}`}</div>}
                    />
                  </td>
                </tr>
                <tr className="flex justify-between py-2">
                  <td>Дом</td>
                  <td className="w-80 ml-16">
                    <AddressSuggestions
                      token={DADAT_API_KEY}
                      onChange={(s) => setData({ ...s?.data, fullAddress: s?.unrestricted_value })}
                      count={5}
                      delay={200}
                      value={{
                        value: data?.house || '',
                        unrestricted_value: data?.house,
                        data: data,
                      }}
                      filterFromBound="houses"
                      filterToBound="houses"
                      filterLocations={[
                        {
                          region_fias_id: data?.region_fias_id,
                          city_fias_id: data?.city_fias_id,
                          street_fias_id: data?.street_fias_id,
                        },
                      ]}
                      filterLocationsBoost={[{ kladr_id: data?.kladr_id }]}
                      inputProps={{
                        placeholder: 'Начните вводить',
                        className:
                          'outline-none py-1 px-4 border-b border-gray focus:border-accent transition-all w-full',
                      }}
                      renderOption={(s, v) =>
                        !s?.data.flat ? <div>{s.value}</div> : <div className="empty"></div>
                      }
                    />
                  </td>
                </tr>
                <tr className="flex justify-between py-2">
                  <td>Год постройки</td>
                  <td className="w-80 ml-16">
                    <ModalInput
                      onChange={(e) => setData({ ...data, year: e.target.value })}
                      placeholder="Введите год постройки"
                    />
                  </td>
                </tr>
                <tr className="flex justify-between py-2">
                  <td>Площадь</td>
                  <td className="w-80 ml-16">
                    <ModalInput
                      onChange={(e) => setData({ ...data, square: e.target.value })}
                      placeholder="Введите площадь"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </AddModal>
        )}
      </div>
    </div>
  );
};

export default Objects;
