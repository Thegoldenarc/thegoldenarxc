import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Home() {
  const [text] = useTypewriter({
    words: ['make a brand of your business?', 'get leads online?', 'make money from your website?'],
    loop: true, // loop should be a boolean value, not an empty object
  });

  return (
    <section  id='home'>
      <Box
        background="linear-gradient(180deg, #000000, #000000, #000000, #BE8E3C)"
        px="9rem"
        py="-2rem"
        gap='2rem'
        color="white"
        display="flex"
        flexDirection="column"
        alignItems="left"
        justifyContent="center"
        height="900px"
      
      >
        <Heading fontSize="72px" fontFamily="Roboto Condensed">
          Do you want{' '}
          <br/>
          <Box as="span">
            {text}
          </Box>
          <Cursor cursorStyle="|" />
        </Heading>
        <Box>
          <Button py="22px" px="30px">Get Started</Button>
        </Box>
      </Box>
    </section>
  );
}
