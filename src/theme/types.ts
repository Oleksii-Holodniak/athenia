import { Interpolation } from "styled-components";

export interface ITheme {
  colors: {
    primary: {
      main: string;
      error: string;
      gold700: string;
      gold600: string;
      gold300: string;
      gold200: string;
      gold100: string;
      gold10: string;
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
