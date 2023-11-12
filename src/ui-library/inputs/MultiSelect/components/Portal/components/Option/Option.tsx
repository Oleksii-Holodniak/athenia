import { CheckBox } from "@/ui-library/checkboxs";
import { FC, useEffect, useState } from "react";
import { Row } from "./styles";
import { IRow } from "./types";

const Option: FC<IRow> = (props) => {
  const { item, onAdd, onRemove, tags } = props;
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(!!tags.find((option) => option.id === item.id));
  }, [tags.length]);

  const handlerCheck = () => {
    isActive ? onRemove(item.id) : onAdd(item);
    setIsActive(!isActive);
  };

  return (
    <Row onClick={handlerCheck}>
      <CheckBox onClick={(e) => e.stopPropagation()} checked={isActive} />
      <span>{item.value}</span>
    </Row>
  );
};

export default Option;
