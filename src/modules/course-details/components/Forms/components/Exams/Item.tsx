import { IconLinkExternal } from "@/common/components/icons";
import { IExam } from "@/common/types/models";
import { FC } from "react";
import { ExamLink, List } from "../../styles";
import Accordion from "../Accordion/Accordion";

const Item: FC<{ item: IExam }> = ({ item }) => {
  return (
    <Accordion title={item.title} time={item.time}>
      <List>
        <p>{item.description}</p>
        <ExamLink target="_blank" href={item.link}>
          Link <IconLinkExternal />
        </ExamLink>
      </List>
    </Accordion>
  );
};

export default Item;
