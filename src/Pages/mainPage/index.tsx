import React from 'react';

import Chart from 'Components/Chart';

import './index.scss';

const MainPage = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex p-4 justify-center">
        <div className="px-4 py-8 shadow-md rounded text-center w-80 mx-4">
          <p className="text-2xl mb-4">Лицевых счетов</p>
          <b className="text-3xl text-accent">1045</b>
        </div>
        <div className="px-4 py-8 shadow-md rounded text-center w-80 mx-4">
          <p className="text-2xl mb-4">Последнее проведенное голосование</p>
          <b className="text-3xl text-accent ">23.04.2022</b>
        </div>
        <div className="px-4 py-8 shadow-md rounded text-center w-80 mx-4">
          <p className="text-2xl mb-4">Договоров управления</p>
          <b className="text-3xl text-accent">29</b>
        </div>
      </div>
      <div className="rounded shadow-md p-4">
        <Chart line={false} />
      </div>
      <div className="flex">
        <Chart line={true} />
      </div>
    </div>
  );
};

export default MainPage;
