import imageFacebook from "@/assets/icons/social/facebook.svg";
import imageInstagram from "@/assets/icons/social/instagram.svg";
import imageTelegram from "@/assets/icons/social/telegram.svg";
import imageFace from "@/assets/images/categories/6.webp";
import Image from "next/image";
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

const CourseCard = () => {
  return (
    <Wrapper>
      <Container>
        <Glossiness>
          <Preview src={imageFace} alt="preview" />
        </Glossiness>
        <Social>
          <Image src={imageFacebook} alt="facebook" />
          <Image src={imageInstagram} alt="instagram" />
          <Image src={imageTelegram} alt="telegram" />
        </Social>
        <Information>
          <Title>Super History Course </Title>
          <Description>
            Glossy Paper Brand Psd Mockup | Pixeden Club Pixeden Glossy Paper
            Brand Psd Mockup | Pixeden Club UI Design: Glossy Buttons with CSS3
            Gradient - Hongkiat Hongkiat UI Design: Glossy Buttons with CSS3
            Gradient - Hongkiat Trending Resources tagged as glossy | Figma
            Community Figma Trending Resources tagged as glossy | Figma
            Community CSS Button Shine Hover Effect CodePen CSS Button Shine
            Hover Effect css-effects · GitHub Topics · GitHub GitH{" "}
          </Description>
        </Information>
      </Container>
    </Wrapper>
  );
};

export default CourseCard;
