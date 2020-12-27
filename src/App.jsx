import { Button, makeStyles } from '@material-ui/core';
import CoolButton from './CoolButton';

const useStyles = makeStyles({
  buttonStyle: {
    color: 'red',
    border: 'none',
  },
  textStyle: {
    color: 'green',
  },
});

function App() {
  const classes = useStyles();
  console.log(classes);

  return (
    <div>
      <h1 className={classes.textStyle}>Hello</h1>
      <p className={classes.textStyle}>world</p>
      <CoolButton cool />
      <CoolButton />
    </div>
  );
}

export default App;
