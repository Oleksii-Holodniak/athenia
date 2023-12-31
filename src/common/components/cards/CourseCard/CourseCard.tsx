import imagePlug from "@/assets/images/empty.png";
import { LINK_TEMPLATES } from "@/common/constants/links";
import { useRouter } from "next/navigation";
import { FC } from "react";
import {
  Container,
  Description,
  Glossiness,
  Information,
  Preview,
  TagList,
  Tags,
  Time,
  Title,
  Wrapper,
} from "./styles";
import { ICourseComponent } from "./types";
import { IconClockHour } from "../../icons";

const CourseCard: FC<ICourseComponent> = (props) => {
  const { description, title, preview, id, tags , time} = props.course;
  const { push } = useRouter();

  const renderTags = () => {
    return tags.map((tag, id) => <Tags key={id}>{tag}</Tags>);
  };

  return (
    <Wrapper onClick={() => push(LINK_TEMPLATES.COURSE_DETAILS(id))}>
      <Container className="container">
        <Glossiness>
        <Time>
          <IconClockHour />
          {Number(time)}h
        </Time>
          <Preview
            src={preview || imagePlug}
            alt="preview"
            className="preview"
            unoptimized
            width={400}
            height={300}
            onError={(e) => {
              e.currentTarget.src = imagePlug.src;
            }}
          />
        </Glossiness>
        <Information>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <TagList>{renderTags()}</TagList>
        </Information>
      </Container>
    </Wrapper>
  );
};

export default CourseCard;
