import React from 'react';

import Chart from 'Components/Shared/Chart';

import './index.scss';

const MainPage = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex py-4 justify-center">
        <div className="basis-2/6 px-4 flex">
          <div className="px-4 py-8 shadow-md w-full rounded text-center">
            <p className="text-2xl mb-4">Лицевых счетов</p>
            <b className="text-3xl text-accent">1045</b>
          </div>
        </div>
        <div className="basis-2/6 px-4 flex">
          <div className="px-4 py-8 shadow-md w-full rounded text-center">
            <p className="text-2xl mb-4">Последнее проведенное голосование</p>
            <b className="text-3xl text-accent ">23.04.2022</b>
          </div>
        </div>
        <div className="basis-2/6 px-4 flex">
          <div className="px-4 py-8 shadow-md w-full rounded text-center">
            <p className="text-2xl mb-4">Договоров управления</p>
            <b className="text-3xl text-accent">29</b>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="basis-1/2 p-4">
          <div className="rounded shadow-md px-4 py-2 flex-initial">
            <Chart />
          </div>
        </div>
        <div className="basis-1/2 p-4">
          <div className="rounded shadow-md px-4 py-2 flex-initial">
            <Chart />
          </div>
        </div>
      </div>
      <div className="flex">
        <Chart />
      </div>
    </div>
  );
};

export default MainPage;
