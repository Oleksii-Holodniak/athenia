"use client";
import imagePlug from "@/assets/images/empty.png";
import { getMediaType } from "@/common/helpers/media";
import { useUserStore } from "@/common/store/user";
import Image from "next/image";
import { FC, useState } from "react";
import { BuyCourse, Forms, NotAllow } from "./components";
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
  const { description, id, preview, title, media, owners, tags } = props.course;
  const [opened, setOpened] = useState(false);
  const isAuthorized = useUserStore((state) => state.isAuthorized);
  const user = useUserStore((state) => state.user);
  const IS_OWNER = owners?.some((el) => el.id === user?.id);

  const renderMedia = () => {
    return media?.map((media, id) => (
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
          <ImageCourse
            src={preview || imagePlug}
            alt="course"
            width={400}
            height={800}
          />
          <Information>
            <Title>{title}</Title>
            <Paragraph>{description}</Paragraph>
            <TagList>{renderTags()}</TagList>
          </Information>
          <Social>{renderMedia()}</Social>
        </Banner>
      </Head>
      <Content>
        {!IS_OWNER && isAuthorized ? (
          <BuyCourse setOpened={setOpened} opened={opened} />
        ) : (
          <NotAllow />
        )}
        {IS_OWNER && <Forms />}
      </Content>
    </Wrapper>
  );
};

export default CourseDetails;
