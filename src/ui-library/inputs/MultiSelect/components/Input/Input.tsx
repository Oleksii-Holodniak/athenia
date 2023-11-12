import imageCheck from "@/assets/icons/arrow-down.svg";
import Image from "next/image";
import { FC } from "react";
import {
  Close,
  Count,
  Indicator,
  IndicatorImage,
  Tag,
  Tags,
  Wrapper,
} from "./styles";
import { IInput } from "./types";

const Input: FC<IInput> = (props) => {
  const {
    options,
    setIsOpen,
    isOpen,
    numbers,
    placeholder,
    onClean,
    onRemove,
    error,
  } = props;

  const renderOptions = () => {
    return options.map((option) => (
      <Tag key={option.id} onClick={(e) => e.stopPropagation()}>
        {option.value}
        <Close type={"button"} onClick={() => onRemove(option.id)} />
      </Tag>
    ));
  };

  return (
    <Wrapper onClick={() => setIsOpen(!isOpen)} error={error}>
      {!!options.length ? (
        <Tags>{renderOptions()}</Tags>
      ) : (
        <span>{placeholder}</span>
      )}
      <Indicator>
        {!!numbers && (
          <Count
            onClick={(e) => {
              e.stopPropagation();
              onClean();
            }}
          >
            {numbers} <Close type={"button"} />
          </Count>
        )}
        <IndicatorImage isOpen={isOpen}>
          <Image src={imageCheck} alt={"indicator"} />
        </IndicatorImage>
      </Indicator>
    </Wrapper>
  );
};

export default Input;
