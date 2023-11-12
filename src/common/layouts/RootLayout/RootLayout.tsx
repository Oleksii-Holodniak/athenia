import { FC } from "react";
import { Footer, Header } from "./components";
import { IBaseLayout } from "./interfaces";
import { Container } from "./styles";

const Layout: FC<IBaseLayout> = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
);

export default Layout;
