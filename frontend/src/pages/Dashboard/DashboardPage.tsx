import React from 'react';
import styles from './DashboardPage.module.scss';
import Header from '@components/Header/Header';
import ReferralLink from '@components/ReferralLink/ReferralLink';

export default function DashboardPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <ReferralLink className={styles.referralLink} />
      </div>
    </div>
  )
}

