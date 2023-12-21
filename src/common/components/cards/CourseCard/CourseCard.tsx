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
  Title,
  Wrapper,
} from "./styles";
import { ICourseComponent } from "./types";

const CourseCard: FC<ICourseComponent> = (props) => {
  const { info, id, tags } = props.course;
  const { push } = useRouter();

  const renderTags = () => {
    return tags.map((tag, id) => <Tags key={id}>{tag}</Tags>);
  };

  return (
    <Wrapper onClick={() => push(LINK_TEMPLATES.COURSE_DETAILS(id))}>
      <Container className="container">
        <Glossiness>
          <Preview
            src={info.image}
            alt="preview"
            className="preview"
            width={400}
            height={300}
          />
        </Glossiness>
        <Information>
          <Title>{info.name}</Title>
          <Description>{info.description}</Description>
          <TagList>{renderTags()}</TagList>
        </Information>
      </Container>
    </Wrapper>
  );
};

export default CourseCard;
