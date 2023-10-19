import { SubtitleStyled } from './SubtitleStyled'

const Subtitle = ( {subtitle}: Props ) => {
  return (
    <SubtitleStyled>{subtitle}</SubtitleStyled>
    )
}

type Props = {
    subtitle: string
} 

export default Subtitle