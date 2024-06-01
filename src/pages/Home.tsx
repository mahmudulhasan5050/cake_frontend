import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import {
  Grid,
  Container,
  CssBaseline,
  Typography,
} from '@mui/material';

import CardCake from '../components/cardCake/CardCake';
import { fetchCakes } from '../features/cake/cakeAsync';
import LoadingPage from '../components/loadingPage/LoadingPage';


const Home = () => {
  const dispatch = useAppDispatch();
  const allCakes = useAppSelector((state) => state.cake);

  useEffect(() => {
    dispatch(fetchCakes());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <Container style={{ padding: '150px 20px' }}>
        <Typography variant='h4' gutterBottom>
          Our Products
        </Typography>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {allCakes.isLoading && (
          <Grid item>
             <LoadingPage />
          </Grid>
         )}

          {!allCakes.isLoading && allCakes.error ? (
            <Grid item> Error: {allCakes.error}</Grid>
          ) : null}
          {!allCakes.isLoading && allCakes.cakes.length ? (
            <>
              {allCakes.cakes.map((item) => (
                <CardCake key={item.name} cake={item} />
              ))}
            </>
          ) : null}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
