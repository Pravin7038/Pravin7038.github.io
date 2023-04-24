import {  Container } from '@chakra-ui/react';
import React from 'react';
import Pravin from "../Pravin-Photo.png";

const MyImageCard = () => {
    return (
       
    <Container transform= 'rotate(45deg)'
    borderRadius= {['2em','3em','']}
    height= "300px"
    width= "300px"
    overflow='hidden'
    bg= '#A1887F '
    padding='0px'
    mt={['1em','1em','0em','0em','0em']}
    mr={['1em','5em','10em','15em','20em']}
    _hover={{boxShadow:'5px 5px 20px #79d392'}}    
    >
        <Container transform= 'rotate(-45deg)'
         height= "300px"
         width="100%"
        //  border="solid red 1px"
         bgPos='center'
         bgRepeat='no-repeat'
         bgSize='contain'
         bgImage={Pravin}
         m='0px'
         ></Container>
       
        
    
      </Container>
    );
};

export default MyImageCard;


  
 
  