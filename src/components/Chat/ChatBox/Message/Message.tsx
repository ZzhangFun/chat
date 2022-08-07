import React, { FC } from 'react';
import styled from 'styled-components';

export interface MessageProps {
  children: string;
  author?: string;
  isUser?: boolean;
  time: string;
}

const linkFormat = (link: string) => {
  const urlRegex = /(\b(https|http):\/\/[-\w+&@#/%?=~_|!:,.]*[-\w+&@#/%=~_|])/gi;
  return link.replace(urlRegex, function (url) {
    return '<a href="' + url + '">' + url + '</a>';
  });
};

const Message: FC<MessageProps> = ({ children, time, author, isUser }) => {
  return (
    <MessageWrap isUser={isUser}>
      <MessageSpan isUser={isUser}>
        <div>
          <Author>{author}</Author>
          <p dangerouslySetInnerHTML={{ __html: linkFormat(children) }} />
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
  word-break: break-word;
`;

const MessageSpan = styled.span<{ isUser?: boolean }>`
  display: flex;
  background: ${({ isUser }) => (isUser ? '#DEECFD' : '#F3F5F7')};
  margin-right: ${({ isUser }) => isUser && '10px'};
  border-radius: 8px;
  gap: 5px;
  max-width: 35ch;
  padding: 10px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  & > {
    display: flex;
  }
`;

const Author = styled.h4`
  color: #9ea4ac;
`;

const Time = styled.time`
  align-self: end;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #9ea4ac;
  word-break: normal;
`;

export default Message;
