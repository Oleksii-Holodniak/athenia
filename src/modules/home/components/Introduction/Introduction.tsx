import { Button } from "@/ui-library/buttons";
import { numbers } from "./data";
import {
  AthinaImage,
  Container,
  Content,
  ImageContainer,
  NumberItem,
  Numbers,
  Paragraph,
  Title,
} from "./styles";

import imageAthina from "@/assets/images/athina.webp";

const Introduction = () => {
  const renderNumbers = () => {
    return numbers.map((number) => (
      <NumberItem key={number.id}>
        <strong>{number.count}</strong>
        <span>{number.name}</span>
      </NumberItem>
    ));
  };

  return (
    <div>
      <Container>
        <Content>
          <Title>Discover your potential</Title>
          <Paragraph>
            Discover a world of knowledge through our online course viewing
            platform. With access to hundreds of educational programs, you can
            learn at your own pace and convenience, wherever you are. Choose
            from a wide range of topics that pique your interest and tailor your
            learning experience. Our platform empowers you to expand your
            horizons, allowing you to acquire new skills and knowledge.
          </Paragraph>
          <Button theme='gold'>Get Started</Button>
        </Content>
        <ImageContainer>
          <AthinaImage src={imageAthina} alt='athina' />
        </ImageContainer>
      </Container>
      <Numbers>{renderNumbers()}</Numbers>
    </div>
  );
};

export default Introduction;
