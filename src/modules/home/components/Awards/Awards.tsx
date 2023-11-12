import imageBgCard from "@/assets/images/decoration/card.webp";
import { FC } from "react";
import {
  Background,
  Card,
  Content,
  Description,
  ImageAward,
  Title,
  Wrapper,
} from "./styles";
import { IAwards } from "./types";

const Awards: FC<IAwards> = (props) => {
  const { awards } = props;
  const renderAwards = () => {
    return awards.map((award) => (
      <Card key={award.id}>
        <Content>
          <Title>{award.title}</Title>
          <Description>{award.description}</Description>
          <ImageAward src={award.image} alt={award.title} />
        </Content>
        <Background src={imageBgCard} alt='bg' quality={100} />
      </Card>
    ));
  };
  return <Wrapper>{renderAwards()}</Wrapper>;
};

export default Awards;
