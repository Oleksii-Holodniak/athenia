import imageLogo from "@/assets/images/logo.webp";
import { Button } from "@/ui-library/buttons";
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
          <Logo src={imageLogo} alt='logo' />
          {renderNavigations()}
        </Navigations>
        <ButtonContainer>
          <Button theme='gold' type='outline'>
            Sign in
          </Button>
          <Button theme='gold'>Sign up</Button>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};

export default Header;
