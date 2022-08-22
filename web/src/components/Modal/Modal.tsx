import { ReactElement } from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  z-index: 9999;
  position: absolute;
  top: 50%;
  left 50%;
  min-width: 250px;
  min-height: 100px;
  padding: 15px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  background: #fff:
`;

const StyledContainer = styled.div`
  display: inline-block;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  padding: 20px;
  margin: 20px;
  background-color: white;
  color: gray;
`;

export const Modal = ({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children?: ReactElement;
}): ReactElement => {
  if (!isOpen) {
    return <></>;
  }

  return (
    <StyledModal>
      <StyledContainer>{children}</StyledContainer>
    </StyledModal>
  );
};
