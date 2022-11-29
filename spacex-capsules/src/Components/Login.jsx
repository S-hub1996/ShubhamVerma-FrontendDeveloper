import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
  import img from "../Assets/hero.webp";
  export default function Login() {
    const navigate= useNavigate()
const [email,setEmail]= useState('eve.holt@reqres.in')
const [password,setPassword]= useState('')
const [token,setToken]= useState('')

const handleLogin=(e)=>{
e.preventDefault()
    axios({
        method:"post",
        url:"/api/login",
        baseURL:"https://reqres.in",
        data:{email:email,password:password}
    }).then(res=>setToken(res.data))
    .catch(err=>alert('Login Failed'))
   
    if(token){
        alert('Login Successfully')
        navigate('/Home')
    }
    // else{
    //     alert('Login Failed')
    // }
}


    return (
        

      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        w={"full"}
      h={"100vh"}
      backgroundImage={'https://www.spacex.com/static/images/backgrounds/mars_humans.webp'}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}>

        <Stack spacing={8} mx={'auto'} maxW={'2xl'} py={12} px={6} >
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Welcome to SpaceX </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            🚀Login to see in our <Link color={'blue.200'}>Future</Link>🚀
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            bgColor={'gray.100'}



            p={16}>
            <Stack spacing={4} >
                <form onSubmit={handleLogin}>

              <FormControl id="email">
                <FormLabel color={'blackAlpha.900'}>Email address</FormLabel>
                <Input color={'blackAlpha.900'} type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel color={'blackAlpha.900'}>Password</FormLabel>
                <Input color={'blackAlpha.900'} type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox borderColor={'blue'} color={'blackAlpha.900'}>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                type='submit'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Login
                </Button>
              </Stack>
                </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
            
    );
  }