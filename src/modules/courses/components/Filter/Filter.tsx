import { IconSearch } from "@/common/components/icons";
import { filterOptions } from "@/common/constants/general";
import { useCoursesStore } from "@/common/store/courses";
import { Input, MultiSelect } from "@/ui-library/inputs";
import { Wrapper } from "./styles";

const Filter = () => {
  const query = useCoursesStore((state) => state.filter.query);
  const tags = useCoursesStore((state) => state.filter.tags);
  const onChangeFilterFieldHandler = useCoursesStore(
    (state) => state.onChangeFilterFieldHandler
  );

  return (
    <Wrapper>
      <Input
        placeholder="Search courses"
        startIcon={<IconSearch />}
        value={query}
        onChange={(e) => onChangeFilterFieldHandler(e.target.value, "query")}
      />
      <MultiSelect
        options={filterOptions}
        placeholder="Choose categories"
        selected={tags}
        onChange={(value) => onChangeFilterFieldHandler(value, "tags")}
      />
    </Wrapper>
  );
};

export default Filter;
