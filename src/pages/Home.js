import React,{useContext, useEffect} from 'react'
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';
import {Box, Grid, Text, Image} from '@chakra-ui/react';
import Hero from '../components/Hero';
import ImageWithText from '../components/ImageWithText';
import RichText from '../components/RichText';

const Home = () => {    
    const {fetchAllProducts, products} = useContext(ShopContext);

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    if (!products) return <div>Loadings...</div>
    
    return (
        <Box>
             <Hero/>
             <RichText heading="The relaxation you've been waiting for." text="Our bath bombs guarantee a fun, relaxing and colorful night."/>
            <Grid templateColumns="repeat(3,1fr)">
                {
                    products.map((product) => (
                        <Link to={`/products/${product.handle}`} key={product.id}>
                            <Box _hover={{opacity: '80%'}} textAlign="center" position="relative">
                                <Image src={product.images[0].src}/>
                                <Text position="absolute" bottom="15%"
                                w="100%"
                                fontWeight="bold"
                                >
                                {product.title}
                                </Text>
                                <Text
                                position="absolute" bottom="5%"
                                w="100%"
                                color="gray.500"
                                >
                                    ${product.variants[0].price}
                                </Text>
                            </Box>
                        </Link>
                    ))
                }
            </Grid>
            <RichText 
            heading="Treat yourself!" 
            />
            <ImageWithText  image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758" heading="Heading" text="Lorem ipsum dolor sit amet. Ab galisum adipisci et sint magnam est rerum amet est rerum odit est fugit beatae sit internos natus. Aut autem fuga a dolores fuga est excepturi eligendi eum eligendi nostrum qui architecto voluptatem!"/>
            <ImageWithText reverse image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758" heading="Second Heading" text="Lorem ipsum dolor sit amet. Ab galisum adipisci et sint magnam est rerum amet est rerum odit est fugit beatae sit internos natus. Aut autem fuga a dolores fuga est excepturi eligendi eum eligendi nostrum qui architecto voluptatem!"/>
        </Box>
    )
}

export default Home