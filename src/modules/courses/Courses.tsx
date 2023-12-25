"use client";
import { Pagination } from "@/common/components";
import { CourseCard } from "@/common/components/cards";
import { useDebounce } from "@/common/hooks";
import { useCoursesStore } from "@/common/store/courses";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Banner, Filter } from "./components";
import { List, Wrapper } from "./styles";

const Courses = () => {
  const { push } = useRouter();
  const courses = useCoursesStore((state) => state.courses);
  const total = useCoursesStore((state) => state.total);
  const filter = useCoursesStore((state) => state.filter);
  const onChangeFilterFieldHandler = useCoursesStore(
    (state) => state.onChangeFilterFieldHandler
  );
  const debounce = useDebounce(filter);

  const renderCourses = () => {
    return courses?.map((course) => (
      <CourseCard course={course} key={course.id} />
    ));
  };

  const redirectQuery = async () => {
    await push(
      `?page=${debounce.page}&query=${debounce.query}&tags=${debounce.tags.join(
        ","
      )}`
    );
  };

  useEffect(() => {
    // TODO: query
    redirectQuery();
  }, [debounce.limit, debounce.page, debounce.query, debounce.tags?.length]);

  return (
    <Wrapper>
      <Banner />
      <Filter />
      <List>{renderCourses()}</List>
      <Pagination
        currentPage={filter.page}
        onPageChange={(page) => {
          onChangeFilterFieldHandler(page, "page");
        }}
        pageSize={filter.limit}
        totalCount={total}
      />
    </Wrapper>
  );
};

export default Courses;
