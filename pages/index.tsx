import glob from 'glob';
import { ReactNode } from 'react';
import { NextPage } from 'next';

interface Page {
  title: string;
  date: string;
  slug: string;
}

interface Props {
  children?: ReactNode;
  pages?: Page[];
}

const Home: NextPage = (props: Props) => {
  const { pages = [] } = props;
  return (
    <>
      <div>Lalotai</div>
      <ul>
        {pages.map(p => (
          <li key={p.slug}>
            {p.title} - {p.slug}
          </li>
        ))}
      </ul>
    </>
  );
};

// get a list of posts
Home.getInitialProps = async (props) => ({
  pages: glob.sync('pages/*.mdx').map((p: any) => ({
      ...require(`../${p}`),
      slug: p.match(/\/(.*)\.mdx$/)[1],
  })),
});

export default Home;
