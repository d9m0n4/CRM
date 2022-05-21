import React, { useState } from 'react';

import Button from 'Components/Button';
import PageTable from 'Components/PageTable';
import PageTopBar from 'Components/PageTopBar';
import { Outlet } from 'react-router-dom';
import AddModal from 'Components/AddModal';
import Select from 'Components/Select';
import ModalInput from 'Components/ModalInput';

const Requests = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const options = ['кв 1', 'кв 2'];
  const houses = ['г. Яранск, ул. Пролетарская, д. 3', 'г. Яранск, ул. Производственная, д. 11'];

  return (
    <div className="flex w-full flex-col">
      <PageTopBar>
        <Button name="Добавить заявку" onClick={toggleModal} />
      </PageTopBar>
      <div className="mt-8">
        <PageTable />
        <Outlet />
        {showModal && (
          <AddModal closeModal={toggleModal} header_name="Создание заявки" button_name="Добавить">
            <div className="w-full">
              <div className="flex mb-4">
                <div className="mx-2 w-80">
                  <span>Вид документа</span>
                  <Select options={options} />
                </div>
                <div className="mx-2 w-80">
                  <span>Управляемый объект</span>
                  <Select options={houses} />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="mx-2 w-80">
                  <span>ФИО</span>
                  <ModalInput placeholder="ФИО" />
                </div>
                <div className="mx-2 w-80">
                  <span>Телефон</span>
                  <ModalInput placeholder="Телефон" />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="mx-2 w-80">
                  <span>Email</span>
                  <ModalInput placeholder="email" />
                </div>
                <div className="mx-2 w-80">
                  <span>Срок</span>
                  <ModalInput placeholder="Срок" />
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

export default Requests;
