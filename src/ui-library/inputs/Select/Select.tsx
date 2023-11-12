import imageCheck from "@/assets/icons/arrow-down.svg";
import { renderInputError } from "@/common/helpers/renderInputError";
import { useOnClickOutside } from "@/common/hooks";
import { IOption } from "@/common/types/general";
import Image from "next/image";
import {
  ChangeEvent,
  FC,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  Container,
  IndicatorImage,
  Input,
  Label,
  List,
  Message,
  NotFound,
  Row,
  Wrapper,
} from "./styles";
import { ISelect } from "./types";

const Select: FC<ISelect> = (props) => {
  const { label, options, error, onChange, registerOptions, ...rest } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState<HTMLInputElement | undefined>();
  const [filteredOptions, setFilteredOptions] = useState<IOption[]>(options);
  const refWrapper = useRef<HTMLDivElement>(null);
  const selectHintId = useId();

  useLayoutEffect(() => {
    const select = document.getElementById(selectHintId) as HTMLInputElement;
    if (select) {
      setSelect(select);
    }
  }, []);

  useOnClickOutside(refWrapper, () => setIsOpen(false));

  const handlerFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setIsOpen(true);
      const result = options?.filter((option) =>
        option.value
          .toLocaleLowerCase()
          .startsWith(event.target.value.toLocaleLowerCase())
      );
      setFilteredOptions(result);
    } else {
      setIsOpen(false);
      setFilteredOptions(options);
    }
  };

  const handlerChooseOption = (option: string) => {
    if (select) {
      select.value = option;
      const value = {
        target: select,
        type: "change",
      } as ChangeEvent<HTMLInputElement>;
      onChange?.(value);
      registerOptions?.onChange(value);
      setIsOpen(false);
    }
  };

  const renderOptions = () => {
    return filteredOptions?.map((option) => (
      <Row key={option.id} onClick={() => handlerChooseOption(option.value)}>
        {option.value}
      </Row>
    ));
  };

  return (
    <Wrapper ref={refWrapper}>
      {label && <Label>{label}</Label>}
      <Container>
        <Input
          {...rest}
          {...registerOptions}
          error={!!error}
          id={selectHintId}
          aria-invalid={!!error}
          onChange={(e) => {
            handlerFilter(e);
            onChange?.(e);
            registerOptions?.onChange(e);
          }}
        />
        <IndicatorImage isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <Image src={imageCheck} alt={"indicator"} />
        </IndicatorImage>
      </Container>
      <List isOpen={isOpen}>
        {!!filteredOptions.length ? (
          renderOptions()
        ) : (
          <NotFound>No data found</NotFound>
        )}
      </List>
      {error && <Message>{renderInputError(error)}</Message>}
    </Wrapper>
  );
};
export default Select;
