"use client";
import imagePlug from "@/assets/images/empty.png";
import { IconCopyRight } from "@/common/components/icons";
import { getMediaType } from "@/common/helpers/media";
import { useUserStore } from "@/common/store/user";
import Image from "next/image";
import { useSnackbar } from "notistack";
import { FC, useState } from "react";
import { BuyCourse, Forms, NotAllow } from "./components";
import {
  Banner,
  Content,
  Copy,
  Head,
  ImageCourse,
  Information,
  Paragraph,
  SecurityCode,
  Social,
  TagList,
  Tags,
  Title,
  Wrapper,
} from "./styles";
import { ICoursesDetailsProps } from "./types";

const CourseDetails: FC<ICoursesDetailsProps> = (props) => {
  const { description, id, preview, title, media, owners, tags, securityCode } =
    props.course;
  const { enqueueSnackbar } = useSnackbar();
  const [opened, setOpened] = useState(false);
  const isAuthorized = useUserStore((state) => state.isAuthorized);
  const user = useUserStore((state) => state.user);
  const IS_OWNER = owners?.some((el) => el.id === user?.id);

  const onCopyCode = async () => {
    if (securityCode) {
      try {
        await navigator.clipboard.writeText(securityCode);
        enqueueSnackbar({
          variant: "success",
          message: "Successfully copied code",
        });
      } catch (err) {
        enqueueSnackbar({ variant: "success", message: "Failed to copy" });
      }
    }
  };

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
            unoptimized
            alt="course"
            width={400}
            height={800}
            onError={(e) => {
              e.currentTarget.src = imagePlug.src;
            }}
          />
          <Information>
            <Title>{title}</Title>
            <Paragraph>{description}</Paragraph>
            <TagList>{renderTags()}</TagList>
          </Information>
          <Social>
            {IS_OWNER && (
              <SecurityCode>
                <span>{securityCode}</span>
                <Copy onClick={onCopyCode}>
                  Copy code <IconCopyRight />
                </Copy>
              </SecurityCode>
            )}
            {renderMedia()}
          </Social>
        </Banner>
      </Head>
      <Content>
        {isAuthorized && IS_OWNER && <Forms />}
        {isAuthorized && !IS_OWNER && (
          <BuyCourse setOpened={setOpened} opened={opened} />
        )}
        {!isAuthorized && !IS_OWNER && <NotAllow />}
      </Content>
    </Wrapper>
  );
};

export default CourseDetails;
