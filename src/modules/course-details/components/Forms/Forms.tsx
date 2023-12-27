import { IconPlus } from "@/common/components/icons";
import { useDetailsStore } from "@/common/store/course-details";
import { FC } from "react";
import { Exams, Materials } from "./components";
import { AddItem, Tab, TabList, Wrapper } from "./styles";

const COURSE_TAB = {
  MATERIALS: "materials",
  EXAMS: "exams",
} as const;

export const TABS: Record<string, FC> = {
  [COURSE_TAB.MATERIALS]: Materials,
  [COURSE_TAB.EXAMS]: Exams,
};

const Forms: FC<{ isStudent: boolean }> = ({ isStudent }) => {
  const activeTab = useDetailsStore((state) => state.tab);
  const onChangeTab = useDetailsStore((state) => state.onChangeTab);
  const setIsAdditing = useDetailsStore((state) => state.setIsAdditing);

  const CurrentTab = TABS[activeTab.toString()];

  const renderTabs = () =>
    Object.values(COURSE_TAB).map((tab, id) => (
      <Tab
        isActive={tab === activeTab}
        key={id}
        onClick={() => onChangeTab(tab)}
      >
        {tab}
      </Tab>
    ));

  return (
    <Wrapper>
      <TabList>
        {renderTabs()}
        {!isStudent && (
          <AddItem onClick={() => setIsAdditing(true, activeTab)}>
            <IconPlus />
          </AddItem>
        )}
      </TabList>
      <CurrentTab />
    </Wrapper>
  );
};

export default Forms;
