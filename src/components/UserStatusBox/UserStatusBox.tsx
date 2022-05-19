import React, { FunctionComponent } from 'react';

/** styles */
import styled from '@emotion/styled';

/** hooks */
import useUser from '~/hooks/useUser';

interface IUserStatusProps {}

const UserStatus: FunctionComponent<IUserStatusProps> = () => {
  const { userInfo } = useUser();

  return (
    <UserStatusBoxWrapper>
      <div className="user-name">{userInfo?.name}</div>
    </UserStatusBoxWrapper>
  );
};

const UserStatusBoxWrapper = styled.div`
  display: flex;
  gap: 20px;

  .user-name {
  }
`;

export default UserStatus;
