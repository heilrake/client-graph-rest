import { Button } from "@nextui-org/react";
import { useGetAllPostsQuery } from "../../../generated/graphql.ts";

export const ProfilePage = () => {
  const { data } = useGetAllPostsQuery();
  console.log(data?.getAllPosts);

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button color="primary">Logout</Button>
    </div>
  );
};
