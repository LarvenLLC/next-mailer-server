import mail from 'next-mailer/react';
import Head from 'next/head'
import { useCallback } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const sendMail  = useCallback(async (e) => {
    e.preventDefault();
    const form = {};
    const formData = new FormData(e.target);
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        form[key] = value.trim();
        return;
      }
      form[key] = value;
    });
    await mail({
      receivers: form.email,
      sender: "Larven LLC",
      subject: 'Meeting',
      text: "Let's meet up at 10:00"
    });
    alert('Mail sent successfully')
  },[])

  const triggerMail = useCallback(async () => {
    const response = await fetch(`/api/hello`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    const data = await response.json()
    return alert(data?.name)
  },[])

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

        <div>
          Client Side API:
          <br/>
          <div>
            Get started by sending an email{' '}
            <div>
              <form onSubmit={sendMail}>
                <input name="email" type="email" placeholder='Receiver' />
                <button className={styles.button} type="submit">Send Mail</button>
              </form>
            </div>
          </div>
        </div>

        <div>
          Server Side API:
          <br/>
          <p>
            Send mails in between your server side code{' '}
            <button className={styles.button} onClick={triggerMail}>Send Mail</button>
          </p>
        </div>

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
