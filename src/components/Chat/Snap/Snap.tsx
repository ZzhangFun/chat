import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import svgs from './Svgs';

interface SnapProps {
  visible?: boolean;
  setVisible: () => void;
}

const Snap: FC<SnapProps> = ({ visible, setVisible }) => {
  return <SnapWrap onClick={() => setVisible()} visible={visible}></SnapWrap>;
};

const SnapWrap = styled.button<{ visible?: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 58px;
  bottom: 15px;
  right: 15px;
  border: none;
  cursor: pointer;
  border-radius: 100%;
  transition: 1s all;

  :hover {
    transform: scale(1.2);
  }

  background: url(${svgs.snap}) center no-repeat;
  animation: showSnap 0.3s;

  ${({ visible }) =>
    visible &&
    css`
      @media screen and (max-width: 410px) {
        position: absolute;
        width: 40px;
        height: 40px;
        top: 9px;
        right: 9px;
        background-image: url(${svgs.snapMobile});
      }
    `};
  @keyframes showSnap {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    position: absolute;
    background: ${({ visible }) => (visible ? `url(${svgs.shut})` : `url(${svgs.bubble})`)} no-repeat center;
    width: ${({ visible }) => (visible ? '12px' : '24px')};
    height: ${({ visible }) => (visible ? '12px' : '30px')};
    animation: ${({ visible }) =>
      visible !== undefined
        ? visible
          ? 'showShut 1s linear'
          : 'bubbleWithShut 1s, bubble 0.5s reverse linear 4s, mirrorBubble 0.5s forwards linear 4.5s, mirrorBubble 0.5s reverse linear 9s, bubble 0.5s forwards linear 9.5s'
        : 'bubble 1s forwards, bubble 0.5s reverse linear 4s, mirrorBubble 0.5s forwards linear 4.5s, mirrorBubble 0.5s reverse linear 9s, bubble 0.5s forwards linear 9.5s'};

    @keyframes showShut {
      from {
        background: url(${svgs.shut});
        transform: scale(0) rotate(0deg);
      }
      to {
        transform: scale(1) rotate(-270deg);
      }
    }

    @keyframes bubbleWithShut {
      from {
        background-image: url(${svgs.shut});
        transform: scale(1) rotate(-270deg);
      }
      50% {
        background-image: url(${svgs.shut});
        transform: scale(0) rotate(0deg);
      }
      60% {
        background: url(${svgs.bubble});
        transform: translateY(50px) scale(1);
      }
      to {
        transform: translateY(0);
      }
    }
    @keyframes bubble {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes mirrorBubble {
      from {
        opacity: 0;
        transform: translateY(50px) scale(-1, 1);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(-1, 1);
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    top: 19px;
    background: no-repeat;
    animation: ${({ visible }) => !visible && 'leftText 4s linear 1s, rightText 4s linear 6s, check 4s linear 10s'};
    
     @keyframes leftText {
    from {
      background-image: url(${svgs.textLeft});
      height: 0;
    }
    50% {
      background-image: url(${svgs.textLeft});
      height: 75%;
    }
    75% {
      height: 0;
    }
  }
  @keyframes rightText {
    from {
      background-image: url(${svgs.textRight});
      height: 0;
    }
    50% {
      background-image: url(${svgs.textRight});
      height: 100%;
    }
    75% {
      height: 0;
    }
  }
  @keyframes check {
    from {
      background-image: url(${svgs.check});
      transform: scale(0.75);
      opacity: 0;
    }
    25% {
      background-image: url(${svgs.check});
      opacity: 1;
    }
    50% {
      background-image: url(${svgs.check});
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
  }
`;

export default Snap;
