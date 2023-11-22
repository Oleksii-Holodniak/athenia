"use client";
import { UserService } from "@/services/general";
import { Button } from "@/ui-library/buttons";

const Profile = () => {
  const exitHandler = async () => {
    await UserService.logOut();
    window.location.reload();
  };

  return (
    <div>
      Profile
      <Button onClick={exitHandler}>Exit</Button>
    </div>
  );
};

export default Profile;
