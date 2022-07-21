import React from 'react';
import {Box, Heading, Text, Center} from '@chakra-ui/react';

const RichText = ({heading, text}) => {
  return (
    <Box p="4rem">
        <Center display="flex" flexDir="column" textAlign="center">
            <Heading pt="2rem" pb="2.5rem">
                {heading && heading}
            </Heading>
            <Text>
                {text && text}
            </Text>
        </Center>
    </Box>
  )
}

export default RichText