import { Contacts } from 'components';
import styles from './intro.module.scss';
import cn from 'classnames/bind';
import { useTranslation, Trans } from 'react-i18next';

const cl = cn.bind(styles);

export default function Intro() {
  const { t } = useTranslation();

  return (
    <div className={cl('intro')}>
      <h1 className={cl('intro__title')}>{t('intro.name')}</h1>
      <h2 className="small">
        <Trans i18nKey="intro.profession">
          Frontend developer at{' '}
          <a href="https://www.cfa.digital" target="_blank" rel="noreferrer">
            Lighthouse
          </a>
        </Trans>
      </h2>
      <div className={cl('intro__contacts')}>
        <Contacts />
      </div>
    </div>
  );
}
