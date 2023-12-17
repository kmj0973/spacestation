import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/config/reactQeury";
import { CategoryType } from "./Category.type";
import categoryAPI from "./Category.api";

/**
 * 샘플 훅
 */
export const useCategory = () => {
  const { data: categorys, ...rest } = useQuery<CategoryType[], Error>({
    queryKey: [queryKeys.category],
    queryFn: categoryAPI.getCategory,
  });

  return { categorys, ...rest };
};