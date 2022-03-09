import React from 'react';
import Header from '@components/Header/Header';
import styles from './HomePage.module.scss';

export default function HomePage() {
  return (
    <>
      <div className={styles.pageHeader}>
        <Header className={styles.header} />
        <div className={styles.jumbotron}>
          <h1 className={styles.title}>One million millionaires</h1>
        </div>
      </div>
    </>
  )
}
