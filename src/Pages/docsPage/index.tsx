import PageTopBar from 'Components/PageTopBar';
import { Link, Outlet } from 'react-router-dom';
import Button from '../../Components/Button';

const Documents = () => {
  return (
    <div className="flex w-full flex-col">
      <PageTopBar>
        <Button name="Добавить документ" />
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
      </div>
    </div>
  );
};

export default Documents;
