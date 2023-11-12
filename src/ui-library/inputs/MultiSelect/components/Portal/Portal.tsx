import imageSearch from "@/assets/icons/search.svg";
import { IOption } from "@/common/types/general";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { Option } from "./components";
import { List, NotFound, Search, SearchWrapper, Wrapper } from "./styles";
import { IPortal } from "./types";

const Portal: FC<IPortal> = (props) => {
  const { options, isOpen, onAdd, onRemove, tags } = props;
  const [filteredOptions, setFilteredOptions] = useState<IOption[]>(options);
  const refInput = useRef<HTMLInputElement>(null);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      const result = options.filter((option) =>
        option.value.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
      );
      setFilteredOptions(result);
    } else {
      setFilteredOptions(options);
    }
  };

  useEffect(() => {
    if (isOpen && refInput?.current) {
      refInput.current.focus();
    }
  }, [isOpen, refInput.current]);

  const renderOptions = () => {
    return filteredOptions.map((option) => (
      <Option
        key={option.id}
        item={option}
        onAdd={onAdd}
        onRemove={onRemove}
        tags={tags}
      />
    ));
  };

  return (
    <Wrapper isOpen={isOpen}>
      <SearchWrapper>
        <Search
          placeholder={"Search"}
          onChange={handlerChange}
          ref={refInput}
        />
        <Image src={imageSearch} alt={"search"} />
      </SearchWrapper>
      <List>
        {!!filteredOptions.length ? (
          renderOptions()
        ) : (
          <NotFound>No data found</NotFound>
        )}
      </List>
    </Wrapper>
  );
};

export default Portal;
