import { useGetAllPostsQuery } from "../../../generated/graphql.ts";

export const ProfilePage = () => {
  const { data } = useGetAllPostsQuery();
  console.log(data?.getAllPosts);

  return <div>ProfilePage</div>;
};
