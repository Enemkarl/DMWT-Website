{/*Import des React Frameworks und des Stylesheets*/}
import React from 'react';
import styles from '../styles/style.module.css';

export default function Home() {
  return (
    /*Umschließendes Div, da return sonst nicht funktioniert */
    <div className={styles.frameDiv}>
    {/*Classname muss wegen module.css hier mit Variablen in geschweifter Klammer angegeben werden 
    Mit eckiger Klammer in der geschweiften und einem Komma als Separator, können mit .join(' ') im Anschluss mehrere Klassen zugewiesen werden
    Header und Footer bekommen ein anderes Styling als die regulären Sections, da sie schmaler ausfallen sollen*/}
    <section className={[styles.headerSection].join(' ')}>
      <div className={styles.headerBox} id={styles.headerIconBox}>
      <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
        <img className={[styles.logoIcon].join(' ')} src='./Icon.svg' alt='Firmen Icon'/>
        </a>
      </div>
      <div className={styles.headerBox} id={styles.headerMenuContainer}>
        <div>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Features</a>
        </div>
        <div>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Pricing</a>
        </div>
        <div>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Community</a>
        </div>
        <div>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Support</a>
        </div>
      </div>
      <div className={styles.headerBox} id={styles.headerRegisterBox}>
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
          <button className={styles.registerButton}>
          Register
          </button>
        </a>
      </div>
    </section>
    {/*Die Section ist ein bisschen verschwendet, da keinerlei Inhalte vermittelt werden, vielleicht als Hero-Section umwandeln */}
    <section className={[styles.bodySection, styles.imageSection].join(' ')}>
      
    </section>  
    {/*Erster Info Bereich oder was hier dann auch immer rein kommt
    4 Unterpunkte/Karten mit Headlines */}
    <section className={[styles.bodySection, styles.infoContainer].join(' ')}>
      <div>
        <h1 className={[styles.headline1].join(' ')}>
          Snap photos and share like never before
        </h1>
      </div>
      <div className={[styles.infoBoxContainer].join(' ')}>
        <div className={[styles.infoBox].join(' ')}>
          <h2 className={[styles.headline2].join(' ')}>
            Sed ut perspiciatis
          </h2>
          <p className={[styles.infoText].join(' ')}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
        </div>
        <div className={[styles.infoBox].join(' ')}>
          <h2 className={[styles.headline2].join(' ')}>
            Sed ut perspiciatis
          </h2>
          <p className={[styles.infoText].join(' ')}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
        </div>
        <div className={[styles.infoBox].join(' ')}>
          <h2 className={[styles.headline2].join(' ')}>
            Sed ut perspiciatis
          </h2>
          <p className={[styles.infoText].join(' ')}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
        </div>
        <div className={[styles.infoBox].join(' ')}>
          <h2 className={[styles.headline2].join(' ')}>
            Sed ut perspiciatis
          </h2>
          <p className={[styles.infoText].join(' ')}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
        </div>
      </div>
    </section>
    {/*Zweiter Info Bereich mit Headline Subheadline und Infokarten */}
    <section className={[styles.bodySection].join(' ')}>
    <div>
        <h1 className={[styles.headline1].join(' ')}>
          Snap photos and share like never before
        </h1>
        <h2 className={[styles.headline2].join(' ')}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </h2>
      </div>
      <div className={[styles.infoCardContainer].join(' ')}>
        <div className={[styles.infoCard].join(' ')}>
          <div>
            <img className={[styles.infoCardImage].join(' ')} src='./infokarte1.svg'/>
          </div>
          <div className={[styles.infoCardText].join(' ')}>
            <h2 className={[styles.headline2].join(' ')}>
              Sed ut perspiciatis
            </h2>
            <p className={[styles.infoText].join(' ')}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
            </p>
          </div>
        </div>
        <div className={[styles.infoCard].join(' ')}>
          <div>
            <img className={[styles.infoCardImage].join(' ')} src='./infokarte2.svg'/>
          </div>
          <div className={[styles.infoCardText].join(' ')}>
            <h2 className={[styles.headline2].join(' ')}>
              Sed ut perspiciatis
            </h2>
            <p className={[styles.infoText].join(' ')}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/*Footer mit gleichen Eigenschaften wie Header */}
    <section className={[styles.headerSection].join(' ')}>
    <div className={styles.headerBox} id={styles.headerIconBox}>
      <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
        <img className={[styles.logoIcon].join(' ')} src='./Icon.svg' alt='Firmen Icon'/>
        </a>
      </div>
      <div className={styles.headerBox} id={styles.headerMenuContainer}>
        <div>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Mobile App</a>
        </div>
        <div>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Community</a>
        </div>
        <div>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Company</a>
        </div>
      </div>
      <div className={styles.headerBox} id={styles.headerRegisterBox}>
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
        © Photo, Inc. 2019. We love our users!
        </a>
      </div>
    </section>
    {/*Globales Styling das auf alle Elemnte dieser Tags angewendet werden kann/soll*/}
    <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 62,5%;
        }
        section{  
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
