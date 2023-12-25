import imagePlug from "@/assets/images/empty.png";
import { FC } from "react";
import { CardImage, Description, Info, Title, Wrapper } from "./styles";
import { IItem } from "./types";

const Item: FC<IItem> = (props) => {
  const { description, title, preview } = props.item;
  return (
    <Wrapper>
      <CardImage
        src={preview || imagePlug}
        alt="card image"
        width={600}
        height={700}
      />
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Wrapper>
  );
};

export default Item;
