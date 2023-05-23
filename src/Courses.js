import {VStack, Box, Heading, extendTheme} from "@chakra-ui/react";



function Courses(){
    return(

        <VStack spacing='16px' alignItems='flex-start' py='120' mr='48' ml='48' mb='30'>
            <Heading as='h2' size='2xl' style={{textAlign: 'left'}}>COURSES</Heading>
            <Box  cursor='pointer' textTransform='uppercase' border='1px' borderColor='gray.200' borderRadius='md'  mt='16' w='100%' h='10%' p='30px' color='white'>Osnove kriptografije</Box>
            <Box  textTransform='uppercase' border='1px' borderColor='gray.200' borderRadius='md'  mt='16' w='100%' h='10%' p='30px' color='white'>Osnove blockchain tehnologija</Box>
            <Box  textTransform='uppercase' border='1px' borderColor='gray.200' borderRadius='md'  mt='16' w='100%' h='10%' p='30px' color='white'>Osnove i uvod u javascript</Box>
            <Box  textTransform='uppercase' border='1px' borderColor='gray.200' borderRadius='md'  mt='16' w='100%' h='10%' p='30px' color='white'>Osnove pametnih ugovora</Box>
            <Box  textTransform='uppercase' border='1px' borderColor='gray.200' borderRadius='md'  mt='16' w='100%' h='10%' p='30px' color='white'>Web frontend i react</Box>
            <Box  textTransform='uppercase' border='1px' borderColor='gray.200' borderRadius='md'  mt='16' w='100%' h='10%' p='30px' color='white'>Dapps, decentralizovane aplikacije</Box>
           
        </VStack>   
        )
}

export default Courses;