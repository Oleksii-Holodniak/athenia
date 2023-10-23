import { FC } from "react";
import { CardImage, Description, Info, Title, Wrapper } from "./styles";
import { IItem } from "./types";

const Item: FC<IItem> = (props) => {
  const { info } = props.item;
  return (
    <Wrapper>
      <CardImage src={info.image} alt='card image' />
      <Info>
        <Title>{info.name}</Title>
        <Description>{info.description}</Description>
      </Info>
    </Wrapper>
  );
};

export default Item;
