import { FC } from "react";
import { Background, Card, Title, Wrapper } from "./styles";
import { ICategories } from "./types";

const Categories: FC<ICategories> = (props) => {
  const { categories } = props;
  const renderCategories = () => {
    return categories.map((category) => (
      <Card key={category.id}>
        <Title>{category.name}</Title>
        <Background alt={category.name} src={category.image} fill />
      </Card>
    ));
  };

  return <Wrapper>{renderCategories()}</Wrapper>;
};

export default Categories;
