import React, { ReactElement, MouseEvent } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: inline-block;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  width: 200px;
  padding: 20px;
  margin: 20px;
  color: gray;
  font-size: 12px;
`;

export const Card = ({
  title,
  description,
  onClick,
  ...rest
}: {
  title?: string;
  description?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}): ReactElement => (
  <StyledCard onClick={onClick} {...rest}>
    <h1>{title}</h1>
    <p>{description}</p>
  </StyledCard>
);
