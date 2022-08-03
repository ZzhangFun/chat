import React, { FC } from 'react';
import styled from 'styled-components';

interface SmileModalProps {
  visible: boolean;
}

const SmileModal: FC<SmileModalProps> = ({ visible }) => {
  return (
    <SmileModalWrap className={visible ? '' : 'hide'}>
      <SpanWrap title="blush">😊</SpanWrap>
      <SpanWrap title="joy">😂</SpanWrap>
      <SpanWrap title="kissing_heart">😘</SpanWrap>
      <SpanWrap title="sunglasses">😎</SpanWrap>
      <SpanWrap title="scream">😱</SpanWrap>
      <SpanWrap title="neutral_face">😡</SpanWrap>
      <SpanWrap title="rage">😢</SpanWrap>
      <SpanWrap title="cry">😐</SpanWrap>
      <SpanWrap title="wave">👋</SpanWrap>
      <SpanWrap title="like">👍</SpanWrap>
      <SpanWrap title="dislike">👎</SpanWrap>
      <SpanWrap title="heart">❤</SpanWrap>
    </SmileModalWrap>
  );
};

const SmileModalWrap = styled.div`
  position: absolute;
  width: 200px;
  height: 150px;
  border: 1px solid #dee3e9;
  border-radius: inherit;
  left: 16px;
  bottom: 168px;
  background: #fff;
  display: grid;
  padding: 5px;
  gap: 5px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));

  &.hide {
    visibility: hidden;
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
