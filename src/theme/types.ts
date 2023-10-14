import { Interpolation } from "styled-components";

export interface ITheme {
  text: {
    overflow: Interpolation<{}>;
    getLineClamp: (lines: number) => Interpolation<{}>;
  };
  leveling: {
    flex: {
      center: Interpolation<{}>;
      row: Interpolation<{}>;
      column: Interpolation<{}>;
      between: Interpolation<{}>;
    };
    absoluteCenter: Interpolation<{}>;
  };
  content: {
    sizing: Interpolation<{}>;
    hiddenScrollVertical: Interpolation<{}>;
    hiddenScrollHorizontal: Interpolation<{}>;
    image: Interpolation<{}>;
  };
}
