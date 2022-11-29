import { Box, Center, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react'

const CountDownTimer = ({hoursMinSecs}) => {
   
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
    

    const tick = () => {
   
        if (hrs === 0 && mins === 0 && secs === 0) 
            reset()
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <Box Box my={16}>
        <Center >
            <Stack>

         <Text textAlign={'center'} fontSize={'4xl'} fontWeight={'thin'}>Next Launch in</Text>
           
            <Heading fontSize={['4xl','7xl','9xl']} fontWeight={'semibold'}>{`${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</Heading> 
            </Stack>
        </Center>
            </Box>
    );
}

export default CountDownTimer;