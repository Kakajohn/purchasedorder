import React from 'react';

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center align-items-center my-5'>
      <div className='spinner-border me-2' role='status'></div>
      Fetching Orders...
    </div>
  );
};

export default Spinner;
