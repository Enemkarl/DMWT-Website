import Head from 'next/head';
import React from 'react';
import styles from './style.module.css';

export default function Home() {
  return (
    <div className={styles.frameDiv}>
    <section className={[styles.headerSection].join(' ')}>
      <div className={styles.headerBox}>
        <img className={[styles.logoIcon].join(' ')} src='./Icon.svg'/>
      </div>
      <div className={styles.headerBox}>
        <div>
          <p>

          </p>
        </div>
        <div>
          <p>

          </p>
        </div>
        <div>
          <p>

          </p>
        </div>
        <div>
          <p>
            
          </p>
        </div>
      </div>
      <div className={styles.headerBox}>
        <button className={[styles.registerButton].join(' ')}>
          Register
        </button>
      </div>
    </section>
    <section className={[styles.bodySection, styles.imageSection].join(' ')}>
      
    </section>  
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
    <section className={[styles.bodySection].join(' ')}>

    </section>
    <section className={[styles.bodySection].join(' ')}>

    </section>
    </div>
  );
}
