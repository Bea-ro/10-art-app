import { ContainerStyled } from "./ContainerStyled";

const Container = ({
  children,
  direction,
  justify,
  gap,
  color,
  background,
  isModalOpen,
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
};

export default Container;
