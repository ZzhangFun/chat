import React, { FC } from 'react';
import styled from 'styled-components';

interface SnapProps {
  hidden: boolean;
  setHidden: () => void;
}

const Snap: FC<SnapProps> = ({ hidden, setHidden }) => {
  return (
    <SnapWrap>
      <button onClick={() => setHidden()}>ss</button>
    </SnapWrap>
  );
};

const SnapWrap = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
`;

export default Snap;
