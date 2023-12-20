import { useMutation } from "@tanstack/react-query";
import { queryClient, queryKeys } from "@/global/reactQeury";
import feedAPI from "./FeedOption.api";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
/**
 * 샘플 훅
 */
export const useFeed = () => {
  const invalidateFeedQuery = () => {
    queryClient.invalidateQueries({
      queryKey: [queryKeys.feed],
    });
  };

  const deleteFeed = useMutation({
    mutationFn: async (_id: string) => {
      return feedAPI.deleteFeed(_id);
    },
    onSuccess: () => {
      toast.success("피드가 삭제되었습니다.");
      invalidateFeedQuery();
    },
    onError: (err) => {
      toast.error(err instanceof AxiosError ? err.message : "unknown error");
    },
  }).mutateAsync;

  return { deleteFeed };
};
