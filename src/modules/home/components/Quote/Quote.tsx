import imageArch from "@/assets/images/decoration/arch.png";
import imageWarrior from "@/assets/images/decoration/warrior.webp";
import { Arch, Text, Warrior, Wrapper } from "./styles";

const Quote = () => {
  return (
    <Wrapper>
      <Warrior src={imageWarrior} alt='warrior' />
      <Text>
        <Arch src={imageArch} alt='arch' />
        The acquired knowledge of everyone should be shared with everyone
      </Text>
      <Warrior src={imageWarrior} alt='warrior' />
    </Wrapper>
  );
};

export default Quote;
