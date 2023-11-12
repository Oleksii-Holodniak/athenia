import imageCheck from "@/assets/icons/checked.svg";
import Image from "next/image";
import { forwardRef } from "react";
import { CheckMark, Container, Input, Message, Wrapper } from "./styles";
import { ICheckbox } from "./types";

const Checkbox = forwardRef<HTMLInputElement, ICheckbox>((props, ref) => (
  <Wrapper>
    <Container>
      <Input
        ref={ref}
        {...props}
        type={"checkbox"}
        hidden
        readOnly
        aria-invalid={!!props.error}
      />
      <CheckMark className={"mark"}>
        <Image
          src={imageCheck}
          alt={"checked"}
          width={20}
          height={20}
          sizes={"20px"}
        />
      </CheckMark>
    </Container>
    {props.message &&
      (typeof props.message === "string" ? (
        <Message>{props.message}</Message>
      ) : (
        props.message
      ))}
  </Wrapper>
));

Checkbox.displayName = "Checkbox";
export default Checkbox;
