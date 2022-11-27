import { Flex, Select, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Card from './Card';

const Data = () => {
    const [data, setData] = useState([]);

    function handleFilter(filter) {

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
<Flex gap={2} justifyContent={'space-evenly'} m={4}>

    <Select onChange={handleFilter}>
        <option>Filter by Status</option>
        <option value={'active'}>Active</option>
        <option value={'destroyed'}>Destroyed</option>
        <option value={'retired'}>Retired</option>
        <option value={'unknown'}>Unknown</option>
      
      
    </Select>
    <Select>
        <option>Filter by Original Launch</option>
        <option value={'launched'}>with Date of launch</option>
        <option value={'notLaunched'}>Without Date of Launch</option>

    </Select>
    <Select>
        <option>Filter by Type</option>
        <option value={'Dragon 1.0'}>Dragon 1.0</option>
        <option value={'Dragon 1.1'}>Dragon 1.1</option>
        <option value={'Dragon 2.0'}>Dragon 2.0</option>
   
    </Select>
</Flex>
    <SimpleGrid columns={[1,1,2,2,3]}>
        {
            data?.map(item=>{
                return <Card item={item} key={item.capsule_serial}/>
            })
        }
    </SimpleGrid>
        </>
  )
}

export default Data