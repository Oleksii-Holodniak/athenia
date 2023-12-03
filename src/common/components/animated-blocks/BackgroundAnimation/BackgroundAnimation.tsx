import { Area, Circles } from "./styles";

const BackgroundAnimation = () => {
  const renderElements = () => [...Array(12)].map((x, i) => <li key={i} />);

  return (
    <Area>
      <Circles>{renderElements()}</Circles>
    </Area>
  );
};

export default BackgroundAnimation;
