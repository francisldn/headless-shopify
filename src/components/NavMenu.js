import React,{useContext} from 'react'
import {ShopContext} from '../context/shopContext';
import {
    Drawer, 
    DrawerBody, 
    DrawerFooter, 
    DrawerHeader, 
    DrawerContent, 
    DrawerOverlay, 
    DrawerCloseButton,
    Button,
    Grid,
    Flex,
    Image,
    Text, 
    Link,
    Box,
    VStack
} from "@chakra-ui/react";

const NavMenu = () => {
    const {isMenuOpen, closeMenu} = useContext(ShopContext)

  return (
    <Drawer
        isOpen={isMenuOpen}
        placement='left'
        onClose={closeMenu}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack p="2rem">
                <Link to="/">About Us</Link>
                <Link to="/">Learn More</Link>
                <Link to="/">Sustainability</Link>
            </VStack>
          </DrawerBody>

          <DrawerFooter textAlign="center">
            <Text w="100%"> © Copyright www.workingwithshopify.com</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
}

export default NavMenu