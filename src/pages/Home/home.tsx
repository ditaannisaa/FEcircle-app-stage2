import { Box, Heading } from "@chakra-ui/react";
import Threads from "../../features/threads/components/Threads";
import { Api } from "../../libs/axios-threads";
import { useQuery } from "@tanstack/react-query";
import IThreads from "../../types/ThreadType";
import FormThreads from "../../components/FormThreads/FormThreads";

export default function Home() {
  const { data: threads } = useQuery({
    queryKey: ["threads"],
    queryFn: async () => {
      const { data } = await Api.get("/threads");
      return data.data;
    },
  });

  return (
    <Box w={"550px"} borderRight={"1px solid #fff"}>
      <Box gap={4}>
        <Heading fontSize={20} fontWeight={"medium"} p={4}>
          Home
        </Heading>
        <FormThreads />
      </Box>
      {threads?.map((data: IThreads) => (
        <Box>
          <Threads
            key={data.id}
            id={data.id}
            content={data.content}
            image={data.image}
            posted_at={data.posted_at}
            user={data.user}
            reply={data.reply}
            like={data.like}
          />
        </Box>
      ))}
    </Box>
  );
}
