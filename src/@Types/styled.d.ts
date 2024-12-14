import "styled-components";
import { Theme } from "../Styles/theme.ts";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
