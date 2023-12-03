import { Input } from "@/ui-library/inputs";
import { FiltersBlock, List, Wrapper } from "./styles";

const Courses = () => {
  return (
    <Wrapper>
      <FiltersBlock>
        <Input />
      </FiltersBlock>
      <List></List>
    </Wrapper>
  );
};

export default Courses;
