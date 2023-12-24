import { TSelectOptionGenericType } from "@/common/types/general";
import { CheckBox } from "@/ui-library/checkboxs";
import { useEffect, useState } from "react";
import { Row } from "./styles";
import { IOptionProps } from "./types";

const Option = <T extends TSelectOptionGenericType>(props: IOptionProps<T>) => {
  const { item, onAdd, onRemove, tags, CustomOption } = props;
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(!!tags.find((option) => option.id === item.id));
  }, [tags.length]);

  const handlerCheck = () => {
    isActive ? onRemove(item.id) : onAdd(item);
    setIsActive((prev) => !prev);
  };

  if (typeof CustomOption === "function") {
    return (
      <CustomOption isActive={isActive} item={item} onClick={handlerCheck} />
    );
  }

  return (
    <Row onClick={handlerCheck}>
      <CheckBox onClick={(e) => e.stopPropagation()} checked={isActive} />
      <span>{item.label}</span>
    </Row>
  );
};

export default Option;
