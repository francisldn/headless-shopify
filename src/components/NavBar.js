import React,{useContext} from 'react'
import { ShopContext } from '../context/shopContext';
import { Box, Icon, Image, Flex, Badge } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {MdMenu, MdShoppingBasket} from 'react-icons/md';

const NavBar = () => {
    const {openCart, openMenu, checkout} = useContext(ShopContext);
    
    return (
        <Flex 
        backgroundColor="#FFA8E2" 
        flexDir="row" 
        alignItems="center"
        justifyContent="space-between" 
        p="2rem">
            <Icon fill="white" as={MdMenu} w="30px" h="30px"
            onClick={()=> openMenu()}
            ></Icon>
            <Link to='/'>
            <Image src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540" w={100} h={100}/>
            </Link>
            <Box>
                <Icon fill="white" cursor="pointer" as={MdShoppingBasket} w={30} h={30} onClick={()=> openCart()}
                />
                <Badge backgroundColor="#FF38BD" borderRadius="50%" marginBottom="35px">{checkout.lineItems?.length}</Badge>
            </Box>
        </Flex>
    )
}

export default NavBar