import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Smile from './Svgrs/Smile/Smile';
import Send from './Svgrs/Send/Send';
import Message, { MessageProps } from './Message/Message';
import { format } from 'date-fns';

interface ChatBoxProps {
  visible?: boolean;
}

const ChatBox: FC<ChatBoxProps> = ({ visible }) => {
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
    <ChatBoxWrap visible={visible}>
      <ScrollWrap ref={ref}>
        <Greeting>
          <h1>Здравствуйте 👋</h1>
          <p>
            Сотрудники службы поддержки mos.ru ответят на вопросы о работе портала, окажут помощь в получении госуслуг и
            поиске информации
          </p>
        </Greeting>
        <QuestionList>
          <span>
            <p>Центры госуслуг «Мои документы»</p>
          </span>
          <span>
            <p>Вопросы по Личному кабинету</p>
          </span>
          <span>
            <p>Молочная кухня</p>
          </span>
          <span>
            <p>Карта Москвича</p>
          </span>
          <span>
            <p>🔎 Найти ответ в базе знаний</p>
          </span>
        </QuestionList>
        <MessageList>
          {messageList.map((message) => {
            id.current = id.current + 1;
            return (
              <Message key={id.current} time={message.time} author={message.author} isUser={message.isUser}>
                {message.children}
              </Message>
            );
          })}
        </MessageList>
      </ScrollWrap>
      <TextareaWrap>
        <Smile />
        <Textarea placeholder="Введите сообщение..." value={value} onChange={(e) => setValue(e.target.value)} />
        {value && <Send addMessage={addMessage} />}
      </TextareaWrap>
    </ChatBoxWrap>
  );
};

const ChatBoxWrap = styled.div<{ visible?: boolean }>`
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px rgba(51, 51, 51, 0.2);
  background: inherit;
  border-radius: 4px;
  margin-top: 6px;
  margin-right: 15px;
  width: 380px;
  height: calc(100vh - (15px + 58px + 21px + 6px));
  visibility: ${({ visible }) => !visible && 'hidden'};

  & > * {
    margin-left: 16px;
    margin-right: 16px;
  }

  @media screen and (min-width: 411px) {
    border-top: 5px solid #0848c0;
  }

  @media screen and (max-width: 410px) {
    margin-bottom: 0;
    width: 100vw;
    height: 100vh;
  }
`;

const Greeting = styled.div`
  margin-right: 10px;
  margin-top: 130px;
  margin-bottom: 16px;

  & h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 37px;
    color: #333333;
  }

  & p {
    font-size: 16px;
    font-style: normal;
    line-height: 22px;
    font-weight: 400;
    color: #0c1014;
  }
`;

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-right: 10px;
  padding: 9px 1px 9px 1px;

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dee3e9;
    box-shadow: 0 2px 4px rgba(44, 48, 52, 0.15);
    border-radius: 8px;
    height: 43px;
  }

  & p {
    height: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #0848c0;
    cursor: pointer;
  }
`;

const ScrollWrap = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 760px;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f3f5f7;
  }
`;

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 19px;
`;

const TextareaWrap = styled.form`
  display: flex;
  align-items: center;
  box-shadow: 0 0 1px 1px #d6dade;
  border-radius: 2px;
  margin-bottom: 16px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 48px;
  resize: none;
  outline: none;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;

  &::placeholder {
    color: #9ea4ac;
  }

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export default ChatBox;
