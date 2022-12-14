import React, { FC, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import smiles from './Smiles';

interface SmileModalProps {
  textareaRef: any;
  value: string;
  setValue: (str: string) => void;
  visible: boolean;
  hide: () => void;
}

const SmileModal: FC<SmileModalProps> = ({ textareaRef, value, setValue, visible, hide }) => {
  const addSmile = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof HTMLSpanElement)) return;
    const smileSpan = event.target.closest('div > [data-class= "smile"]');
    if (smileSpan) {
      const cursorPos = textareaRef.current.selectionStart;
      const endPos = textareaRef.current.selectionEnd;
      const newValue = value.substring(0, cursorPos) + smileSpan.innerHTML + value.substring(endPos, value.length);
      setValue(newValue);
      textareaRef.current.focus();
    }
  };

  const hideHandler = useCallback(
    (event: any) => {
      const modal = event.target.closest('#modal');
      if (!visible || modal) return;
      if (event.type === 'click' && !modal) {
        hide();
      } else if (event.type === 'keyup' && event.key === 'Escape') {
        hide();
      }
    },
    [visible, hide],
  );

  useEffect(() => {
    document.addEventListener('click', hideHandler);
    document.addEventListener('keyup', hideHandler);
    return () => {
      document.removeEventListener('click', hideHandler);
      document.removeEventListener('keyup', hideHandler);
    };
  }, [hideHandler]);

  return (
    <SmileModalWrap id="modal" visible={visible} onClick={addSmile}>
      {smiles.map((smile) => (
        <SpanWrap key={smile.title} data-class="smile" title={smile.title}>
          {smile.children}
        </SpanWrap>
      ))}
    </SmileModalWrap>
  );
};

const SmileModalWrap = styled.div<{ visible: boolean }>`
  position: absolute;
  width: 200px;
  height: 150px;
  border: 1px solid #dee3e9;
  border-radius: inherit;
  background: #fff;
  display: grid;
  padding: 5px;
  gap: 5px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  text-align: center;
  visibility: ${({ visible }) => !visible && 'hidden'};
  top: -160px;

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
