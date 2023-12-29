"use client";
import imagePlug from "@/assets/images/empty.png";
import {
  IconClockHour,
  IconCopyRight,
  IconUserManager,
} from "@/common/components/icons";
import { useDetailsStore } from "@/common/store/course-details";
import { useUserStore } from "@/common/store/user";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { BuyCourse, Forms, NotAllow } from "./components";
import {
  Banner,
  Content,
  Copy,
  Head,
  ImageCourse,
  Info,
  Information,
  Manager,
  Paragraph,
  SecurityCode,
  Social,
  TagList,
  Tags,
  Time,
  Title,
  Wrapper,
} from "./styles";

const CourseDetails = () => {
  const course = useDetailsStore((state) => state.course);
  const {
    description,
    preview,
    title,
    owners,
    tags,
    securityCode,
    students,
    time,
  } = course;

  const { enqueueSnackbar } = useSnackbar();
  const [opened, setOpened] = useState(false);
  const isAuthorized = useUserStore((state) => state.isAuthorized);
  const user = useUserStore((state) => state.user);
  const IS_OWNER = !!owners?.some((el) => el.id === user?.id);
  const IS_STUDENT = !!students?.some((el) => el.id === user?.id);

  const onCopyCode = async () => {
    if (securityCode) {
      try {
        await navigator.clipboard.writeText(securityCode);
        enqueueSnackbar({
          variant: "success",
          message: "Successfully copied code",
        });
      } catch (err) {
        enqueueSnackbar({ variant: "error", message: "Failed to copy" });
      }
    }
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
            <Info>
              <Time>
                <IconClockHour />
                {Number(time)}h
              </Time>
              <Manager href={`mailto:${course.owners?.[0].email}`}>
                <IconUserManager />
              </Manager>
            </Info>
            {IS_OWNER && (
              <SecurityCode>
                <span>{securityCode}</span>
                <Copy onClick={onCopyCode}>
                  Copy code <IconCopyRight />
                </Copy>
              </SecurityCode>
            )}
          </Social>
        </Banner>
      </Head>
      <Content>
        {isAuthorized && (IS_OWNER || IS_STUDENT) && (
          <Forms isStudent={IS_STUDENT} />
        )}
        {isAuthorized && !IS_OWNER && !IS_STUDENT && (
          <BuyCourse setOpened={setOpened} opened={opened} />
        )}
        {!isAuthorized && !IS_OWNER && <NotAllow />}
      </Content>
    </Wrapper>
  );
};

export default CourseDetails;
