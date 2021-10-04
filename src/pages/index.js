import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { Post } from '../components/Post';
import { posts } from '../getAllPosts';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>emmanz95 blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/*<h1 className={styles.title}>*/}
        {/*  Welcome to <a href="https://nextjs.org">Emmanz95 Blog</a>*/}
        {/*</h1>*/}

        {/*<p className={styles.description}>*/}
        {/*  Welcome to my personal blog page{' '}*/}
        {/*  <code className={styles.code}>By Emmanz95</code>*/}
        {/*</p>*/}

        <div className={styles.grid}>
          {posts.map((post) => (
              <Post key={post.link} post={post} />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by{' '}
          <span className={styles.logo}>
            <Link href="https://www.emman95.com/">emmanz95</Link>
          </span>
        </a>
      </footer>
    </div>
  )
}
