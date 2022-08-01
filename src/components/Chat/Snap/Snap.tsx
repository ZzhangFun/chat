import React, { FC } from 'react';
import styled from 'styled-components';
import svgs from '../Svgs';

interface SnapProps {
  hidden: boolean;
  setHidden: () => void;
}

const Snap: FC<SnapProps> = ({ hidden, setHidden }) => {
  return (
    <SnapWrap onClick={() => setHidden()}>
      <SnapBackground />
    </SnapWrap>
  );
};

const SnapWrap = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 65px;
  height: 65px;
  border: none;
  background: inherit;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${svgs.snap});
    background-size: 100%;
  }
`;

const SnapBackground = styled.div``;

export default Snap;
