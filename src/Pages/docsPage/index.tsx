import AddModal from 'Components/AddModal';
import PageTopBar from 'Components/PageTopBar';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Button from '../../Components/Button';

const Documents = () => {
  const [showModal, setShowModal] = useState(false);

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
            <div>3123123</div>
          </AddModal>
        )}
      </div>
    </div>
  );
};

export default Documents;
