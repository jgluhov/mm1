import React from 'react';
import styles from './DashboardPage.module.scss';
import Header from '@components/Header/Header';

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      <Header />
      Dashboard page
    </div>
  )
}

