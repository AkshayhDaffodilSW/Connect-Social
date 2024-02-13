import React from 'react'
import {
    Card,
    CardHeader,
    Flex,
    Box,
    Avatar,
    Heading,
    Text,
    CardBody,
    Image,
    CardFooter,
    Button,
} from "@chakra-ui/react"
import { FcLike } from "react-icons/fc";
import { FaCommentAlt  , FaShareAlt} from "react-icons/fa";

function Feed() {
  return (
    <div>
      <Card 
      maxW={550}
      mx='auto'
      my={3}
      >
        <CardHeader>
            <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                    <Box>
                    <Heading size='sm'>Segun Adebayo</Heading>
                    <Text>Creator, Chakra UI</Text>
                    </Box>
                </Flex>
            {/* <IconButton
                variant='ghost'
                colorScheme='gray'
                aria-label='See menu'
                icon={<BsThreeDotsVertical />}
            /> */}
            </Flex>
        </CardHeader>
        <CardBody>
            <Text>
                Sample text
            </Text>
        </CardBody>
        <Image
            objectFit='cover'
            src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Chakra UI'
            m={2}
        />

        <CardFooter
            justify='space-between'
            flexWrap='wrap'
            sx={{
            '& > button': {
                minW: '136px',
            },
            }}
        >
            <Button flex='1' variant='ghost' leftIcon={<FcLike />}>
            Like
            </Button>
            <Button flex='1' variant='ghost' leftIcon={<FaCommentAlt />}>
            Comment
            </Button>
            <Button flex='1' variant='ghost' leftIcon={<FaShareAlt />}>
            Share
            </Button>
        </CardFooter>
        </Card>
    </div>
  )
}

export default Feed
