import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {Login, SignUp} from './';

import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react';
import theme from './theme';

import Login from './Login';
import SignUp from './SignUp';
import Courses from './Courses';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box p="m">
       <BrowserRouter>
       <Routes>
        <Route index element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/courses' element={<Courses />} />
       </Routes>
       </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
