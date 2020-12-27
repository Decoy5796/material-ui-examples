import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Button,
  Paper,
  Switch,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // const theme = createMuiTheme({
  //   palette: {
  //     type: darkMode ? 'dark' : 'light',
  //   },
  // });

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  const lightTheme = createMuiTheme({
    palette: {
      primary: lightBlue,
      secondary: lightBlue,
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper style={{ height: '100vh' }}>
        <Grid container direction='column'>
          <Typography variant='h1'>This is My App</Typography>
          <Button variant='contained' color='primary'>
            This is a button
          </Button>
          <Button variant='contained' color='secondary'>
            This is another button
          </Button>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
