import { ContainerStyled } from "./ContainerStyled";

const Container = ({
  children,
  direction,
  justify,
  gap,
  color,
  background,
  isModalOpen,
  height
}: Props) => {
  return (
    <>
      <ContainerStyled
        direction={direction}
        justify={justify}
        gap={gap}
        color={color}
        background={background}
        isModalOpen={isModalOpen}
        height={height}
      >
        {children}
      </ContainerStyled>
    </>
  );
};

export type Props = {
  children: React.ReactNode;
  direction?: string;
  justify?: string;
  gap?: string;
  color?: string;
  background?: string;
  isModalOpen?: boolean;
  height?: string
};

export default Container;
