/** state */
import useGetUserProfile from '~/query-hook/useGetUserProfile';

const useUser = () => {
  const { data } = useGetUserProfile();

  return { userInfo: data };
};

export default useUser;
