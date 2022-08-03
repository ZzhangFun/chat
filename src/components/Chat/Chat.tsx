import React, { useState } from 'react';

import styled from 'styled-components';
import ChatBox from './ChatBox/ChatBox';
import Snap from './Snap/Snap';

const Chat = () => {
  const [visible, setVisible] = useState<boolean>();

  const visibleListener = () => (visible === undefined ? setVisible(true) : setVisible((v) => !v));

  return (
    <ChatWrap>
      <ChatBox visible={visible} />
      <Snap visible={visible} setVisible={visibleListener} />
    </ChatWrap>
  );
};

const ChatWrap = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  bottom: 0;
  height: 100vh;

  @media screen and (min-width: 411px) {
    right: 0;
  }
`;

export default Chat;
