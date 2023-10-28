import { FC } from "react";
import { Card, Description, ImageAward, Title, Wrapper } from "./styles";
import { IAwards } from "./types";

const Awards: FC<IAwards> = (props) => {
  const { awards } = props;
  const renderAwards = () => {
    return awards.map((award) => (
      <Card key={award.id}>
        <Title>{award.title}</Title>
        <Description>{award.description}</Description>
        <ImageAward src={award.image} alt={award.title} />
      </Card>
    ));
  };
  return <Wrapper>{renderAwards()}</Wrapper>;
};

export default Awards;
