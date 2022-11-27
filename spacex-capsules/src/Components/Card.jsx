import img from '../Assets/BannerImg.webp';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  useColorModeValue,
  Flex,
  Button,
  ModalOverlay,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Card({item}) {
  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState(<OverlayTwo/>)


  return (
    <Center >
      <Box
      my={6} 
      h={'35em'}
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              'https://www.spacex.com/static/images/backgrounds/mission_humans.webp'
            }
            layout={'fill'}
            
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
               SpaceX Capsule Launches
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {item.details}
          </Heading>
          <Text color={'gray.500'}>
            {item.details}, consetetur sadipscing elitr, sed diam
            At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
          <Text fontWeight={600} >Landings : {item.landings}</Text>
          <Flex gap={2}>
          <Text fontWeight={600}>Capsule Serial : {item.capsule_serial}</Text>
          <Text fontWeight={600}>Capsule Id : {item.capsule_id}</Text>
          </Flex>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Button
        ml='4'
        onClick={() => { 
        
          onOpen()
        }}
      >
       See More Details
      </Button>
           
          </Stack>
        </Stack>
      </Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>{item.details}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Text fontWeight={600}> Status : {item.status}</Text>
          <Text fontWeight={600}> Type : {item.type}</Text>
            <Text  fontWeight={600}> Launch date : {item.original_launch}</Text>
            <Text fontWeight={600}>Capsule Serial : {item.capsule_serial}</Text>
            <Text fontWeight={600}>Capsule Id : {item.capsule_id}</Text>
            <Text fontWeight={600}>Original launch unix
: {item.original_launch_unix
}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}