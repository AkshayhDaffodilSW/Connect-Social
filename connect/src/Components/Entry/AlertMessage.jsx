import React from 'react'
import { 
  Box,
   Text }
    from '@chakra-ui/react'

function AlertMessage(props) {
    const status = props.status;
    const message = props.message;
    const color = (status === "success") ? "green.500" : "red.500";
    return (
      <Box
      marginTop={9}
      backgroundColor={color}
      color="white"
      fontSize={20}
      borderRadius={3}>
        <Text>
          {message}
        </Text>
      </Box>
    );
}

export default AlertMessage
