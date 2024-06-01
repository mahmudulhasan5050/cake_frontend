import { Container } from '@mui/material';
import OrderTable from '../../components/tables/orderTable/OrderTable';

const OrderDetails = () => {
  return (
    <Container style={{ padding: '150px 0px', width:'100%' }}>
      <OrderTable />
    </Container>
  );
};

export default OrderDetails;
