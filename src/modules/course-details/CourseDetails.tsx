"use client";
import imagePlug from "@/assets/images/empty.png";
import { getMediaType } from "@/common/helpers/media";
import Image from "next/image";
import { FC, useState } from "react";
import { GetCourse } from "./components";
import {
  Banner,
  Content,
  GetButton,
  Head,
  ImageCourse,
  Information,
  Paragraph,
  Social,
  Title,
  Wrapper,
} from "./styles";
import { ICoursesDetailsProps } from "./types";

const CourseDetails: FC<ICoursesDetailsProps> = (props) => {
  const { description, id, price, preview, title, media, owner, tags } =
    props.course;
  const [opened, setOpened] = useState(false);

  const renderMedia = () => {
    return media?.map((media, id) => (
      <a key={id} href={media.link}>
        <Image src={getMediaType(media.name)} alt="facebook" />
      </a>
    ));
  };

  // const renderTags = () => {
  //   return tags.map((tag, id) => <Tags key={id}>{tag}</Tags>);
  // };

  return (
    <Wrapper>
      <Head>
        <Banner>
          <ImageCourse
            src={preview || imagePlug}
            alt="course"
            width={400}
            height={800}
          />
          <Information>
            <Title>{title}</Title>
            <Paragraph>{description}</Paragraph>
            {/* <TagList>{renderTags()}</TagList> */}
            <GetButton
              variant="fill"
              theme="gold"
              onClick={() => setOpened(true)}
            >
              Get Course
            </GetButton>
          </Information>
          <GetCourse onClose={() => setOpened(false)} opened={opened} />
          <Social>{renderMedia()}</Social>
        </Banner>
      </Head>
      <Content>
        {/* <ContentItem>
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
        </ContentItem> */}
      </Content>
    </Wrapper>
  );
};

export default CourseDetails;
