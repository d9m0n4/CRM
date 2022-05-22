import React, { useState } from 'react';

import Button from 'Components/Button';
import PageTable from 'Components/PageTable';
import PageTopBar from 'Components/PageTopBar';
import { Outlet } from 'react-router-dom';
import AddModal from 'Components/AddModal';
import Select from 'Components/Select';
import ModalInput from 'Components/ModalInput';

const Votes = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const options = ['Очная'];
  const houses = ['г. Яранск, ул. Пролетарская, д. 3', 'г. Яранск, ул. Производственная, д. 11'];

  return (
    <div className="flex w-full flex-col">
      <PageTopBar>
        <Button name="Добавить голосование" onClick={toggleModal} />
      </PageTopBar>
      <div className="mt-8">
        <PageTable />
        <Outlet />
        {showModal && (
          <AddModal
            closeModal={toggleModal}
            header_name="Создание голосования"
            button_name="Добавить">
            <div className="w-full">
              <div className="flex mb-4">
                <div className="mx-2 w-full">
                  <span>Адрес</span>
                  <Select options={houses} />
                </div>
                <div className="mx-2 w-full">
                  <span>Форма</span>
                  <Select options={options} />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="mx-2 flex w-1/2">
                  <div className="mr-2 flex flex-col justify-between">
                    <span>Начало</span>
                    <ModalInput placeholder="ФИО" />
                  </div>
                  <div className="ml-2 flex flex-col justify-between">
                    <span>Окончание</span>
                    <ModalInput placeholder="ФИО" />
                  </div>
                </div>
                <div className="mx-2 w-1/2">
                  <span>Вид голосования</span>
                  <Select options={options} />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="mx-2 w-full flex flex-col justify-between">
                  <span>Инициатор</span>
                  <ModalInput placeholder="Инициатор" />
                </div>
                <div className="mx-2 w-full">
                  <span>Тип голосования</span>
                  <Select options={options} />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="flex w-full">
                  <div className="mb-3 w-full">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label inline-block mb-2 text-gray-700">
                      Описание заявки
                    </label>
                    <textarea
                      className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-accentDark
                        bg-white bg-clip-padding
                        border border-solid border-gray
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray focus:bg-white focus:border-accent focus:outline-none"
                      id="exampleFormControlTextarea1"
                      rows={3}></textarea>
                  </div>
                </div>
              </div>
            </div>
          </AddModal>
        )}
      </div>
    </div>
  );
};

export default Votes;
