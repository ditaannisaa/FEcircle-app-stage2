import { useQuery } from "@tanstack/react-query";
import { Api } from "../../../libs/axios-threads";
import { TUser } from "../../../types/UserType";

export function useUser() {
  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ["user"],
    queryFn: async () => await Api.get("/auth/check").then((res) => res.data),
  });

  const { data: allUser, isLoading: isLoadingAllUser } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await Api.get("/users").then((res) => res.data),
  });

  return { user, allUser, isLoadingUser, isLoadingAllUser };
}
