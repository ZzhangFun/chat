import React, { FC } from 'react';
import styled from 'styled-components';

interface ChatBoxProps {
  hidden: boolean;
}

const ChatBox: FC<ChatBoxProps> = ({ hidden }) => {
  return <ChatBoxWrap hidden={hidden}>Darova</ChatBoxWrap>;
};

const ChatBoxWrap = styled.div`
  background: lightgray;
  width: 300px;
  height: 80vh;
  margin-bottom: 40px;
`;
export default ChatBox;
