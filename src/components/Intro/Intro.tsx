import { Contacts } from 'components';
import styles from './intro.module.scss';
import cn from 'classnames/bind';
import { useTranslation } from 'react-i18next';

const cl = cn.bind(styles);

export default function Intro() {
  const { t } = useTranslation('home', { keyPrefix: 'intro' });

  return (
    <div className={cl('intro')}>
      <h1 className={cl('intro__title')}>{t('name')}</h1>
      <h2 className="small">{t('profession')}</h2>
      <div className={cl('intro__contacts')}>
        <Contacts />
      </div>
    </div>
  );
}
