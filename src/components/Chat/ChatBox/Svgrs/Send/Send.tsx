import styled from 'styled-components';
import React, { FC } from 'react';

interface SendProps {
  addMessage: () => void;
}

const Send: FC<SendProps> = ({ addMessage }) => (
  <SvgWarp onClick={addMessage} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.9861 8.06126C15.5068 9.4038 0.330127 16.8054 0.121044 15.928C-0.320484 14.075 0.517936 10.2426 1.47202 9.58692C2.14386 9.12522 5.86055 8.4263 9.36581 7.99986C5.86123 7.57339 2.14605 6.87468 1.47436 6.41308C0.520271 5.75741 -0.31815 1.92503 0.123378 0.0720454C0.335815 -0.819501 16 6.83582 16 7.99862C16 8.02056 15.9953 8.04143 15.9861 8.06126Z"
      fill="#0848C0"
    />
  </SvgWarp>
);

const SvgWarp = styled.svg`
  align-self: end;
  min-width: 16px;
  min-height: 16px;
  margin: 0 9px 15px 10px;
  transition: 1s all;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
export default Send;
