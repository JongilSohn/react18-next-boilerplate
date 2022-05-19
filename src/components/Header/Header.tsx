import React, { FunctionComponent } from 'react';

/** styles */
import styled from '@emotion/styled';
import theme from '~/styles/theme';

/** components */
import UserStatusBox from '~/components/UserStatusBox';

interface IHeaderProps {}

const Header: FunctionComponent<IHeaderProps> = () => {
  return (
    <HeaderWrapper>
      <Logo href="/">과제</Logo>
      <UserStatusBox />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 20px 40px 0;
`;

const Logo = styled.a`
  font-size: 30px;
  font-weight: 900;
  color: ${theme.mainColor};
  cursor: pointer;
`;

export default Header;
