import {
  Awards,
  Categories,
  Introduction,
  News,
  Quote,
  Reviews,
  TheBest,
} from "./components";
import { awards, categories, comments, mockCourse, theBest } from "./data";
import { Container, Wrapper } from "./styles";

const Home = () => {
  return (
    <>
      <Wrapper>
        <Introduction />
        <News courses={mockCourse} />
        <TheBest items={theBest} />
        <Awards awards={awards} />
        <Categories categories={categories} />
      </Wrapper>
      <Container>
        <Quote />
        <Reviews reviews={comments} />
      </Container>
    </>
  );
};

export default Home;
