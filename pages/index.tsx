import glob from 'glob';
import Link from 'next/link';
import React, { ReactNode } from 'react';
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
            <Link href={`/${p.slug}/`}>
              <a>{p.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

// get a list of posts
Home.getInitialProps = async (): Promise<Props> => ({
  // eslint-disable-next-line
  pages: glob.sync('pages/*.mdx').map((p: any) => ({
      ...require(`../${p}`),
      slug: p.match(/\/(.*)\.mdx$/)[1],
  })),
});

export default Home;
