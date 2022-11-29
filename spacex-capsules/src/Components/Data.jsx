import { Button, Flex, Select, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import CountDownTimer from './CountDownTimer';

const Data = () => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState('');
    const [launched, setLaunched] = useState('');
    const [type, setType] = useState('');
    const hoursMinSecs = {hours:24, minutes: 20, seconds: 40}
  async function handleFilter() {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)"
           }
           
           let response = await fetch(`https://api.spacexdata.com/v3/capsules?status=${status}&type=${type}`, { 
             method: "GET",
             headers: headersList
           });
           
           let data = await response.json();
       console.log(data)
      setData(data)
    }
   async function getData() {
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)"
       }
       
       let response = await fetch("https://api.spacexdata.com/v3/capsules?limit=100", { 
         method: "GET",
         headers: headersList
       });
       
       let data = await response.json();
       console.log(data)
      setData(data)
   }

    useEffect(()=>{
       getData()
  
           
    },[])
  return (



    <>
    
<CountDownTimer hoursMinSecs={hoursMinSecs}/>
<SimpleGrid mx={'12'} columns={[2,2,3,3,4,]}>

    <Select width={'15em'} onChange={(e)=>{setStatus(e.target.value)}}>
        <option>Filter by Status</option>
        <option value={'active'}>Active</option>
        <option value={'destroyed'}>Destroyed</option>
        <option value={'retired'}>Retired</option>
        <option value={'unknown'}>Unknown</option>
      
      
    </Select>
    <Select width={'15em'} onChange={(e)=>{setLaunched(e.target.value)}}>
        <option>Filter by Original Launch</option>
        <option value={'launched'}>with Date of launch</option>
        <option value={'notLaunched'}>Without Date of Launch</option>

    </Select>
    <Select width={'15em'} onChange={(e)=>{setType(e.target.value)}}>
        <option>Filter by Type</option>
        <option value={'Dragon 1.0'}>Dragon 1.0</option>
        <option value={'Dragon 1.1'}>Dragon 1.1</option>
        <option value={'Dragon 2.0'}>Dragon 2.0</option>
   
    </Select>
    <Button width={'10em'} bg={'gray.300'} onClick={handleFilter}>Filter Now</Button>
</SimpleGrid>

    <SimpleGrid columns={[1,1,2,2,3]}>
        {data?
            data?.map(item=>{
                return <Card item={item} key={item.capsule_serial}/>
            }):"No Such Data"
        }
    </SimpleGrid>
        </>
  )
}

export default Data