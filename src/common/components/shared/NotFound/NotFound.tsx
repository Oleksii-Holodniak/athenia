import imageHermes from "@/assets/images/hermes.png";
import { HermesImage, Wrapper } from "./styles";

const NotFound = () => {
  return (
    <Wrapper>
      <HermesImage src={imageHermes} alt="hermes" />
      <p>
        Unfortunately, Hermes couldn{"'"}t retrieve information about the
        courses for you.
      </p>
    </Wrapper>
  );
};

export default NotFound;
