import React from 'react';
import classNames from 'classnames';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  buttonStyle: (props) => {
    return {
      color: props.cool ? 'blue' : 'red',
      [theme.breakpoints.up('sm')]: {
        color: 'cyan',
      },
    };
  },
  buttonBackground: {
    backgroundColor: 'coral',
  },
}));

const CoolButton = (props) => {
  const classes = useStyles(props);
  return (
    <Button
      fullWidth
      className={classNames(classes.buttonStyle, classes.buttonBackground)}
    >
      THE BUTTON
    </Button>
  );
};

export default CoolButton;
