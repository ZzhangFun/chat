import React, { FC } from 'react';
import styled from 'styled-components';
import svgs from './Svgs';

interface SnapProps {
  hidden: boolean;
  setHidden: () => void;
}

const Snap: FC<SnapProps> = ({ hidden, setHidden }) => {
  return (
    <SnapWrap onClick={() => setHidden()} className={hidden ? 'close' : 'open'}>
      <SnapBackground className={hidden ? 'close' : 'open'} />
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
  width: 70px;
  height: 70px;
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
    animation: showSnap 0.3s;
  }

  &.close::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 50%;
    background-image: url(${svgs.bubble});
    background-size: 100%;
    animation: bubble 1s forwards, bubble 0.5s reverse linear 4s, mirrorBubble 0.5s forwards linear 4.5s,
      mirrorBubble 0.5s reverse linear 9s, bubble 0.5s forwards linear 9.5s;

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

  &.open {
    &::after {
      content: '';
      position: absolute;
      width: 25%;
      height: 25%;
      background-image: url(${svgs.shut});
      background-size: 100%;
      animation: showShut 1s;
    }

    @media screen and (max-width: 410px) {
      top: 10px;
      right: 10px;

      &::before {
        background-image: url(${svgs.snapMobile});
      }
    }

    @keyframes showShut {
      from {
        opacity: 0;
        transform: scale(0.5) rotate(270deg);
      }
      to {
        opacity: 1;
        transform: scale(1) rotate(0deg);
      }
    }
  }

  @keyframes showSnap {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const SnapBackground = styled.div`
  content: '';
  z-index: 10;
  position: inherit;
  width: 15px;
  height: 15px;

  &.close::before {
    z-index: 10;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    animation: leftText 4s linear 1s, rightText 4s linear 6s, check 4s linear 10s;
  }

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
