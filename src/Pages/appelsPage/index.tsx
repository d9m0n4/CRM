import React from 'react';

import PageTable from 'Components/Shared/PageTable';
import PageTopBar from 'Components/Layout/PageTopBar';

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
