import { useQuery } from "@tanstack/react-query";
import { Api } from "../../../libs/axios-threads";

export function useUser() {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: async () => await Api.get("/auth/check").then((res) => res.data),
  });

  const { data: allUser } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await Api.get("/users").then((res) => res.data),
  });

  return { user, allUser };
}
