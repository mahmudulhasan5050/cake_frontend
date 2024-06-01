import React, { useState } from 'react';

import UserForm from '../../components/forms/UserForm';
import UserTable from '../../components/tables/usersTable/UsersTable';
import { Container } from '@mui/material';

const UserDetails = () => {
  const [userId, setUserId] = useState('');

  return (
    <Container style={{ padding: '150px 0px', width:'100%' }}>
      <UserTable setUserId={setUserId} />
      <UserForm userId={userId} setUserId={setUserId} />
    </Container>
  );
};

export default UserDetails;
