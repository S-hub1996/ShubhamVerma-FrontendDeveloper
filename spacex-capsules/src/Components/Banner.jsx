import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import img from "../Assets/hero.webp";
export default function Banner() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const handleSearch = () => {};

  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={img}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={24}>
          <Text
            align={"center"}
            color={"white"}
            fontWeight={300}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          >
            “You want to wake up in the morning and think the future is going to
            be great - and that’s what being a spacefaring civilization is all
            about. It’s about believing in the future and thinking that the
            future will be better than the past. And I can’t think of anything
            more exciting than going out there and being among the stars."
            <br />
            <br />
            -Elon Musk
          </Text>
          <Flex justifyContent={"space-between"} gap="8">
            <Input
              w={"30em"}
              h={"3em"}
              rounded={"full"}
              color={"white"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={"Search Casules"}
            />
            <Button
              onClick={handleSearch}
              w={"10em"}
              h={"3em"}
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Search
            </Button>
          </Flex>
        </Stack>
      </VStack>
    </Flex>
  );
}
