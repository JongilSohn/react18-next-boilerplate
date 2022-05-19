import React, { FunctionComponent, useMemo } from 'react';

/** styles */
import styled from '@emotion/styled';
import theme from '~/styles/theme';

/** constants */
import PATH from '~/constants/urls';

interface INavProps {}

const Nav: FunctionComponent<INavProps> = () => {
  return (
    <NavWrapper>
      <ul className="nav-list"></ul>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  padding: 0 40px;
  border-bottom: 3px solid ${theme.mainColor};

  .nav-list {
    display: flex;
    gap: 18px;
    padding: 0;
    list-style: none;

    .nav-item {
      cursor: pointer;

      .nav-liker {
        color: ${theme.mainColor};

        &:hover {
          color: ${theme.redColor};
        }
      }
    }
  }
`;

export default Nav;
