import React, { ReactElement, MouseEvent } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 30px;
  font-size: 12px;
  border-radius: 10px;
  padding: 15px;
  border: none;
  box-shadow: 1px 1px 0px 2px rgba (0,0,0,0.3);
  background: light-gray;
  cursor: pointer;
`
export const Button = (props: {
  children?: string | ReactElement;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}): ReactElement => {
  const { children, ...rest } = props;

  return <StyledButton {...rest}>{children}</StyledButton>;
};
