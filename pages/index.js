import mail from 'next-mailer';
import Head from 'next/head'
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  useEffect(() => {
    mail({
      receivers: 'bossbele@larven.io, mkoela@larven.io',
      sender: "Larven LLC",
      subject: 'Meeting',
      text: "Let's meet up at 10:00"
    });
    mail({
      receivers: 'bossbele@larven.io, mkoela@larven.io',
      sender: "Larven LLC",
      subject: 'Meeting',
      html: "<b>Let's meet up at 10:00</b>"
    });
  },[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>NextMailer - A Minimal NextJS Mailing Server</title>
        <meta name="description" content="A Minimal NextJS Mailing Server" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/LarvenLLC/next-mailer-server">NextMailer!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/LarvenLLC/next-mailer-server#readme" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about NextMailer features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Issues &rarr;</h2>
            <p>Having trouble with the service? Post your issues and we&apos;ll gladly help.</p>
          </a>

          <a
            href="https://github.com/LarvenLLC/next-mailer-server/fork"
            className={styles.card}
          >
            <h2>Develop &rarr;</h2>
            <p>Help us take the project forward by forking our repository. Feel free to make edits and submit your PRs.</p>
          </a>

          <a
            href="https://github.com/LarvenLLC/next-mailer"
            className={styles.card}
          >
            <h2>Support &rarr;</h2>
            <p>
              Support the development of next-mailer, the npm package that made this repository possible. Make awesome projects using it, Star it and, if you can, say &quote;hello&quote;.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/LarvenLLC/next-mailer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            NextMailer
          </span>
        </a>
      </footer>
    </div>
  )
}
