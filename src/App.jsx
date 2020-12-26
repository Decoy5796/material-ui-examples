import { Button, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  helloThereStyle: {
    fontStyle: 'oblique',
    color: 'red',
    fontSize: '30px'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.helloThereStyle} variant='h1' color="primary">Hello There</Typography>
      <Button color='secondary' variant='outlined'>
        This is our first button
      </Button>
    </div>
  );
}

export default App;
