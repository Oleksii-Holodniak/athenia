"use client";
import imageEyeOff from "@/assets/icons/eye-off.svg";
import imageEye from "@/assets/icons/eye.svg";
import { renderInputError } from "@/common/helpers/renderInputError";
import Image from "next/image";
import { forwardRef, useState } from "react";
import { Component, Container, Icon, Label, Message, Wrapper } from "./styles";
import { IInput } from "./types";

const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const {
    message,
    error,
    type = "text",
    label,
    endIcon,
    startIcon,
    ...rest
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Container>
        {!!startIcon && (
          <Icon type={"button"} className="end-icon" position="left">
            {startIcon}
          </Icon>
        )}
        <Component
          {...rest}
          error={error}
          startIcon={startIcon}
          ref={ref}
          type={isOpen ? "text" : type}
          aria-invalid={!!error}
        />
        {type === "password" && (
          <Icon
            onClick={() => setIsOpen(!isOpen)}
            type={"button"}
            className="end-icon"
            position="right"
          >
            {isOpen ? (
              <Image src={imageEye} alt={"image eye"} />
            ) : (
              <Image src={imageEyeOff} alt={"image eye"} />
            )}
          </Icon>
        )}
        {!!endIcon && (
          <Icon type={"button"} className="end-icon" position="right">
            <Image src={endIcon} alt={"image eye"} />
          </Icon>
        )}
      </Container>
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

Input.displayName = "Input";

export default Input;
