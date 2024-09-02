import { useToast } from "@/components/ui/use-toast";
import {
  QueryFilters,
  useMutation,
  useQueryClient,
  InfiniteData,
} from "@tanstack/react-query";
import { submitPost } from "./actions";
import { PostsPage } from "@/lib/types";
import { useSession } from "@/app/(main)/SessionProvider";

export function useSubmitPostMutation() {
  const { toast } = useToast();

  const queryClient = useQueryClient();

  const { user } = useSession();

  const mutation = useMutation({
    mutationFn: submitPost,
    onSuccess: async (newPost) => {
      const queryFilter = {
        queryKey: ["post-feed"],
        predicate(query) {
          return (
            query.queryKey.includes("for-you") ||
            query.queryKey.includes(user.id) // update profile feed cache also
          );
        },
      } satisfies QueryFilters;
      await queryClient.cancelQueries(queryFilter); // Cancel current running query

      // Update posts cache with our new post
      queryClient.setQueriesData<InfiniteData<PostsPage, string | null>>(
        queryFilter,
        (oldData) => {
          const firstPage = oldData?.pages[0];
          if (firstPage) {
            return {
              pageParams: oldData.pageParams,
              pages: [
                {
                  posts: [newPost, ...firstPage.posts],
                  nextCursor: firstPage.nextCursor,
                },
                ...oldData.pages.slice(1),
              ],
            };
          }
        },
      );

      queryClient.invalidateQueries({
        queryKey: queryFilter.queryKey,
        predicate(query) {
          return queryFilter.predicate(query) && !query.state.data; // If data is null, invalidate feed, its an edge case which can happen if user tries to create post before feeds are loaded
        },
      });

      toast({
        description: "Post created",
      });
    },
    onError(error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Failed to post. Please try again",
      });
    },
  });
  return mutation;
}
