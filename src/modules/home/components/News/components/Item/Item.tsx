import { FC } from "react";
import { CardImage, Description, Info, Title, Wrapper } from "./styles";
import { IItem } from "./types";

const Item: FC<IItem> = (props) => {
  const { info } = props.item;
  return (
    <Wrapper>
      <CardImage src={info.image} alt="card image" width={600} height={700} />
      <Info>
        <Title>{info.name}</Title>
        <Description>{info.description}</Description>
      </Info>
    </Wrapper>
  );
};

export default Item;
