import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../../apollo/posts.ts";

export const ProfilePage = () => {
  const { data } = useQuery(GET_ALL_POSTS);
  console.log(data);
  return <div>ProfilePage</div>;
};
