"use client";
import Wave from "react-wavify";
import { Wrapper } from "./styles";
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
  return (
    <Wrapper>
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
