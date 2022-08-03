import styled from 'styled-components';
import React, { useState } from 'react';
import SmileModal from './SmileModal/SmileModal';

const Smile = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <SmileModal visible={modalVisible} />
      <SvgWarp
        onClick={() => setModalVisible((v) => !v)}
        width="17"
        height="17"
        viewBox="0 0 17 17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 17.5C4.30558 17.5 0.5 13.6944 0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5ZM9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" />
        <path d="M13.4441 11.2297C12.6606 12.7452 11.1507 13.5001 8.99998 13.5001C6.84925 13.5001 5.3394 12.7452 4.55584 11.2297C4.42901 10.9845 4.52504 10.6828 4.77034 10.556C5.01563 10.4291 5.31729 10.5252 5.44412 10.7705C6.03938 11.9217 7.19619 12.5001 8.99998 12.5001C10.8038 12.5001 11.9606 11.9217 12.5558 10.7705C12.6827 10.5252 12.9843 10.4291 13.2296 10.556C13.4749 10.6828 13.571 10.9845 13.4441 11.2297Z" />
        <path d="M7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8Z" />
        <path d="M11 8C11.5523 8 12 7.55228 12 7C12 6.44772 11.5523 6 11 6C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8Z" />
      </SvgWarp>
    </>
  );
};

const SvgWarp = styled.svg`
  flex: 0 0 auto;
  fill: #9ea4ac;
  margin-left: 9px;
  margin-right: 10px;

  :hover {
    cursor: pointer;
    fill: #0848c0;
  }
`;

export default Smile;
