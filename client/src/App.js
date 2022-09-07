import React from 'react';
import { Box } from '@mui/material';

import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';

const App = () => {
  return(
    <DataProvider>
      <Header />
      <Box style={{marginTop: 54}}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
