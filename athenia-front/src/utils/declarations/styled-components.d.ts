import { config } from "@/theme/Theme";

type Theme = typeof config;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
