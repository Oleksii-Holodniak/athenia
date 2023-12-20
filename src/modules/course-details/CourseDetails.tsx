import imageFacebook from "@/assets/icons/social/facebook.svg";
import imageInstagram from "@/assets/icons/social/instagram.svg";
import imageTelegram from "@/assets/icons/social/telegram.svg";
import imageFace from "@/assets/images/categories/6.webp";

import Image from "next/image";
import { EmptyState } from "./components";
import {
  Banner,
  Content,
  ContentItem,
  Head,
  ImageCourse,
  Information,
  Paragraph,
  Social,
  Title,
  Wrapper,
} from "./styles";

const CourseDetails = () => {
  return (
    <Wrapper>
      <Head>
        <Banner>
          <ImageCourse src={imageFace} alt="course" />
          <Information>
            <Title>Super History Course </Title>
            <Paragraph>
              Glossy Paper Brand Psd Mockup | Pixeden Club Pixeden Glossy Paper
              Brand Psd Mockup | Pixeden Club UI Design: Glossy Buttons with
              CSS3 Gradient - Hongkiat Hongkiat UI Design: Glossy Buttons with
              CSS3 Gradient - Hongkiat Trending Resources tagged as glossy |
              Figma Community Figma Trending Resources tagged as glossy | Figma
              Community CSS Button Shine Hover Effect CodePen CSS Button Shine
              Hover Effect css-effects · GitHub Topics · GitHub GitH{" "}
            </Paragraph>
          </Information>
          <Social>
            <Image src={imageFacebook} alt="facebook" />
            <Image src={imageInstagram} alt="instagram" />
            <Image src={imageTelegram} alt="telegram" />
          </Social>
        </Banner>
      </Head>
      <Content>
        <ContentItem>
          <Title>Materials</Title>
          <EmptyState type="materials" />
        </ContentItem>
        <ContentItem>
          <Title>Links</Title>
          <EmptyState type="links" />
        </ContentItem>
        <ContentItem>
          <Title>Tests</Title>
          <EmptyState type="exams" />
        </ContentItem>
      </Content>
    </Wrapper>
  );
};

export default CourseDetails;
