import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { queryClient, queryKeys } from "@/global/reactQeury";
import feedAPI from "./UpdateFeed.api";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { UpdateFeedType } from "./UpdateFeed.type";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/global/constants";
import { useRecoilState } from "recoil";
import { loadingAtom } from "../common/Loading/EntireLoading";

export const useUpdateFeed = (_id: string) => {
  const [isLoading, setisLoading] = useRecoilState(loadingAtom);

  const navigate = useNavigate();

  const { data: feed } = useSuspenseQuery<UpdateFeedType, Error>({
    queryKey: [queryKeys.feedMain, _id],
    queryFn: () => feedAPI.getFeed(_id),
  });

  const invalidateFeedQuery = () => {
    queryClient.invalidateQueries({
      queryKey: [queryKeys.feedMain],
    });
  };

  const updateFeed = useMutation({
    mutationFn: feedAPI.updateFeed,
    onMutate: () => {
      setisLoading(!isLoading);
    },
    onSuccess: () => {
      toast.success("피드가 수정되었습니다.");
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

  return { updateFeed, feed };
};
