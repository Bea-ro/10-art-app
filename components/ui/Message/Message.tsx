const Message = ({ messageText } : Props) => {
    return (
      <div className="message-container">
        <h3 className="message">{messageText}</h3>
      </div>
    );
  };
  

  export type Props = {
    messageText: string
   }

   
  export default Message;