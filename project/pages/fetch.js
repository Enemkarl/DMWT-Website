import React from "react";
import styles from '../styles/style.module.css'
import useSWR from 'swr';
import Link from 'next/link';

// Ein Funktion, die Fetch verwendet, um Daten von einer URL abzurufen und in JSON umzuwandeln
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CommentList() {
  // Verwendung von useSWR, um Daten von der API abzurufen
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/comments', fetcher);

  if (error) {
    return <div>Fehler beim Laden der Daten.</div>; // Fehlermeldung anzeigen, falls ein Fehler auftritt
  }

  if (!data) {
    return <div>Lädt...</div>; // Anzeige "Lädt...", während die Daten geladen werden
  }

  const comments = data.slice(0, 10); // Die ersten 10 Kommentare aus den abgerufenen Daten

  return (
    <div>
      {/* Header-Bereich */}
      <section className={[styles.headerSection].join(' ')}>
        <div className={styles.headerBox} id={styles.headerIconBox}>
          <Link href='/'>
            <img className={[styles.logoIcon].join(' ')} src='./Icon.svg' alt='Firmen Icon' />
          </Link>
        </div>
        <div className={styles.headerBox} id={styles.headerMenuContainer}>
          <div>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><p>Features</p></a>
          </div>
          <div>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><p>Pricing</p></a>
          </div>
          <div>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><p>Community</p></a>
          </div>
          <div>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><p>Support</p></a>
          </div>
        </div>
        <div className={styles.headerBox} id={styles.headerRegisterBox}>
          <Link href='/fetch'>
            <button className={styles.registerButton}>
              Register
            </button>
          </Link>
        </div>
      </section>
      <section>
        <h1>Die ersten 10 Kommentare</h1>
        <ul>
          {/* Anzeige der ersten 10 Kommentare */}
          {comments.map((comment) => (
            <li key={comment.id}>
              <h3>{comment.name}</h3>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </section>
      {/* Footer-Bereich */}
      <section className={[styles.headerSection].join(' ')}>
        <div className={styles.headerBox} id={styles.headerIconBox}>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
            <img className={[styles.logoIcon].join(' ')} src='./Icon.svg' alt='Firmen Icon' />
          </a>
        </div>
        <div className={styles.headerBox} id={styles.headerMenuContainer}>
          <div>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><p>Mobile App</p></a>
          </div>
          <div>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><p>Community</p></a>
          </div>
          <div>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><p>Company</p></a>
          </div>
        </div>
        <div className={styles.headerBox} id={styles.headerRegisterBox}>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
            <p>© Photo, Inc. 2019. We love our users!</p>
          </a>
        </div>
      </section>
      {/* Globales Styling */}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 62,5%;
        }
        section {
          padding-left: clamp(4rem, 11.472vw + 0.329rem, 16rem);
          padding-right: clamp(4rem, 11.472vw + 0.329rem, 16rem);
        }
        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}