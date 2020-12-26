import React from 'react';
import { Grid } from '@material-ui/core';
import CoffeCard from './CoffeCard';
import coffeMakerList from './constants';

const Content = () => {
  const getCoffeMakerCard = (coffeMakerObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <CoffeCard {...coffeMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={4}>
      {coffeMakerList.map((coffeMakerObj) => getCoffeMakerCard(coffeMakerObj))}
    </Grid>
  );
};

export default Content;
