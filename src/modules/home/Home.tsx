import { mocksCourses } from "@/mocks/courses";
import {
  Awards,
  Categories,
  Introduction,
  News,
  Quote,
  TheBest,
} from "./components";
import { awards, categories, theBest } from "./data";
import { Container, Full, Wrapper } from "./styles";

const Home = () => {
  return (
    <>
      <Wrapper>
        {/* <Introduction /> */}
        <News courses={mocksCourses} />
      </Wrapper>
      <Full>
        <Quote />
      </Full>
      <Wrapper>
        <Categories categories={categories} />
        <TheBest items={theBest} />
      </Wrapper>
      <Container>
        <Awards awards={awards} />
      </Container>
    </>
  );
};

export default Home;
