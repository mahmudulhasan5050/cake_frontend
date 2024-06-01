import React, { useState } from 'react';

import CakeForm from '../../components/forms/CakeForm';
import CakeTable from '../../components/tables/cakeTable/CakeTable';
import { Container } from '@mui/material';

const CakeDetails = () => {
  const [cakeId, setCakeId] = useState('');

  return (
    <Container style={{ padding: '150px 0px', width:'100%' }}>
      <CakeTable setCakeId={setCakeId} />
      <CakeForm cakeId={cakeId} setCakeId={setCakeId} />
      </Container>
  );
};

export default CakeDetails;
