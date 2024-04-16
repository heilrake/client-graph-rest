import { Button } from "@nextui-org/react";
import { useEffect } from "react";
import { authService } from "../../client/core/auth/service.ts";

export const ProfilePage = () => {
  //const { data } = useGetAllPostsQuery();
  //console.log(data?.getAllPosts);

  useEffect(() => {
    const response = authService.check();
    console.log(response);
  }, []);
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button color="primary">Logout</Button>
    </div>
  );
};
