import { FC } from "react";
import { icon, messages } from "./data";
import { EmptyImage, Wrapper } from "./styles";
import { IEmptyStateProps } from "./types";

const EmptyState: FC<IEmptyStateProps> = (props) => {
  const { type } = props;
  return (
    <Wrapper>
      <EmptyImage src={icon[type]} alt="empty state" />
      {messages[type]}
    </Wrapper>
  );
};

export default EmptyState;
