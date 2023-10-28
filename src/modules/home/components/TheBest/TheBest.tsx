"use client";

import imageStudy from "@/assets/images/greece-study.png";
import { FC, useState } from "react";
import { AccordionItem } from "./components";
import { Accordion, Flex, ImageStudy, Title, Wrapper } from "./styles";
import { ITheBest } from "./types";

const TheBest: FC<ITheBest> = (props) => {
  const { items } = props;
  const [open, setOpen] = useState<boolean | number>(false);

  const renderItems = () => {
    return items.map((item) => (
      <AccordionItem info={item} open={open} setOpen={setOpen} key={item.id} />
    ));
  };

  return (
    <Wrapper>
      <Title>The best education for all</Title>
      <Flex>
        <ImageStudy src={imageStudy} alt='study' />
        <Accordion>{renderItems()}</Accordion>
      </Flex>
    </Wrapper>
  );
};

export default TheBest;
