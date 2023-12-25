import imageLock from "@/assets/images/padlock.png";
import { Button } from "@/ui-library/buttons";
import { FC } from "react";
import { GetCourse } from "..";
import { Lock, Title, Wrapper } from "./styles";
import { IBuyCourseProps } from "./types";

const BuyCourse: FC<IBuyCourseProps> = (props) => {
  const { setOpened, opened } = props;
  return (
    <Wrapper>
      <GetCourse onClose={() => setOpened(false)} opened={opened} />
      <Lock src={imageLock} alt="lock" />
      <Title>
        To get access to this course, you need to enter a special code provided
        to you by the owner of the course
      </Title>
      <Button onClick={() => setOpened(true)}>Get Courses</Button>
    </Wrapper>
  );
};

export default BuyCourse;
