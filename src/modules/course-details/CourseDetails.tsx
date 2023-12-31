"use client";
import imagePlug from "@/assets/images/empty.png";
import {
  IconClockHour,
  IconCopyRight,
  IconTrash,
  IconUserManager,
} from "@/common/components/icons";
import { LINK_TEMPLATES } from "@/common/constants/links";
import { useDetailsStore } from "@/common/store/course-details";
import { useUserStore } from "@/common/store/user";
import clipboardCopy from "clipboard-copy";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { CourseService } from "./api";
import { BuyCourse, Forms, NotAllow, VideoViewer } from "./components";
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
  PreviewCourse,
  SecurityCode,
  Social,
  TagList,
  Tags,
  Time,
  Title,
  Trash,
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
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [opened, setOpened] = useState(false);
  const isAuthorized = useUserStore((state) => state.isAuthorized);
  const user = useUserStore((state) => state.user);
  const IS_OWNER = !!owners?.some((el) => el.id === user?.id);
  const IS_STUDENT = !!students?.some((el) => el.id === user?.id);

  const onCopyCode = async () => {
    if (securityCode) {
      try {
        clipboardCopy(securityCode);
        enqueueSnackbar({
          variant: "success",
          message: "Successfully copied code",
        });
      } catch (err) {
        console.log("err :", err);
        enqueueSnackbar({ variant: "error", message: "Failed to copy" });
      }
    }
  };

  const onDeleteCourse = async () => {
    let isSure = confirm("Are you sure you want to delete the course?");
    if (!isSure) {
      return null;
    }
    try {
      const res = await CourseService.deleteCourse(course.id);
      if (res.status === 200) {
        enqueueSnackbar({
          variant: "success",
          message: "Successfully deleted",
        });
        await push(LINK_TEMPLATES.COURSES());
      }
    } catch (err) {
      enqueueSnackbar({ variant: "error", message: "Failed to delete" });
    }
  };
  const renderTags = () => {
    return tags.map((tag, id) => <Tags key={id}>{tag}</Tags>);
  };

  return (
    <Wrapper>
      <Head>
        <VideoViewer />
        <Banner>
          <PreviewCourse>
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
            <Time>
              <IconClockHour />
              {Number(time)}h
            </Time>
          </PreviewCourse>
          <Information>
            <Title>{title}</Title>
            <Paragraph>{description}</Paragraph>
            <TagList>{renderTags()}</TagList>
            <Info>
              {IS_OWNER ? (
                <Trash variant="outline" onClick={onDeleteCourse}>
                  <IconTrash />
                  &nbsp;Delete
                </Trash>
              ) : (
                <Manager href={`mailto:${course.owners?.[0].email}`}>
                  <IconUserManager />
                </Manager>
              )}
            </Info>
          </Information>
          <Social>
            <Info />
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
