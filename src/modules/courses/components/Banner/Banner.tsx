import ImageColumn from "@/assets/images/column.png";
import { Button } from "@/ui-library/buttons";
import {
  ColumnImage,
  Columns,
  Content,
  Description,
  GetButton,
  Title,
  Wrapper,
} from "./styles";
const Banner = () => {
  return (
    <Wrapper>
      <Columns>
        <ColumnImage src={ImageColumn} alt="banner" />
      </Columns>
      <Content>
        <Title>Unleash your potential with our educational platform</Title>
        <Description>
          Choose from hundreds of courses in various fields, gain new knowledge
          and develop with us. Convenient search, effective materials, best
          teachers. Start your educational journey today!
        </Description>
        <GetButton>Get Started</GetButton>
      </Content>
      <Columns>
        <ColumnImage src={ImageColumn} alt="banner" />
      </Columns>
    </Wrapper>
  );
};

export default Banner;
