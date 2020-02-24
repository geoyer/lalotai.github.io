import { NextPage } from 'next';

const Home: NextPage = (props) => {
  return (
    <div>Lalotai</div>
  );
};

Home.getInitialProps = async () => {
  return { pages: [] };
};

export default Home;
