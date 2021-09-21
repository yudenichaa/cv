import { Contacts } from 'components';
import styles from './intro.module.scss';
import cn from 'classnames/bind';
import { useTranslation } from 'react-i18next';

const cl = cn.bind(styles);

export default function Intro() {
  const { t } = useTranslation();

  return (
    <section className={cl('intro')}>
      <h1 className={cl('intro__title')}>{t('name')}</h1>
      <h2 className="small">
        Фронтенд разработчик в{' '}
        <a href="https://www.cfa.digital" target="_blank" rel="noreferrer">
          Лайтхаус
        </a>
      </h2>
      <div className={cl('intro__contacts')}>
        <Contacts />
      </div>
    </section>
  );
}
