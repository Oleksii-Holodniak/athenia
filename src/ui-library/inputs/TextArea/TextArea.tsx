import { renderInputError } from "@/common/helpers/renderInputError";
import { forwardRef } from "react";
import { Component, Label, Message, Wrapper } from "./styles";
import { ITextArea } from "./types";

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>((props, ref) => {
  const { message, error, label, customHeight } = props;
  return (
    <Wrapper customHeight={customHeight}>
      {label && <Label>{label}</Label>}
      <Component {...props} ref={ref} />
      {error && <Message error={error}>{renderInputError(error)}</Message>}
      {!!message &&
        !error &&
        (typeof message === "string" ? (
          <Message error={error}>{message}</Message>
        ) : (
          message
        ))}
    </Wrapper>
  );
});

TextArea.displayName = "TextArea";

export default TextArea;
