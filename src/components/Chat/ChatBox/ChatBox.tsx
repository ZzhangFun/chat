import React, { FC } from 'react';
import styled from 'styled-components';

interface ChatBoxProps {
  hidden: boolean;
}

const ChatBox: FC<ChatBoxProps> = ({ hidden }) => {
  return <ChatBoxWrap hidden={hidden}></ChatBoxWrap>;
};

const ChatBoxWrap = styled.div`
  background: inherit;
  border: 2px solid lightgray;
  width: 300px;
  height: 80vh;
  margin-bottom: 60px;
`;
export default ChatBox;
