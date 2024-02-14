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

function Feed(props) {

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
                    <Avatar name='User' src='' />

                    <Box>
                    <Heading size='sm'>{props.email}</Heading>
                    <Text>{props.text}</Text>
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
            src={props.url}
            alt=''
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
