import { MessageStyled } from "./MessageStyled";
import { useContext } from "react";
import { MessageContext } from "../../../pages/_app";

const Message = ({ padding }: Props) => {
  const { message } = useContext(MessageContext);

  return (
    <MessageStyled padding={padding}>
      {message}
    </MessageStyled>
  );
};

export type Props = {
  padding?: string;
};

export default Message;
