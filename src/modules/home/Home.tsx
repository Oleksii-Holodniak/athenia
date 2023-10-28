import { Awards, Categories, Introduction, News, TheBest } from "./components";
import { awards, categories, mockCourse, theBest } from "./data";
import { Wrapper } from "./styles";

const Home = () => {
  return (
    <Wrapper>
      <Introduction />
      <News courses={mockCourse} />
      <TheBest items={theBest} />
      <Categories categories={categories} />
      <Awards awards={awards} />
    </Wrapper>
  );
};

export default Home;
