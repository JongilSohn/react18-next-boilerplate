import type { InitialProps, NextPage } from 'next';
import DefaultLayout from '~/components/DefaultLayout';

/** styles */
import styled from '@emotion/styled';
import useUser from '../../hooks/useUser';

interface IHome extends InitialProps {}

const Home: NextPage<IHome> = ({ title }) => {
  const { userInfo } = useUser();

  return (
    <DefaultLayout title={title}>
      <HomeWrppaer>
        <div>Home - {userInfo?.name}</div>
      </HomeWrppaer>
    </DefaultLayout>
  );
};

Home.getInitialProps = async () => {
  return {
    title: '과제 Home',
  };
};

const HomeWrppaer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default Home;
