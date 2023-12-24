import imageCheck from "@/assets/icons/arrow-down.svg";
import { TSelectOptionGenericType } from "@/common/types/general";
import Image from "next/image";
import {
  Close,
  Count,
  Indicator,
  IndicatorImage,
  Tag,
  Tags,
  Wrapper,
} from "./styles";
import { IInputProps } from "./types";

const Input = <T extends TSelectOptionGenericType>(props: IInputProps<T>) => {
  const {
    options,
    setIsOpen,
    isOpen,
    numbers,
    placeholder,
    onClean,
    onRemove,
    error,
    CustomTag,
  } = props;

  const renderTags = () => {
    return options.map((item) => {
      if (typeof CustomTag === "function") {
        return (
          <CustomTag
            item={item}
            onClick={() => onRemove(item.id)}
            key={item.id}
          />
        );
      }
      return (
        <Tag key={item.id} onClick={(e) => e.stopPropagation()}>
          {item.label}
          <Close type={"button"} onClick={() => onRemove(item.id)} />
        </Tag>
      );
    });
  };

  return (
    <Wrapper onClick={() => setIsOpen((prev) => !prev)} error={error}>
      {!!options.length ? (
        <Tags>{renderTags()}</Tags>
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
