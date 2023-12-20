import imageFacebook from "@/assets/icons/social/facebook.svg";
import imageInstagram from "@/assets/icons/social/instagram.svg";
import imageTelegram from "@/assets/icons/social/telegram.svg";
import { LINK_TEMPLATES } from "@/common/constants/links";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import {
  Container,
  Description,
  Glossiness,
  Information,
  Preview,
  Social,
  Title,
  Wrapper,
} from "./styles";
import { ICourseComponent } from "./types";

const CourseCard: FC<ICourseComponent> = (props) => {
  const { bgColor, info, id, tags } = props.course;
  const { push } = useRouter();

  return (
    <Wrapper onClick={() => push(LINK_TEMPLATES.COURSE_DETAILS(id))}>
      <Container className="container">
        <Glossiness>
          <Preview src={info.image} alt="preview" className="preview" />
        </Glossiness>
        <Social onClick={(e) => e.stopPropagation()}>
          <Image src={imageFacebook} alt="facebook" />
          <Image src={imageInstagram} alt="instagram" />
          <Image src={imageTelegram} alt="telegram" />
        </Social>
        <Information>
          <Title>{info.name}</Title>
          <Description>{info.description}</Description>
        </Information>
      </Container>
    </Wrapper>
  );
};

export default CourseCard;
