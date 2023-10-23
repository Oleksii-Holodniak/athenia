import { Introduction, News } from "./components";
import { mockCourse } from "./data";
import { Wrapper } from "./styles";
const Home = () => {
  return (
    <Wrapper>
      <Introduction />
      <News courses={mockCourse} />
    </Wrapper>
  );
};

export default Home;
