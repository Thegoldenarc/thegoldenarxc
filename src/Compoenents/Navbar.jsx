import React from 'react';
import { Box, Flex, Text,  } from '@chakra-ui/react';
import CallToAction from './CallToAction';

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest',
        });
      }, 200); // Adjust the delay time as needed
    }
  };
  

  return (
    <Box
      bg="black"
      display="flex"
      w="100%"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      color="white"
      p={4}
      boxShadow="md"
      px="9rem"
      h={{ base: 'auto', md: '85px' }}
      position="fixed"
      zIndex="1000"
    >
   
     <Box>
         {/* Logo */}
         <Text fontSize="xl" fontWeight="bold">
          The Golden Arc
        </Text>
     </Box>

      <Box>
          {/* Navigation Links */}
          <Flex alignItems="center">
            <NavItem onClick={() => scrollToSection('home')}>Home</NavItem>
            <NavItem onClick={() => scrollToSection('about')}>About Us</NavItem>
            <NavItem onClick={() => scrollToSection('contact')}>Contact Us</NavItem>
            <NavItem>
            <CallToAction/>
            </NavItem>
          </Flex>
      </Box>
    
    </Box>
  );
}

// Component for individual navigation items
function NavItem({ children, onClick }) {
  return (
    <Text mx={4} fontSize="md" fontWeight="medium" fontFamily="Oswald" cursor="pointer" color="white" onClick={onClick}>
      {children}
    </Text>
  );
}
