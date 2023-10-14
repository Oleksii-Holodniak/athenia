import { FC } from "react";
import { Footer, Header } from "./components";
import { IBaseLayout } from "./interfaces";
import { Container } from "./styles";

const Base: FC<IBaseLayout> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Base;
