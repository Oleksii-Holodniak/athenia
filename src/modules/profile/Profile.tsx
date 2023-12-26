"use client";
import avatar from "@/assets/images/user-logo.jpg";
import { BackgroundAnimation } from "@/common/components/animated-blocks";
import { CourseCard } from "@/common/components/cards";
import { IconLogout } from "@/common/components/icons";
import { NotFound } from "@/common/components/shared";
import { useUserStore } from "@/common/store/user";
import { UserService } from "@/services/general";
import { useMemo, useState } from "react";
import {
  Avatar,
  CardList,
  Container,
  InfoContainer,
  LogOut,
  Name,
  Tab,
  TabList,
  User,
  UserHead,
  Wrapper,
} from "./styles";
import { TActiveTab, TUserField } from "./types";

const tabs: Record<TActiveTab, TUserField> = {
  created: "ownerCourses",
  purchased: "studentCourses",
};

const Profile = () => {
  const user = useUserStore((state) => state.user);
  const [activeTab, setActiveTab] = useState<TActiveTab>("created");

  const courses = useMemo(
    () => user?.[tabs[activeTab]].filter((item) => !!item),
    [activeTab, user?.ownerCourses.length, user?.studentCourses.length]
  );

  const exitHandler = async () => {
    await UserService.logOut();
    window.location.reload();
  };

  const renderTabs = () =>
    Object.keys(tabs).map((tab, id) => (
      <Tab
        isActive={tab === activeTab}
        key={id}
        onClick={() => setActiveTab(tab as TActiveTab)}
      >
        {tab}
      </Tab>
    ));

  const renderCourses = () => {
    return courses?.map((course) => (
      <CourseCard course={course} key={course?.id} />
    ));
  };

  return (
    <Wrapper>
      <UserHead>
        <User>
          <Avatar src={avatar} alt="avatar" />
          <InfoContainer>
            <Name>{user?.username}</Name>
            <LogOut onClick={exitHandler}>
              <IconLogout />
            </LogOut>
          </InfoContainer>
        </User>
        <BackgroundAnimation />
      </UserHead>
      <Container>
        <TabList>{renderTabs()}</TabList>
        {courses?.length ? (
          <CardList> {renderCourses()}</CardList>
        ) : (
          <NotFound />
        )}
      </Container>
    </Wrapper>
  );
};

export default Profile;
