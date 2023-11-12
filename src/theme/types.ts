import { Interpolation } from "styled-components";

export interface ITheme {
  colors: {
    primary: {
      // main
      main0: string;
      main10: string;
      main25: string;
      main50: string;
      main100: string;
      main200: string;
      main300: string;
      main400: string;
      main500: string;
      main600: string;
      main700: string;
      main800: string;
      main900: string;
      // gray
      gray25: string;
      gray50: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
      // blue gray
      blueGray25: string;
      blueGray50: string;
      blueGray100: string;
      blueGray200: string;
      blueGray300: string;
      blueGray400: string;
      blueGray500: string;
      blueGray600: string;
      blueGray700: string;
      blueGray800: string;
      blueGray900: string;
      // error
      error25: string;
      error50: string;
      error100: string;
      error200: string;
      error300: string;
      error400: string;
      error500: string;
      error600: string;
      error700: string;
      error800: string;
      error900: string;
    };
  };
  text: {
    overflow: Interpolation<{}>;
    getLineClamp: (lines: number) => Interpolation<{}>;
  };
  flex: {
    center: Interpolation<{}>;
    row: Interpolation<{}>;
    column: Interpolation<{}>;
    between: Interpolation<{}>;
  };
  absoluteCenter: Interpolation<{}>;

  content: {
    sizing: Interpolation<{}>;
    hiddenScrollVertical: Interpolation<{}>;
    hiddenScrollHorizontal: Interpolation<{}>;
    image: Interpolation<{}>;
  };
}
