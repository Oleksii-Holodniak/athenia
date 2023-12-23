"use client";
import { getMediaType } from "@/common/helpers/media";
import Image from "next/image";
import { FC } from "react";
import {
  Banner,
  Content,
  Head,
  ImageCourse,
  Information,
  Paragraph,
  Social,
  TagList,
  Tags,
  Title,
  Wrapper,
} from "./styles";
import { ICoursesDetailsProps } from "./types";

const CourseDetails: FC<ICoursesDetailsProps> = (props) => {
  const { info, media, owner, tags } = props.course;

  const renderMedia = () => {
    return media.map((media, id) => (
      <a key={id} href={media.link}>
        <Image src={getMediaType(media.name)} alt="facebook" />
      </a>
    ));
  };

  const renderTags = () => {
    return tags.map((tag, id) => <Tags key={id}>{tag}</Tags>);
  };

  return (
    <Wrapper>
      <Head>
        <Banner>
          <ImageCourse src={info.image} alt="course" width={400} height={800} />
          <Information>
            <Title>{info.name}</Title>
            <Paragraph>{info.description}</Paragraph>
            <TagList>{renderTags()}</TagList>
          </Information>
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
