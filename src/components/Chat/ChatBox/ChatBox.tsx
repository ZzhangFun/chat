import React, { FC } from 'react';
import styled from 'styled-components';

interface ChatBoxProps {
  hidden: boolean;
}

const ChatBox: FC<ChatBoxProps> = ({ hidden }) => {
  return <ChatBoxWrap hidden={hidden}></ChatBoxWrap>;
};

const ChatBoxWrap = styled.div`
  box-shadow: 0 5px 10px lightgray;
  border-radius: 5px;
  background: inherit;
  width: 300px;
  height: 80vh;
  margin-bottom: 10vh;

  @media screen and (min-width: 410px) {
    border-top: 5px solid #463cfe;
  }

  @media screen and (max-width: 410px) {
    margin-bottom: 0;
    width: 100vw;
    height: 100vh;
  }
`;
export default ChatBox;
