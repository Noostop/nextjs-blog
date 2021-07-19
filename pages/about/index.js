import { useState } from 'react'
import Link from "next/link"
import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/Post.module.scss'

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        按钮 {count}
      </button>
    </>
  );
}

export default function About () {

  return (
    <Layout>
      <Head>
        <title>关于我们</title>
        <meta name="description" content="关于我们" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>关于我们</h1>
        <Link href='/'>首页</Link>
        <hr />
        <Button />
      </main>
    </Layout>
  );
}