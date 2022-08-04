import React, { FC } from 'react';
import styled from 'styled-components';

interface SmileModalProps {
  value: string;
  setValue: (str: string) => void;
  visible: boolean;
}

const SmileModal: FC<SmileModalProps> = ({ value, setValue, visible }) => {
  const addSmile = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof HTMLSpanElement)) return;

    const smileSpan = event.target.closest('div > [data-class= "smile"]');
    smileSpan && setValue(value + smileSpan.innerHTML);
  };

  return (
    <SmileModalWrap visible={visible} onClick={(event) => addSmile(event)}>
      <SpanWrap data-class="smile" title="blush">
        😊
      </SpanWrap>
      <SpanWrap data-class="smile" title="joy">
        😂
      </SpanWrap>
      <SpanWrap data-class="smile" title="kissing_heart">
        😘
      </SpanWrap>
      <SpanWrap data-class="smile" title="sunglasses">
        😎
      </SpanWrap>
      <SpanWrap data-class="smile" title="scream">
        😱
      </SpanWrap>
      <SpanWrap data-class="smile" title="neutral_face">
        😡
      </SpanWrap>
      <SpanWrap data-class="smile" title="rage">
        😢
      </SpanWrap>
      <SpanWrap data-class="smile" title="cry">
        😐
      </SpanWrap>
      <SpanWrap data-class="smile" title="wave">
        👋
      </SpanWrap>
      <SpanWrap data-class="smile" title="like">
        👍
      </SpanWrap>
      <SpanWrap data-class="smile" title="dislike">
        👎
      </SpanWrap>
      <SpanWrap data-class="smile" title="heart">
        ❤
      </SpanWrap>
    </SmileModalWrap>
  );
};

const SmileModalWrap = styled.div<{ visible: boolean }>`
  position: absolute;
  width: 200px;
  height: 150px;
  border: 1px solid #dee3e9;
  border-radius: inherit;
  left: 16px;
  background: #fff;
  display: grid;
  padding: 5px;
  gap: 5px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  visibility: ${({ visible }) => !visible && 'hidden'};
  bottom: calc(15px + 58px + 21px + 15px + 49px + 10px);

  @media screen and (max-width: 410px) {
    bottom: calc(15px + 49px + 10px);
  }
`;

const SpanWrap = styled.span`
  cursor: pointer;
  padding: 6px;
  width: 100%;
  height: 100%;
  font-size: 22px;

  &:hover {
    background: #f0f0f0;
    border-radius: inherit;
  }
`;

export default SmileModal;
