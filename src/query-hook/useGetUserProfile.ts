import { useQuery } from 'react-query';

/** api */
import api from '~/api';

/** interface */
import { IUser } from '~/interface/dataType';

/** 유저 정보 가져오기 */
const useGetUserProfile = () => {
  const { getUserProfile } = api;

  return useQuery<IUser>(['UserProfile'], () => getUserProfile(), {
    onSuccess: (data) => {
      console.log('API - UserProfile :', data);
    },
    onError: (err) => {
      alert(err);
    },
  });
};

export default useGetUserProfile;
