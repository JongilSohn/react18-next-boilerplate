import React, { FunctionComponent, ReactNode } from 'react';

/** styles */
import styled from '@emotion/styled';

interface IEmptyBoxProps {
  className?: string;
  title?: ReactNode;
  content?: ReactNode;
}

const EmptyBox: FunctionComponent<IEmptyBoxProps> = ({ className, title, content }) => {
  return (
    <EmptyBoxBoxWrapper className={className}>
      {title && <div>{title}</div>}
      {content && <div>{content}</div>}
    </EmptyBoxBoxWrapper>
  );
};

const EmptyBoxBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default EmptyBox;
