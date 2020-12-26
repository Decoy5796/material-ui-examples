import { Grid } from '@material-ui/core';

import Header from './Header';
import Content from './Content';

function App() {
  return (
    <Grid container direction='column' spacing={4}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={1} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
