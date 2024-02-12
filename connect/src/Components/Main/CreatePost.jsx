import React , {useState} from 'react'
import {
    Card,
    CardBody,
    Avatar,
    Input,
    Flex, 
    Button,
    Text,
    Image
} from '@chakra-ui/react'
import ImageInput from './ImageInput'
import { FaPaperPlane } from "react-icons/fa6";


function CreatePost() {

    const [srcValue , setSrcValue] = useState("#");
    const [buttonProp ,setButtonProp] = useState(false)
    const [commentValue , setCommentValue] = useState("");

    function handleInputValueChange(event){
        let temp = event.target.value;
        if(temp !== ''){
            setButtonProp(true);
        }
        else{
            if(srcValue === "#")
                setButtonProp(false);
        }
        setCommentValue(event.target.value);
    }

    
    function changeScr(getBackValue){
        setButtonProp(true);
        setSrcValue(getBackValue);
    }

  return (
    <div>
      <Card
      maxW='600px'
      mx="auto"
      my= {10}
      boxShadow='xl'
      >
        <CardBody>
            <Flex>
                <Avatar 
                size='md'
                mx={3}
                />

                <Flex 
                flex='1' 
                alignItems='center' 
                flexWrap='wrap'
                />

                <Input
                placeholder='Connect with your buddies'
                _placeholder={{ 
                    opacity: 0.8, 
                    color: 'gray.500' 
                }}
                mx={3}
                value = {commentValue}
                onChange={handleInputValueChange}
                />
            </Flex>

            <Image 
            src={srcValue} 
            alt=''
            maxH={400}
            maxW={500}
            mx='auto'
            my={3}
            borderRadius={4}
            />

            <Flex 
            my={4}
            mx={4}
            >
                
                <ImageInput text="Share Photos" previewFunciton={changeScr}/>   

                <Flex 
                flex='1' 
                alignItems='center' 
                flexWrap='wrap'
                />
                
                {buttonProp ?
                <Button 
                colorScheme='red'
                >
                    <Flex>
                        <Text
                        color='white'
                        fontSize={18}
                        fontWeight={700}
                        mx={2}
                        >
                            Post 
                        </Text>
                        <FaPaperPlane 
                        color='white'
                        fontSize={18}
                        fontWeight={700}
                        />
                    </Flex>
                </Button>

                :

                <Button 
                colorScheme='red'
                isDisabled
                >
                    <Flex>
                        <Text
                        color='white'
                        fontSize={18}
                        fontWeight={700}
                        mx={2}
                        >
                            Post 
                        </Text>
                        <FaPaperPlane 
                        color='white'
                        fontSize={18}
                        fontWeight={700}
                        />
                    </Flex>
                </Button>
                }
            </Flex>

        </CardBody>
    </Card>
    </div>
  )
}

export default CreatePost
