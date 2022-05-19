import React, { FunctionComponent, useState, useEffect } from 'react';
import { userInfo } from '@mocks/user/userInfo';

/** styles */
import styled from '@emotion/styled';
import theme from '~/styles/theme';

/** interface */
import { IUser } from '~/interface/dataType';
import useUser from '../../hooks/useUser';

interface IFooterProps {}

const Footer: FunctionComponent<IFooterProps> = () => {
  const { userInfo } = useUser();

  return (
    <FooterWrapper>
      <ul className="footer-info-list">
        <li className="footer-info-item">과제 제출자: {userInfo?.name}</li>
        <li className="footer-info-item">
          git:
          <a className="externalLink" href={userInfo?.git}>
            {userInfo?.git}
          </a>
        </li>
        <li className="footer-info-item">
          blog :
          <a className="externalLink" href={userInfo?.blog}>
            {userInfo?.blog}
          </a>
        </li>
        <li className="footer-info-item">
          notion :
          <a className="externalLink" href={userInfo?.notion}>
            {userInfo?.notion}
          </a>
        </li>
      </ul>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 20px 40px;

  .footer-info-list {
    list-style: none;
    font-size: 12px;

    .footer-info-item {
      margin-bottom: 4px;
      .externalLink {
        color: ${theme.mainColor};
      }
    }
  }
`;

export default Footer;
