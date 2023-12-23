import { FC, PropsWithChildren } from "react";
import { Footer, Header } from "./components";
import { Container } from "./styles";

const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
);

export default BaseLayout;
