import { FC } from "react";
import { Details, Line, Summary, Text, Wrapper } from "./styles";
import { IAccordionItem } from "./types";

const AccordionItem: FC<IAccordionItem> = (props) => {
  const { info, open, setOpen } = props;
  const IsOpen = open === info.id;
  return (
    <Details
      onClick={() => {
        if (IsOpen) {
          setOpen(false);
        } else {
          setOpen(info.id);
        }
      }}
    >
      <Summary open={IsOpen}>
        <span>{info.title}</span>
        <Line />
      </Summary>
      <Wrapper open={IsOpen}>
        <Text open={IsOpen} onClick={(e: any) => e.stopPropagation()}>
          {info.description}
        </Text>
      </Wrapper>
    </Details>
  );
};

export default AccordionItem;
