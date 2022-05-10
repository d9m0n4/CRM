import React from 'react';

import PageTable from 'Components/PageTable';
import PageTopBar from 'Components/PageTopBar';

const Appeals = () => {
  return (
    <div className="flex w-full flex-col">
      <PageTopBar />

      <div className="mt-8">
        <PageTable />
      </div>
    </div>
  );
};

export default Appeals;
