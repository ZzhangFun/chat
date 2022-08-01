import React, { FC } from 'react';
import styled from 'styled-components';
import svgs from '../Svgs';

interface SnapProps {
  hidden: boolean;
  setHidden: () => void;
}

const Snap: FC<SnapProps> = ({ hidden, setHidden }) => {
  return (
    <SnapWrap onClick={() => setHidden()} className={hidden ? 'close' : 'open'}>
      <SnapBackground />
    </SnapWrap>
  );
};

const SnapWrap = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10px;
  right: 10px;
  width: 5vmax;
  height: 5vmax;
  border: none;
  background: inherit;

  @media screen and (max-width: 410px) {
    width: 10vmax;
    height: 10vmax;
  }

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

  &.close {
    &::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 50%;
      background-image: url(${svgs.bubble});
      background-size: 100%;
    }
  }

  &.open {
    &::after {
      content: '';
      position: absolute;
      width: 25%;
      height: 25%;
      background-image: url(${svgs.shut});
      background-size: 100%;
    }

    @media screen and (max-width: 410px) {
      top: 10px;
      right: 10px;

      &::before {
        background-image: url(${svgs.snapMobile});
      }
    }
  }
`;

const SnapBackground = styled.div`
  content: '';
  z-index: 10;
  position: inherit;
  left: inherit;
  top: inherit;
  width: 15px;
  height: 15px;
  background-size: 100% auto;
`;

export default Snap;
