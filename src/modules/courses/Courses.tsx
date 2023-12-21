"use client";
import { CourseCard } from "@/common/components/cards";
import { Input, MultiSelect } from "@/ui-library/inputs";
import { FC } from "react";
import { FiltersBlock, List, Wrapper } from "./styles";
import { ICoursesPage } from "./types";

const Courses: FC<ICoursesPage> = (props) => {
  const { courses } = props;

  const renderCourses = () => {
    return courses?.map((course) => (
      <CourseCard course={course} key={course.id} />
    ));
  };

  return (
    <Wrapper>
      <FiltersBlock>
        <Input />
        <MultiSelect options={[]} placeholder="Choose categories" />
      </FiltersBlock>
      <List>{renderCourses()}</List>
    </Wrapper>
  );
};

export default Courses;
