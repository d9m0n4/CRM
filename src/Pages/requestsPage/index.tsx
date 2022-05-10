import React from 'react';

import Button from 'Components/Button';
import PageTable from 'Components/PageTable';
import PageTopBar from 'Components/PageTopBar';

const Requests = () => {
  return (
    <div className="flex w-full flex-col">
      <PageTopBar>
        <Button name="Добавить заявку" />
      </PageTopBar>
      <div className="mt-8">
        <PageTable />
      </div>
    </div>
  );
};

export default Requests;
