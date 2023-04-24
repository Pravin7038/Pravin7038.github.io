
import { Container, Text } from "@chakra-ui/react";
import React from "react";

const SkillsHeading = () => {
  return (
      <Container
      id='skills'
        transform="rotate(45deg)"
        borderRadius={["1em",'2em']}
        height={['100px',"200px"]}
        width={['100px',"200px"]}
        border=".25em solid"
        borderColor="brand"
        bg="brand_secondary "
        p='0px'
        mt='-50px'
        ml={['10px','50px','100px','200px','200px']}
        
      >
        <Container
          transform="rotate(-45deg)"
          height={['100px',"200px"]}
          width={['100px',"200px"]}
          p={['1em',"2.5em"]}
          
        >
          <Text fontSize={['lg','3xl']} color="brand" marginTop={['1em','1em']} textAlign='center' fontWeight="bold">
            Skills
          </Text>
         
        </Container>
      </Container>
  );
};

export default SkillsHeading;
