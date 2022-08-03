import React, { FC } from 'react';
import styled from 'styled-components';

export interface MessageProps {
  children: React.ReactNode;
  author?: string;
  isUser?: boolean;
  time: string;
}

const Message: FC<MessageProps> = ({ children, time, author, isUser }) => {
  return (
    <MessageWrap isUser={isUser}>
      <MessageSpan isUser={isUser}>
        <div>
          <Author>{author}</Author>
          {children}
        </div>
        <Time>{time}</Time>
      </MessageSpan>
    </MessageWrap>
  );
};

const MessageWrap = styled.div<{ isUser?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isUser ? 'end' : 'start')};
`;

const MessageSpan = styled.span<{ isUser?: boolean }>`
  display: flex;
  background: ${(props) => (props.isUser ? '#C2E2FF' : '#f0f0f0')};
  font-size: 14px;
  gap: 5px;
  max-width: 35ch;
  padding: 10px;
  border-radius: 8px;
`;

const Author = styled.h4`
  color: gray;
`;

const Time = styled.time`
  align-self: end;
  color: gray;
`;

export default Message;
