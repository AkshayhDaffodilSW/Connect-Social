import { Text } from '@chakra-ui/react'
import React , {useState , useEffect} from 'react'

import { useNavigate } from 'react-router-dom';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button
  } from '@chakra-ui/react'

import { useRequiredError } from '../../CustomHooks/useRequiredError'
import { tryLogin , tryLoginIfPossible} from './working/loginLogic'


function Login(props) {

    const [email, setEmail] = useState('')
    const [pass , setPass] = useState('')

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePassChange = (e) => setPass(e.target.value);
  
    const isThereErrorInEmail = useRequiredError(email);
    const isThereErrorInPass = useRequiredError(pass);

    const navigate = useNavigate();

  function isValid(isit){
    if(isit === true){
      navigate("/home");
    }
  }
  useEffect(() => {
    tryLoginIfPossible(isValid);
  } , []);



  return (
    <div>
      <Text
      fontSize={30}
      fontWeight={800}>
        Login
      </Text>
      
      <FormControl isRequired isInvalid={isThereErrorInEmail}>
        <FormLabel
        my={5}
        fontSize={20}>
            Email
        </FormLabel>
        <Input type='email' value={email} onChange={handleEmailChange} />
        {isThereErrorInEmail}<FormErrorMessage>Email is required.</FormErrorMessage> 

      </FormControl>
      <FormControl isRequired isInvalid={isThereErrorInPass}>

        <FormLabel
        my={5}
        fontSize={20}>
            Password
        </FormLabel>
        <Input type='password' value={pass} onChange={handlePassChange} />
        {isThereErrorInPass} <FormErrorMessage>Password is required.</FormErrorMessage>
      </FormControl>
    
          { 
            (isThereErrorInEmail || isThereErrorInPass)?
            <Button
            mt={10}
            backgroundColor='rgb(4 210 233 )'
            size='lg'
            w="40%"
            type='submit'
            color="white"
            isDisabled
            >
              Login
            </Button>
            :
            <Button
            mt={10}
            backgroundColor='rgb(4 210 233 )'
            size='lg'
            w="40%"
            type='submit'
            color="white"
            onClick={() => tryLogin(email , pass , props.checker , isValid)}
          >
            Login
          </Button>
          }
    </div>
  )
}


export default Login
