import { SubtitleStyled } from "./SubtitleStyled";

const Subtitle = ({ subtitle, align }: Props) => {
  return <SubtitleStyled align={align}>{subtitle}</SubtitleStyled>;
};

type Props = {
  subtitle: string;
  align?: string;
};

export default Subtitle;
