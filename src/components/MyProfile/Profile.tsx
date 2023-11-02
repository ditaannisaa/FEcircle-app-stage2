import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Button,
  CardFooter,
  Heading,
  Stack,
  HStack,
  Text,
} from "@chakra-ui/react";
import Foryou from "../Suggested/Foryou";
import Footer from "../Footer/Footer";
import { useUser } from "../../features/threads/hooks/useUser";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useUser();

  const profile = useSelector((state: any) => {
    state;
  });

  console.log(profile, "ini profile");

  return (
    <Box>
      <Card gap={4} borderRadius={8} bg={"#262626"} p={4} mb={4}>
        <CardHeader>
          <Heading fontWeight={"medium"}>My Profile</Heading>
        </CardHeader>
        <CardBody mb={10}>
          <Box>
            <Box
              display={"flex"}
              bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
              borderRadius={10}
              position={"relative"}
              p={4}
              h={"70px"}
            >
              <Box
                display={"flex"}
                flexDirection={"row"}
                position={"absolute"}
                top={"40px"}
                width={"full"}
              >
                <Avatar
                  h={"70px"}
                  w={"70px"}
                  src={user?.user?.profile_picture}
                  border={"5px solid #262626"}
                  bg={"#262626"}
                />
                <Button
                  position={"absolute"}
                  right={"16px"}
                  border={"1px solid #fff"}
                  borderRadius={20}
                  height={"10px"}
                  p={4}
                  colorScheme="white"
                  fontSize={"10px"}
                  alignSelf={"end"}
                  justifySelf={"end"}
                >
                  Edit Profile
                </Button>
              </Box>
            </Box>
          </Box>
        </CardBody>
        <CardFooter>
          <Stack>
            <Heading fontWeight={"medium"} fontSize={"20px"}>
              {user?.user?.full_name}
            </Heading>
            <Text fontSize={12}>@{user?.user?.username}</Text>
            {user?.user?.profile_description ? (
              <Box>
                <Text fontSize={12}>{user?.user?.profile_description}</Text>

                <HStack>
                  <Text fontSize={12}>291 Following</Text>
                  <Text fontSize={12}>291 Followers</Text>
                </HStack>
              </Box>
            ) : (
              <Box>
                <HStack>
                  <Text fontSize={12}>291 Following</Text>
                  <Text fontSize={12}>291 Followers</Text>
                </HStack>
              </Box>
            )}
          </Stack>
        </CardFooter>
      </Card>
      <Foryou />
      <Footer />
    </Box>
  );
}
