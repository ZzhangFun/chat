import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Smile from './Svgrs/Smile/Smile';
import Send from './Svgrs/Send/Send';
import Message, { MessageProps } from './Message/Message';
import { format } from 'date-fns';

interface ChatBoxProps {
  hidden: boolean;
}

const ChatBox: FC<ChatBoxProps> = ({ hidden }) => {
  const [value, setValue] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const id = useRef(0);

  const [messageList, setMessageList] = useState<MessageProps[]>([
    { author: 'Виртуальный чел', time: '14:00', children: 'Есть вопросы?' },
    {
      isUser: true,
      time: '14:20',
      children: 'Ну здарова',
    },
    {
      author: 'Вячеслав',
      time: '14:30',
      children: 'Здравствуйте, меня зовут Вячеслав. Уточните, пожалуйста, какой вопрос вас интересует?',
    },
  ]);

  const addMessage = () => {
    setMessageList((msgList) => [...msgList, { children: value, isUser: true, time: format(new Date(), 'HH:mm') }]);
    setValue('');
  };

  useEffect(() => {
    if (ref.current) ref.current.scrollTo(0, ref.current.scrollHeight);
  }, [messageList]);

  return (
    <ChatBoxWrap className={hidden ? 'hide' : ''}>
      <MessageList ref={ref}>
        <h1>Здравствуйте 👋</h1>
        {messageList.map((message) => {
          id.current = id.current + 1;
          return (
            <Message key={id.current} time={message.time} author={message.author} isUser={message.isUser}>
              {message.children}
            </Message>
          );
        })}
      </MessageList>
      <TextareaWrap>
        <Smile />
        <Textarea placeholder="Введите сообщение..." value={value} onChange={(e) => setValue(e.target.value)} />
        {value && <Send addMessage={addMessage} />}
      </TextareaWrap>
    </ChatBoxWrap>
  );
};

const ChatBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 10px lightgray;
  border-radius: 5px;
  background: inherit;
  width: 340px;
  height: 85vh;
  margin-bottom: 10vh;

  &.hide {
    visibility: hidden;
  }

  @media screen and (min-width: 411px) {
    border-top: 5px solid #463cfe;
  }

  @media screen and (max-width: 410px) {
    margin-bottom: 0;
    width: 100vw;
    height: 100vh;
  }
`;

const TextareaWrap = styled.form`
  display: flex;
  align-items: end;
  border: 2px solid lightgray;
  border-radius: 5px;
  margin: 15px;
  padding: 10px 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 140px;
  resize: none;
  outline: none;
  border: none;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const MessageList = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: lightgray;
  }
`;

export default ChatBox;
