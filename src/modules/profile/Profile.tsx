"use client";
import avatar from "@/assets/images/user-logo.jpg";
import { BackgroundAnimation } from "@/common/components/animated-blocks";
import { CourseCard } from "@/common/components/cards";
import { IconLogout } from "@/common/components/icons";
import { useUserStore } from "@/common/store/user";
import { mocksCourses } from "@/mocks/courses";
import { UserService } from "@/services/general";
import { useState } from "react";
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
import { TActiveTab } from "./types";
const tabs = ["purchased", "created"];

const Profile = () => {
  const user = useUserStore((state) => state.user);

  const [activeTab, setActiveTab] = useState<TActiveTab>("purchased");

  const exitHandler = async () => {
    await UserService.logOut();
    window.location.reload();
  };

  const renderTabs = () =>
    tabs.map((tab, id) => (
      <Tab
        isActive={tab === activeTab}
        key={id}
        onClick={() => setActiveTab(tab as TActiveTab)}
      >
        {tab}
      </Tab>
    ));
  const renderCourses = () => {
    return mocksCourses.map((course) => (
      <CourseCard course={course} key={course.id} />
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
        <CardList>{renderCourses()}</CardList>
      </Container>
    </Wrapper>
  );
};

export default Profile;
