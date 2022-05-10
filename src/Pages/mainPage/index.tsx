import React from 'react';
import { Outlet } from 'react-router-dom';

import PageTopBar from 'Components/PageTopBar';
import PageTable from 'Components/PageTable';
import Button from 'Components/Button';

import './index.scss';

const MainPage = () => {
  return (
    <div className="flex w-full flex-col">
      <PageTopBar>
        <Button name="Добавить дом" />
        <Button name="Добавить помещение" />
      </PageTopBar>
      <div className="mt-8 ">
        <PageTable />
      </div>
      <Outlet />
    </div>
  );
};

export default MainPage;
