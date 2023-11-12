import { FC, useEffect, useRef, useState } from "react";

import { renderInputError } from "@/common/helpers/renderInputError";
import { useOnClickOutside } from "@/common/hooks";
import { IOption } from "@/common/types/general";
import { Input, Portal } from "./components";
import { Label, Message, Wrapper } from "./styles";
import { IMultiSelect } from "./types";

const MultiSelect: FC<IMultiSelect> = (props) => {
  const {
    label,
    options,
    onChange,
    isClear,
    error,
    placeholder,
    registerOptions,
  } = props;

  const [selectedTags, setSelectedTags] = useState<IOption[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const refWrapper = useRef<HTMLDivElement>(null);

  useOnClickOutside(refWrapper, () => setIsOpen(false));

  const handlerAdd = (item: IOption) => {
    if (!selectedTags.includes(item)) {
      setSelectedTags((prev) => [...prev, item]);
    }
  };

  const handlerRemove = (id: number) => {
    const index = selectedTags.findIndex((option) => option.id === id);
    if (index !== -1) {
      const newOptions = [...selectedTags];
      newOptions.splice(index, 1);
      setSelectedTags(newOptions);
    }
  };

  const handlerClearAll = () => {
    setSelectedTags([]);
  };

  useEffect(() => {
    if (typeof onChange === "function") {
      const values: string[] = selectedTags.map((item) => item.value);
      onChange(values);
    }
  }, [selectedTags]);

  useEffect(() => {
    if (isClear) handlerClearAll();
  }, [isClear]);

  return (
    <Wrapper ref={refWrapper}>
      {label && <Label>{label}</Label>}
      <input {...registerOptions} hidden />
      <Input
        options={selectedTags}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        numbers={selectedTags.length || 0}
        onClean={handlerClearAll}
        onRemove={handlerRemove}
        placeholder={placeholder}
        error={error}
      />
      <Portal
        options={options}
        tags={selectedTags}
        isOpen={isOpen}
        onAdd={handlerAdd}
        onRemove={handlerRemove}
      />
      {error && <Message>{renderInputError(error)}</Message>}
    </Wrapper>
  );
};

export default MultiSelect;
