import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Navbar from './Compoenents/Navbar';
import Home from './Compoenents/Home';
import Contactus from './Compoenents/Contactus';
import Reviews from './Compoenents/Reviews';


function App() {
  return (
    <ChakraProvider theme={theme}>

        <Navbar />
        <Home />
        <Reviews/>
        <Contactus />
  

    </ChakraProvider>
  );
}

export default App;
