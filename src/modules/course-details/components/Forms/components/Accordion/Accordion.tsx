import { IconClockHour } from "@/common/components/icons";
import { FC, useState } from "react";
import { Content, Details, Line, Row, Summary, Time, Title } from "./styles";
import { IAccordionProps } from "./types";

const Accordion: FC<IAccordionProps> = (props) => {
  const { title, children, time } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Details
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
    >
      <Summary isOpen={isOpen}>
        <Time>
          <IconClockHour />
          {Number(time)}h
        </Time>
        <Title>{title}</Title>
        <Line />
      </Summary>
      <Row isOpen={isOpen}>
        <Content isOpen={isOpen} onClick={(e: any) => e.stopPropagation()}>
          {children}
        </Content>
      </Row>
    </Details>
  );
};
export default Accordion;
