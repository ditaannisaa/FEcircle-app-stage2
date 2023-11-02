import { Box, Avatar, Text, Button, Image } from "@chakra-ui/react";
import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";
import { LiaComment } from "react-icons/lia";
import IThreads from "../../../types/ThreadType";
import { useNavigate } from "react-router-dom";
import { Api } from "../../../libs/axios-threads";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../hooks/useUser";

export default function Threads(props: IThreads) {
  const user = useUser();
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate: handleLike } = useMutation({
    mutationFn: () => {
      return Api.post("/like", { thread: props.id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["threads"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleButtonLike = () => {
    handleLike();
  };

  const { mutate: handleUnlike } = useMutation({
    mutationFn: () => {
      return Api.delete(`/like/${props.id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["threads"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleButtonUnlike = () => {
    handleUnlike();
  };

  const handleNavigate = () => {
    // Gunakan fungsi navigate untuk melakukan navigasi ke rute lain
    navigate(`/detail-thread/${props.id}`);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      <Box display={"flex"} gap={4} p={4}>
        <Avatar h={"30px"} w={"30px"} src={props.user?.profile_picture} />
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Box display={"flex"} flexDirection={"row"} gap={2}>
            <Text fontSize={12} fontWeight={"medium"}>
              {props.user?.username}
            </Text>
            <Text fontSize={12}>{props.user?.username}</Text>
            <Text fontSize={12}>4h</Text>
          </Box>
          <Text fontSize={12}>{props.content}</Text>

          <Box>
            {!props.image ? (
              <Box></Box>
            ) : (
              <Box>
                <Image
                  objectFit={"cover"}
                  boxSize={"400px"}
                  src={props.image}
                  mb={3}
                />
              </Box>
            )}

            <Box display={"flex"} gap={4}>
              <Box display={"flex"} gap={2}>
                {props.like
                  .map((like) => like.user.id)
                  .includes(user?.user?.id) ? (
                  <Button onClick={handleButtonUnlike}>
                    <AiTwotoneHeart color={"red"} />
                  </Button>
                ) : (
                  <Button onClick={handleButtonLike}>
                    <AiOutlineHeart />
                  </Button>
                )}

                <Text fontSize={12}>{props.like?.length}</Text>
              </Box>

              <Box display={"flex"} gap={2}>
                <LiaComment />
                <Button onClick={handleNavigate}>
                  <Text fontSize={12}>{props.reply?.length} replies</Text>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
