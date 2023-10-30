import { FC } from "react";
import { IButton } from "./interfaces";
import { Button } from "./styles";

const GoldButton: FC<IButton> = (props) => {
  const {
    isRounded = true,
    theme = "default",
    type = "fill",
    children,
    onClick,
  } = props;
  return (
    <Button isRounded={isRounded} type={type} theme={theme} onClick={onClick}>
      {children}
    </Button>
  );
};

export default GoldButton;
