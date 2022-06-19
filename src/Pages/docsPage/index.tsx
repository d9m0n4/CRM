import AddModal from 'Components/Shared/AddModal';
import DatePicker from 'Components/Shared/datepicker';
import ModalInput from 'Components/Shared/ModalInput';
import PageTopBar from 'Components/Layout/PageTopBar';
import Select from 'Components/Shared/Select';
import Plus from 'Components/ui/icons/Plus';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Button from '../../Components/Shared/Button';

const Documents = () => {
  const options = ['Договор', 'Протокол'];
  const houses = ['г. Яранск, ул. Пролетарская, д. 3', 'г. Яранск, ул. Производственная, д. 11'];

  const [showModal, setShowModal] = useState(false);
  const [docType, setDocType] = useState<typeof options[number]>('Договор');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex w-full flex-col">
      <PageTopBar>
        <Button onClick={toggleModal} name="Добавить документ" />
      </PageTopBar>
      <div className="mt-8">
        <div className="mb-4">
          <Link to="contracts" className="text-lg mr-4">
            Договоры управления
          </Link>
          <Link to="protocols" className="text-lg ">
            Протоколы ОСС
          </Link>
        </div>
        <Outlet />
        {showModal && (
          <AddModal
            header_name="Добавление документа"
            button_name="Добавить"
            closeModal={toggleModal}>
            <div className="w-full">
              <div className="flex">
                <div className="mx-2 w-full">
                  <span>Вид документа</span>
                  <Select options={options} value={docType} onChange={setDocType} />
                </div>
                <div className="mx-2 w-full">
                  <span>Управляемый объект</span>
                  <Select options={houses} value={docType} onChange={setDocType} />
                </div>
              </div>
              {docType && (
                <div className="flex mt-4">
                  <div className="py-4 px-6  shadow-md rounded-lg m-2 w-1/2">
                    <table>
                      <tbody>
                        <tr>
                          <td role="cell" className="py-4 pr-3 w-1/2">
                            Дата заключения
                          </td>
                          <td>
                            <DatePicker />
                          </td>
                        </tr>
                        <tr>
                          <td role="cell" className="py-4 pr-3 w-1/2">
                            Срок действия
                          </td>
                          <td>
                            <ModalInput placeholder="1 год" />
                          </td>
                        </tr>
                        <tr>
                          <td role="cell" className="py-4 pr-3 w-1/2">
                            Стороны договора
                          </td>
                          <td>
                            <ModalInput placeholder="Наименование организации" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table>
                      <tbody>
                        <tr>
                          <td role="cell" className="py-4 pr-3 w-1/2">
                            Основание заключения
                          </td>
                          <td className="w-1/2">
                            <ModalInput placeholder="Документ" />
                          </td>
                        </tr>
                        <tr>
                          <td role="cell" className="py-4 pr-3 w-1/2">
                            Договор управления
                          </td>
                          <td className="w-1/2">
                            <ModalInput placeholder="Документ" />
                          </td>
                        </tr>
                        <tr>
                          <td role="cell" className="py-4 pr-3 w-1/2">
                            Протокол собрания собственников
                          </td>
                          <td className="w-1/2">
                            <ModalInput placeholder="Документ" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-3 shadow-md rounded-lg m-2 w-1/2">
                    <table>
                      <tbody>
                        <tr>
                          <td role="cell" className="py-2 pr-3 w-1/2">
                            Сроки передачи показаний приборов учета:
                          </td>
                          <td>
                            <ModalInput placeholder="1 год" />
                          </td>
                        </tr>
                        <tr>
                          <td role="cell" className="py-2 pr-3 w-1/2">
                            Срок представления платежных документов:
                          </td>
                          <td>
                            <ModalInput placeholder="1 год" />
                          </td>
                        </tr>
                        <tr>
                          <td role="cell" className="py-2 pr-3 w-1/2">
                            Срок внесения платы:
                          </td>
                          <td>
                            <ModalInput placeholder="1 год" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="flex mt-8">
                      <div className="w-1/2 text-center">
                        <div className="text-gray text-xl">Услуга</div>
                        <div className="p-4">
                          <ModalInput placeholder="Наименование услуги" />
                        </div>
                        <div className="p-4">
                          <button>
                            <Plus />
                          </button>
                        </div>
                      </div>
                      <div className="w-1/2 text-center">
                        <div className="text-gray text-xl">Тариф</div>
                        <div className="p-4">
                          <ModalInput placeholder="Величина тарифа" />
                        </div>
                        <div className="p-4">
                          <button>
                            <Plus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </AddModal>
        )}
      </div>
    </div>
  );
};

export default Documents;
