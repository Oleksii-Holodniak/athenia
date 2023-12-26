"use client";
import { Pagination } from "@/common/components";
import { CourseCard } from "@/common/components/cards";
import { NotFound } from "@/common/components/shared";
import { useDebounce } from "@/common/hooks";
import { useCoursesStore } from "@/common/store/courses";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CourseService } from "./api";
import { Banner, Filter } from "./components";
import { List, Wrapper } from "./styles";

const Courses = () => {
  const { push } = useRouter();
  const courses = useCoursesStore((state) => state.courses);
  const total = useCoursesStore((state) => state.total);
  const filter = useCoursesStore((state) => state.filter);
  const filteredCourses = useCoursesStore((state) => state.filteredCourses);
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

  const searchCourses = async () => {
    const data = await CourseService.searchCourses(debounce);
    filteredCourses(data.result, data.total);
    redirectQuery();
  };

  useEffect(() => {
    searchCourses();
  }, [debounce.limit, debounce.page, debounce.query, debounce.tags?.length]);

  return (
    <Wrapper>
      <Banner />
      <Filter />
      {!courses?.length ? <NotFound /> : <List>{renderCourses()}</List>}
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
