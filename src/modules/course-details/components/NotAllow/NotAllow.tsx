"use client";
import imageLock from "@/assets/images/padlock.png";
import { LINK_TEMPLATES } from "@/common/constants/links";
import { Button } from "@/ui-library/buttons";
import { useRouter } from "next/navigation";
import { Lock, Title, Wrapper } from "./styles";

const NotAllow = () => {
  const { push } = useRouter();
  return (
    <Wrapper>
      <Lock src={imageLock} alt="lock" />
      <Title>
        This course is not available to unauthorized users, log in or register
        for the course to be able to view the course
      </Title>
      <Button onClick={() => push(LINK_TEMPLATES.LOGIN())}>Sing in</Button>
    </Wrapper>
  );
};

export default NotAllow;
