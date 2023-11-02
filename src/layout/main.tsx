import React from "react";
import { ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/MyProfile/Profile";
import { Box, Flex, Spacer } from "@chakra-ui/react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <Box width="full" h={"full"}>
      <Flex gap={4}>
        <Box w={"300px"} minH="100vh" left={"0"} borderRight={"1px solid #fff"}>
          <Navbar />
        </Box>

        {children}

        <Box w={"350px"} right={"0"} position={"fixed"}>
          <Profile />
        </Box>
      </Flex>
    </Box>
  );
}
