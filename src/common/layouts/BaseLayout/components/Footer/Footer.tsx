"use client";
import imageLogo from "@/assets/images/logo.png";
import { Button } from "@/ui-library/buttons";
import {
  LittleMobileOff,
  MobileOff,
  MobileOn,
  TabletOff,
  TabletOn,
} from "@/utils/responsive/responsive";
import Image from "next/image";
import Wave from "react-wavify";
import { social } from "./data";
import {
  Address,
  Contact,
  Container,
  Flex,
  List,
  Logo,
  Wrapper,
} from "./styles";

const Footer = () => {
  const color = [
    {
      color: "#ffff00",
      amplitude: 20,
      speed: 0.3,
      points: 5,
    },
    { color: "#F8DE22", amplitude: 18, speed: 0.2, points: 3 },
    { color: "#ebb402", amplitude: 19, speed: 0.3, points: 4 },
  ];
  const renderSocial = () => {
    return social.map((Item, id) => (
      <li key={id}>
        <Item />
      </li>
    ));
  };

  return (
    <Wrapper>
      <TabletOn>
        <List>
          <li>Home</li>
          <li>Spaces</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </List>
      </TabletOn>
      <Container>
        <Flex>
          <Contact>
            <Logo>
              <Image src={imageLogo} alt='logo' />
              ATHENIA
            </Logo>
            <LittleMobileOff>
              <Button>Contact us</Button>
            </LittleMobileOff>
          </Contact>
          <MobileOn>
            <Address>
              <a href='tel:380921822123'>+380921822123</a>
              <a href='mailto:support@gmail.com'>support@gmail.com</a>
              <span>Los Angeles 232424 USA</span>
            </Address>
          </MobileOn>
          <TabletOff>
            <List>
              <li>Home</li>
              <li>Spaces</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </List>
          </TabletOff>
          <MobileOff>
            <List>{renderSocial()}</List>
            <Address>
              <a href='tel:380921822123'>+380921822123</a>
              <a href='mailto:support@gmail.com'>support@gmail.com</a>
              <span>Los Angeles 232424 USA</span>
            </Address>
          </MobileOff>
        </Flex>
        <MobileOn>
          <List>{renderSocial()}</List>
        </MobileOn>
      </Container>
      {color.map((item, i) => (
        <Wave
          key={i}
          className='wave'
          fill={item.color}
          paused={false}
          options={{
            height: 40,
            amplitude: item.amplitude,
            speed: item.speed,
            points: item.points,
          }}
        />
      ))}
    </Wrapper>
  );
};

export default Footer;
