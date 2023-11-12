import imageLogo from "@/assets/images/logo.png";
import { FC } from "react";
import { Background, Container, Logo, Wrapper } from "./styles";
import { IAuthLayout } from "./types";

const AuthLayout: FC<IAuthLayout> = ({ children }) => (
  <Wrapper>
    <Background>
      <Container>
        <Logo src={imageLogo} alt="logo" />
        {children}
      </Container>
    </Background>
  </Wrapper>
);

export default AuthLayout;
