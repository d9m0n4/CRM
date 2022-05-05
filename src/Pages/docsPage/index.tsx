import { Link, Outlet } from 'react-router-dom';
import Button from '../../Components/Button';

const Documents = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-between items-center w-full">
        <div>
          <Button name="Добавить документ" />
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
      <div className="mt-8">
        <div className="">
          <div className="mb-4">
            <Link to="contracts" className="text-lg mr-4">
              Договоры управления
            </Link>
            <Link to="protocols" className="text-lg ">
              Протоколы ОСС
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Documents;
