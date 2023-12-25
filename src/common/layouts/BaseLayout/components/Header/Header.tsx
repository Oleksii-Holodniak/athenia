"use client";
import imageLogo from "@/assets/images/favicon.png";
import { IconPlus } from "@/common/components/icons";
import { LINK_TEMPLATES } from "@/common/constants/links";
import { useUserStore } from "@/common/store/user";
import { Button } from "@/ui-library/buttons";
import { useRouter } from "next/navigation";
import { navigation } from "./data";
import {
  Avatar,
  ButtonContainer,
  Container,
  CreateLink,
  Item,
  Logo,
  Navigations,
  Wrapper,
} from "./styles";

const Header = () => {
  const { push } = useRouter();
  const user = useUserStore((state) => state.user);

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
        {!user?.id ? (
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
        ) : (
          <ButtonContainer>
            <CreateLink href={LINK_TEMPLATES.CREATE()}>
              <IconPlus />
            </CreateLink>
            <Avatar href={LINK_TEMPLATES.PROFILE()}>
              {user.username.substring(0, 1)}
            </Avatar>
          </ButtonContainer>
        )}
      </Container>
    </Wrapper>
  );
};

export default Header;
