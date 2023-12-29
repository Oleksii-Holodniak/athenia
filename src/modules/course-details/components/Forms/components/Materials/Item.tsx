import { FilesList } from "@/common/components/uploaders";
import { IMaterial } from "@/common/types/models";
import { FC } from "react";
import { List } from "../../styles";
import Accordion from "../Accordion/Accordion";

const Item: FC<{ item: IMaterial }> = ({ item }) => {
  return (
    <Accordion title={item.title} time={item.time}>
      <List>
        <p>{item.description}</p>
        <FilesList files={item.files} readOnly />
      </List>
    </Accordion>
  );
};

export default Item;
