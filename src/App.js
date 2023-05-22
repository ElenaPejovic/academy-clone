import React from 'react';
import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react';
import theme from './theme';

import Login from './Login';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box p="m">
        <Login />
      </Box>
    </ChakraProvider>
  );
}

export default App;
