import { Text } from '@chakra-ui/react'
import React , {useState } from 'react'

import { useNavigate } from 'react-router-dom';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button
  } from '@chakra-ui/react'

import { useRequiredError } from '../../CustomHooks/useRequiredError'
import { tryRegister , tryRegisterIfPossible} from './working/registerLogic';


function Register(props) {
  
  const [firstName, setFirstName] = useState('');
  const [secondName , setSecondName] = useState('');
  const [email , setEmail] = useState('');
  const [pass , setPass] = useState('');
  const [rePass, setRePass] = useState('');

  const handleFirstNameChange = (e) => setFirstName(e.target.value)
  const handleSecondNameChange = (e) => setSecondName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePassChange = (e) => setPass(e.target.value);
  const handleRePassChange = (e) => setRePass(e.target.value);

  const isThereErrorInFirstName = useRequiredError(firstName);
  const isThereErrorInRePass = useRequiredError(rePass);
  const isThereErrorInEmail = useRequiredError(email);
  const isThereErrorInPass = useRequiredError(pass);

  
  const navigate = useNavigate();

  function isValid(isit){
    if(isit){
      navigate("/home");
    }
  }


  return (
    <div>
      <Text
      fontSize={30}
      fontWeight={800}>
        Sign Up
      </Text>

      <FormControl isRequired isInvalid={isThereErrorInFirstName}> 
        <FormLabel
        my={5}
        fontSize={20}>
            First Name 
        </FormLabel>
        <Input type='text' value={firstName} onChange={handleFirstNameChange} />
        {isThereErrorInFirstName}<FormErrorMessage>First Name is required.</FormErrorMessage> 
        </FormControl>

        <FormLabel
        my={5}
        fontSize={20}>
            Second Name
        </FormLabel>
        <Input type='text' value={secondName} onChange={handleSecondNameChange} />

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

      <FormControl isRequired isInvalid={isThereErrorInRePass}> 
        <FormLabel
        my={5}
        fontSize={20}>
            Re Password
        </FormLabel>
        <Input type='password' value={rePass} onChange={handleRePassChange} />
        {isThereErrorInRePass}<FormErrorMessage>Re Password is required.</FormErrorMessage> 
        </FormControl>
    
          {
            (isThereErrorInEmail || isThereErrorInFirstName || isThereErrorInPass || isThereErrorInRePass) ?
            <Button
            mt={10}
            backgroundColor='rgb(233 4 4 / 68%) '
            size='lg'
            w="40%"
            type='submit'
            color="white"
            isDisabled
            >
              Sign Up
            </Button>
            :
            <Button
            mt={10}
            backgroundColor='rgb(233 4 4 / 68%) '
            size='lg'
            w="40%"
            type='submit'
            color="white"
            onClick={() => tryRegister(firstName , secondName , email, pass, rePass , props.checker , isValid)}
            >
              Sign Up
            </Button>
            
          }
    </div>
  )
}

export default Register
