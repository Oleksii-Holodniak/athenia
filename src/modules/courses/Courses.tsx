"use client";
import { CourseCard } from "@/common/components/cards";
import { Input, MultiSelect } from "@/ui-library/inputs";
import { FiltersBlock, List, Wrapper } from "./styles";

const Courses = () => {
  return (
    <Wrapper>
      <FiltersBlock>
        <Input />
        <MultiSelect options={[]} placeholder="Choose categories" />
      </FiltersBlock>
      <List>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </List>
    </Wrapper>
  );
};

export default Courses;
