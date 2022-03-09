import Input from '@components/Input/Input';
import {useState} from 'react';
import styles from './ReferralLink.module.scss';

const ReferralLink = ({...props}) => {
  const [referralLink, setReferralLink] = useState('');

  return (
    <Input onChange={e => setReferralLink(e.target.value)}
           defaultValue={referralLink}
           placeholder="Your referral link"
           className={styles.referralLink}
           {...props} />
  )
}

export default ReferralLink;
