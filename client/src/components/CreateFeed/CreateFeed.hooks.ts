import { useMutation } from "@tanstack/react-query";
import { queryClient, queryKeys } from "@/global/reactQeury";
import feedAPI from "./CreateFeed.api";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/global/constants";
import { useRecoilState } from "recoil";
import { loadingAtom } from "../common/Loading/EntireLoading";

export const useCreateFeed = () => {
  const [isLoading, setisLoading] = useRecoilState(loadingAtom);

  const navigate = useNavigate();

  const invalidateFeedQuery = () => {
    queryClient.invalidateQueries({
      queryKey: [queryKeys.feedMain],
    });
  };

  const createFeed = useMutation({
    mutationFn: feedAPI.createFeed,
    onMutate: () => {
      setisLoading(!isLoading);
    },
    onSuccess: () => {
      toast.success("피드가 추가되었습니다.");
      invalidateFeedQuery();
      navigate(PATH.root);
    },
    onError: (err) => {
      toast.error(
        err instanceof AxiosError ? err.response?.data.error : "unknown error",
      );
    },
    onSettled: () => {
      setisLoading(!isLoading);
    },
  }).mutateAsync;

  return { createFeed };
};
