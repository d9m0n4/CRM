import React, { useState } from 'react';

import Button from 'Components/Button';
import PageTable from 'Components/PageTable';
import PageTopBar from 'Components/PageTopBar';
import { Outlet } from 'react-router-dom';
import AddModal from 'Components/AddModal';

import { AddressSuggestions } from 'react-dadata';
import { DADAT_API_KEY } from 'Constants';
import 'react-dadata/dist/react-dadata.css';

const Objects = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<any>();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex w-full flex-col">
      <PageTopBar>
        <Button onClick={toggleModal} name="Добавить объект" />
        <Button name="Добавить помещение" />
      </PageTopBar>
      <div className="mt-8">
        <PageTable />
        <Outlet />
        {showModal && (
          <AddModal
            header_name="Добавление объекта управления"
            button_name="Добавить"
            closeModal={toggleModal}>
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
                      onChange={(s) => setData(s?.data)}
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
                      }}
                      renderOption={(s, v) =>
                        !s?.data.flat ? <div>{s.value}</div> : <div className="empty"></div>
                      }
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
