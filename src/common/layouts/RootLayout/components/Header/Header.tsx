"use client";
import imageLogo from "@/assets/images/favicon.png";
import { LINK_TEMPLATES } from "@/common/constants/links";
import { Button } from "@/ui-library/buttons";
import { useRouter } from "next/navigation";
import { navigation } from "./data";
import {
  ButtonContainer,
  Container,
  Item,
  Logo,
  Navigations,
  Wrapper,
} from "./styles";

const Header = () => {
  const { push } = useRouter();

  const renderNavigations = () => {
    return navigation.map((item) => (
      <Item key={item.id} href={item.path}>
        {item.name}
      </Item>
    ));
  };
  return (
    <Wrapper>
      <Container>
        <Navigations>
          <Logo src={imageLogo} alt="logo" />
          {renderNavigations()}
        </Navigations>
        <ButtonContainer>
          <Button
            theme="gold"
            variant="outline"
            onClick={() => push(LINK_TEMPLATES.LOGIN())}
          >
            Sign in
          </Button>
          <Button
            theme="gold"
            onClick={() => push(LINK_TEMPLATES.REGISTRATION())}
          >
            Sign up
          </Button>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};

export default Header;
