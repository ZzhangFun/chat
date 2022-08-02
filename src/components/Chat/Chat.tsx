import React, { useState } from 'react';
import styled from 'styled-components';
import ChatBox from './ChatBox/ChatBox';
import Snap from './Snap/Snap';

const Chat = () => {
  const [hidden, setHidden] = useState<boolean>(true);

  const hiddenListener = () => setHidden((h) => !h);

  return (
    <ChatWrap>
      <ChatBox hidden={hidden} />
      <Snap hidden={hidden} setHidden={hiddenListener} />
    </ChatWrap>
  );
};

const ChatWrap = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (min-width: 411px) {
    right: 30px;
    bottom: 30px;
  }

  @media screen and (max-width: 410px) {
    right: 0;
    bottom: 0;
  }
`;

export default Chat;
